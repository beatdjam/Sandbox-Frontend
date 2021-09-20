import {Project, ProjectStatus} from "../models/project-model.js";

type Listener<T> = (items: T[]) => void;

class State<T> {
    listeners: Listener<T>[] = [];

    addListener(fn: Listener<T>) {
        this.listeners.push(fn);
    }
}

export class ProjectState extends State<Project> {
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
        this.updateListeners();
    }

    moveProject(id: string, newStatus: ProjectStatus) {
        const project = this.projects.find(prj => prj.id === id);
        if (project && project.status !== newStatus) project.status = newStatus;
        this.updateListeners();
    }

    private updateListeners() {
        this.listeners.forEach(it => it(this.projects.slice()));
    }
}
