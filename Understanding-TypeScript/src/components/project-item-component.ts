/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind-decorator.ts" />
/// <reference path="../models/project-model.ts" />
/// <reference path="../models/drag-drop-interfaces.ts" />

namespace App {
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
}