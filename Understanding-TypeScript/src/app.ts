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
        if (this.required && this.value.toString().trim().length === 0 || isNaN(+this.value)) return false;

        if (typeof this.value === 'string') {
            if (this.minLength != null && this.value.length < this.minLength) return false;
            if (this.maxLength != null && this.value.length > this.maxLength) return false;
        }

        if (typeof this.value === 'number') {
            if (this.min != null && this.value < this.min) return false;
            if (this.max != null && this.value > this.max) return false;
        }

        return true;
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
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        // app本体のdiv読み込み
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // templateの適用
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';
        this.attach();

        // 講義ではattachより先にconfigureしてたけど、attachしないとDOMが無いのでnullになる
        this.titleInputElement = document.getElementById('title')! as HTMLInputElement;
        this.descriptionInputElement = document.getElementById('description')! as HTMLInputElement;
        this.mandayInputElement = document.getElementById('manday')! as HTMLInputElement;
        this.configure();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enterdManday = this.mandayInputElement.value;

        // validation
        const validate = [
            new ValidatableImpl({value: enteredTitle, required: true}),
            new ValidatableImpl({value: enteredDescription, required: true, minLength: 5}),
            new ValidatableImpl({value: +enterdManday, required: true, minLength: 5}),
        ]
        if (!validate.every(it => it.isValid())) {
            alert('Invalid Input');
            return;
        }

        return [enteredTitle, enteredDescription, parseFloat(enterdManday)];
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.mandayInputElement.value = '';
    }

    @AutoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, manday] = userInput;
            console.log(title, desc, manday);
            this.clearInputs();
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();