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

type Listener<T> = (items: T[]) => void;

class State<T> {
    listeners: Listener<T>[] = [];

    addListener(fn: Listener<T>) {
        this.listeners.push(fn);
    }
}

class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
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
}

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    protected constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId ?: string) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }

    abstract configure(): void;

    abstract renderContent(): void;

    private attach(insertAtStart: boolean) {
        this.hostElement.insertAdjacentElement(insertAtStart ? `afterbegin` : `beforeend`, this.element);
    }
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
    private project: Project;

    get manday() {
        return this.project.manday < 20 ? this.project.manday.toString() + `人日` : (this.project.manday / 20).toString() + `人月`;
    }

    constructor(hostId: string, project: Project) {
        super(`single-project`, hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    override configure() {
    }

    override renderContent() {
        this.element.querySelector(`h2`)!.textContent = this.project.title;
        this.element.querySelector(`h3`)!.textContent = this.manday;
        this.element.querySelector(`p`)!.textContent = this.project.description.toString();
    }
}

class ProjectList extends Component<HTMLDivElement, HTMLElement> {
    assignedProjects: Project[];

    constructor(private type: `active` | `finished`) {
        super(`project-list`, `app`, false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    override configure() {
        ProjectState.getInstance().addListener((projects: Project[]) => {
            this.assignedProjects = projects.filter(p => {
                if (this.type === `active`) return p.status === ProjectStatus.Active
                return p.status === ProjectStatus.Finished
            });
            this.renderProjects();
        });
    }


    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        this.assignedProjects.forEach(item => new ProjectItem(listEl.id, item));
    }

    renderContent() {
        this.element.querySelector(`ul`)!.id = `${this.type}-projects-list`;
        this.element.querySelector(`h2`)!.textContent = this.type === `active` ? `実行中` : `完了`;
    }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    constructor() {
        super(`project-input`, `app`, true, `user-input`);

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

    configure() {
        this.element.addEventListener(`submit`, this.submitHandler);
    }

    override renderContent() {
    }
}

new ProjectInput();
new ProjectList(`active`);
new ProjectList(`finished`);