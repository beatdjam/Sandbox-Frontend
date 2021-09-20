/// <reference path="components/project-input-component.ts" />
/// <reference path="components/project-list-component.ts" />
/// <reference path="components/project-item-component.ts" />

namespace App {
    new ProjectInput();
    new ProjectList(`active`);
    new ProjectList(`finished`);
}