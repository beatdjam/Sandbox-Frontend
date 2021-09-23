export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    element: U;

    protected constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId ?: string) {
        const templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        const importedNode = document.importNode(templateElement.content, true);

        const hostElement = document.getElementById(hostElementId)! as T;
        this.element = importedNode.firstElementChild as U;
        if (newElementId) this.element.id = newElementId;

        hostElement.insertAdjacentElement(insertAtStart ? `afterbegin` : `beforeend`, this.element);
    }

    abstract configure(): void;

    abstract renderContent(): void;
}
