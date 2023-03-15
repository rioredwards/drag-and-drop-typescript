/// <reference path="components/base-component.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
  // -- Instantiate classes
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
