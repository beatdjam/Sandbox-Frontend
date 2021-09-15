function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const origin = descriptor.value;
    return {
        configurable: true,
        get() {
            return origin.bind(this);
        }
    }
}

interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

class ValidatableImpl {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;

    constructor(args: Validatable) {
        this.value = args.value;
        this.required = args.required;
        this.minLength = args.minLength;
        this.maxLength = args.maxLength;
        this.min = args.min;
        this.max = args.max;
    }

    isValid(): boolean {


        if (typeof this.value === `string`) {
            if (this.required && this.value.toString().trim().length === 0) return false;
            if (this.minLength != null && this.value.length < this.minLength) return false;
            if (this.maxLength != null && this.value.length > this.maxLength) return false;
        }

        if (typeof this.value === `number`) {
            if (this.required && isNaN(+this.value)) return false;
            if (this.min != null && this.value < this.min) return false;
            if (this.max != null && this.value > this.max) return false;
        }

        return true;
    }
}

enum ProjectStatus {
    Active, Finished
}

class Project {
    constructor(public id: string, public title: string, public description: string, public manday: number, public status: ProjectStatus) {
    }
}

type Listener = (items: Project[]) => void;

class ProjectState {
    private listeners: Listener[] = [];
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, manday: number) {
        const newProject = new Project(Math.random().toString(), title, description, manday, ProjectStatus.Active);
        this.projects.push(newProject);
        this.listeners.forEach(it => it(this.projects.slice()));
    }

    addListener(fn: Listener) {
        this.listeners.push(fn);
    }
}

class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: Project[];

    constructor(private type: `active` | `finished`) {
        // template読み込み
        this.templateElement = document.getElementById(`project-list`)! as HTMLTemplateElement;
        // app本体のdiv読み込み
        this.hostElement = document.getElementById(`app`)! as HTMLDivElement;
        this.assignedProjects = [];

        // templateの適用
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = `${this.type}-projects`;

        ProjectState.getInstance().addListener((projects: Project[]) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });

        this.attach();
        this.renderContent();
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        this.assignedProjects.forEach(item => {
            const listItem = document.createElement(`li`);
            listItem.textContent = item.title;
            listEl.appendChild(listItem);
        });
    }

    private renderContent() {
        this.element.querySelector(`ul`)!.id = `${this.type}-projects-list`;
        this.element.querySelector(`h2`)!.textContent = this.type === `active` ? `実行中` : `完了`;
    }

    private attach() {
        this.hostElement.insertAdjacentElement(`beforeend`, this.element);
    }

}

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    constructor() {
        // template読み込み
        this.templateElement = document.getElementById(`project-input`)! as HTMLTemplateElement;
        // app本体のdiv読み込み
        this.hostElement = document.getElementById(`app`)! as HTMLDivElement;

        // templateの適用
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = `user-input`;
        this.attach();

        // 講義ではattachより先にconfigureしてたけど、attachしないとDOMが無いのでnullになる
        this.titleInputElement = document.getElementById(`title`)! as HTMLInputElement;
        this.descriptionInputElement = document.getElementById(`description`)! as HTMLInputElement;
        this.mandayInputElement = document.getElementById(`manday`)! as HTMLInputElement;
        this.configure();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enterdManday = this.mandayInputElement.value;

        // validation
        const validate: Validatable[] = [
            {value: enteredTitle, required: true},
            {value: enteredDescription, required: true, minLength: 5},
            {value: +enterdManday, required: true, min: 1, max: 1000},
        ]
        if (!validate.every(it => new ValidatableImpl(it).isValid())) {
            alert(`Invalid Input`);
            return;
        }

        return [enteredTitle, enteredDescription, parseFloat(enterdManday)];
    }

    private clearInputs() {
        this.titleInputElement.value = ``;
        this.descriptionInputElement.value = ``;
        this.mandayInputElement.value = ``;
    }

    @AutoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, manday] = userInput;
            ProjectState.getInstance().addProject(title, desc, manday);
            this.clearInputs();
        }
    }

    private configure() {
        this.element.addEventListener(`submit`, this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement(`afterbegin`, this.element);
    }
}

new ProjectInput();
new ProjectList(`active`);
new ProjectList(`finished`);