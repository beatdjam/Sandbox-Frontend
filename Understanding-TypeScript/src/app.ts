function Autobind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const origin = descriptor.value;
    return {
        configurable: true,
        get() {
            return origin.bind(this);
        }
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

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();