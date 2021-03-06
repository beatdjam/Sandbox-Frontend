import {Draggable} from "../models/drag-drop-interfaces";
import {Component} from "./base-component";
import {Project} from "../models/project-model";
import {AutoBind} from "../decorators/autobind-decorator";

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
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

    @AutoBind
    dragStartHandler(event: DragEvent): void {
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

    dragendHandler(_: DragEvent): void {
        console.log('Drag End');
    }

    override configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragendHandler);
    }

    override renderContent() {
        this.element.querySelector(`h2`)!.textContent = this.project.title;
        this.element.querySelector(`h3`)!.textContent = this.manday;
        this.element.querySelector(`p`)!.textContent = this.project.description.toString();
    }
}
