<!-- Revise the document named "typescript.md" to incorporate details on classes and interfaces in TypeScript. -->


# TypeScript Classes

A class in TypeScript serves as a blueprint for creating objects. It encapsulates data (properties) and methods to manipulate that data. Here’s a simple example of a TypeScript class:

``` typescript
class Developer {
    name: string; 
    position: string; 

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }
}

const developer = new Developer("Gapur", "Frontend Developer");
console.log(developer.name); 
console.log(developer.position);

```
<br/>

# TypeScript Interfaces

An interface defines a contract in your application. It acts as a custom type that specifies properties and method signatures without implementing the details. Unlike classes, interfaces do not generate JavaScript code; they are purely for type checking. Here’s a brief comparison:

**Class:** Used for creating objects with data and methods.
Interface: Used for type checking and defining contracts.

``` typescript
For example, consider the following interface:

interface Animal {
    name: string;
    sound: string;
}


class Lion implements Animal {
    constructor(public name: string, public sound: string) {}
}

const lion = new Lion("Simba", "Roar");
console.log(lion.name); 
console.log(lion.sound);
```

