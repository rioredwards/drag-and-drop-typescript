namespace App {
  // -- Project Status Enum
  export enum ProjectStatus {
    Active,
    Finished,
  }

  // -- Project Type
  // This defines the structure of a project.
  // We are using a class instead of an interface because we want to be able to instantiate objects.
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
