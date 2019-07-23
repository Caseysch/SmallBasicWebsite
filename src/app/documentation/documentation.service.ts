import { Injectable } from '@angular/core';

export enum DocType {
  Object,
  Property,
  Operation,
  Event,
  Keyword
}

export class ParentDoc {
  name: string;
  type: DocType;
  description: string;
  operations: Operation[];
  events: Event[];
  properties: Property[];
}

export class Operation {
  name: string;
  summary: string;
  operationSignature: string;
  returnType: string;
  parameters: OperationParams[];  
}

export class OperationParams {
  name: string;
  summary: string;
}

export class Event {
  name: string;
  summary: string;
}

export class Property {
  name: string;
  summary: string;
  isReadOnly: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor() { }

  // Gets the supported languages for documentation
  public static getLanguages(): string[] {
    return ["english", "other language", "idk"];
  }

  // Gets the small basic documentation for a given language
  public static getDocumentation(language: string): ParentDoc[] {
    return [{
      name: "Turtle",
      type: DocType.Object,
      description: language + " The Turtle provides Logo-like functionality to draw shapes by manipulating the properties of a pen and drawing primitives.",
      operations: [{
        name: "Move",
        operationSignature: "Turtle.Move(distance)",
        returnType: "Nothing",
        parameters: [{
          name: "distance",
          summary: "the distance to move the turtle"
        }],
        summary: "Moves the turtle to a specified distance. If the pen is down, it will draw a line as it moves."
      }],
      events: [],
      properties: []
    }, {
        name: "GraphicsWindow",
        type: DocType.Object,
        description: "The GraphicsWindow provides graphics related input and output functionality. For example, using this class, it is possible to draw and fill circles and rectangles.",
        properties: [{
          name: "Top",
          summary: "Gets or sets the Top Position of the graphics window.",
          isReadOnly: false
        },{
            name: "LastKey",
            summary: "Gets the last key that was pressed or released.",
            isReadOnly: true
        }],
        operations: [{
          name: "Clear",
          summary: "Clears the window.",
          parameters: [],
          returnType: "Nothing",
          operationSignature: "GraphicsWindow.Clear()"
        }],
        events: [{
          name: "KeyDown",
          summary: "Raises an event when a key is pressed down on the keyboard."
        }]
      }];
  }
}
