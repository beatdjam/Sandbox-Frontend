import {Component} from "./base-component";
import {Validatable, ValidatableImpl} from "../util/validation";
import {AutoBind} from "../decorators/autobind-decorator";
import {ProjectState} from "../states/project-state";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
