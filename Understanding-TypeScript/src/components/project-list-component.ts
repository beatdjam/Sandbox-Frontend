/// <reference path="base-component.ts" />
/// <reference path="../decorators/autobind-decorator.ts" />
/// <reference path="../states/project-state.ts" /
/// <reference path="../models/project-model.ts" />
/// <reference path="../models/drag-drop-interfaces.ts" />
namespace App {
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
        assignedProjects: Project[];

        constructor(private type: `active` | `finished`) {
            super(`project-list`, `app`, false, `${type}-projects`);
            this.assignedProjects = [];

            this.configure();
            this.renderContent();
        }

        @AutoBind
        dragOverHandler(event: DragEvent): void {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                this.element.querySelector('ul')!
                    .classList
                    .add('droppable');
            }
        }

        @AutoBind
        dropHandler(event: DragEvent): void {
            this.element.querySelector('ul')!
                .classList
                .remove('droppable');
            const id = event.dataTransfer!.getData('text/plain');
            ProjectState.getInstance().moveProject(id, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
        }

        @AutoBind
        dragLeaveHandler(_: DragEvent): void {
            this.element.querySelector('ul')!
                .classList
                .remove('droppable');
        }

        override configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('drop', this.dropHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
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
}