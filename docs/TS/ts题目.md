## 问题：TypeScript 和 JavaScript 的主要区别。

静态类型检查：
- TypeScript：是一种静态类型的编程语言，它在代码编译时期进行类型检查。这意味着开发者必须在编写代码时声明变量和函数返回值的类型。静态类型检查可以在代码运行之前发现潜在的错误。
- JavaScript：是一种动态类型的脚本语言，它在运行时进行类型检查。这意味着变量的类型是在代码运行时自动确定的，而不需要在代码中显式声明。

类型注解和接口：
- TypeScript：提供了类型注解和接口等功能，允许开发者定义自己的类型，使得代码更加清晰和易于维护。
- JavaScript：不支持类型注解和接口。它使用原型继承而不是传统的类继承。

编译：
- TypeScript：需要被编译成JavaScript才能在浏览器或Node.js环境中运行。
- JavaScript：作为一种解释型语言，可以直接在浏览器或Node.js环境中运行，不需要编译过程。

工具支持：
- TypeScript：静态类型的特性，提供更强大的编辑器支持，例如自动完成、重构工具和更详细的错误提示。
- JavaScript：虽然现代开发环境也提供了对JavaScript的广泛支持，但由于其动态类型的特性，这些支持通常不如TypeScript那样强大和精确。

生态系统和社区：
- TypeScript：被许多大型项目和团队采用，特别是那些需要更严格的代码质量和可维护性的项目。
- JavaScript：有一个更大、更广泛的社区和生态系统，因为它是Web开发的基石，所有的网页都在使用它。

## 问题：TS 定义变量类型的方法

类型注解（Type Annotations）： const name: string | undefined​

类型推断（Type Inference）：const name = "jack"

## 问题：TypeScript  类型注解（Type Annotations）

TypeScript提供的核心特性之一，旨在在编译时期捕获并防止类型相关的错误，从而提高代码的可靠性和可维护性。​
​
- 变量的类型注解​
你可以为变量指定类型，确保变量只能存储特定类型的值。
```js
let name: string = "Alice";​
let age: number = 30;​
let isStudent: boolean = true;
```

- 函数参数和返回值的类型注解​
在函数中，你可以为参数和返回值指定类型。
```js
function greet(name: string): string {​
  return "Hello, " + name;​
}
```

- 接口（Interface）和类型别名（Type Aliases）​
TypeScript还允许使用接口或类型别名来定义对象的结构。

```js

interface Person {​
  name: string;​
  age: number;​
}​
​
let employee: Person = {​
  name: "Bob",​
  age: 25​
};​
​
type Point = {​
  x: number;​
  y: number;​
};​
​
let coord: Point = {​
  x: 10,​
  y: 20​
};
```

## 问题：TypeScript 中的 类型别名 和 交叉类型​
- 类型别名（Type Aliases）​

类型别名让你可以给一个类型起一个新的名字。这不仅仅限于对象类型，也可以适用于联合类型、元组以及任何其他类型。类型别名定义使用 type 关键字。
```js
type Point = {​
  x: number;​
  y: number;​
};​
type ID = string | number;​
```

- 交叉类型（Intersection Types）​

将多个类型合并为一个类型，这个新类型将具有所有成员类型的特性。这是通过使用 & 操作符来实现的。
```js
type Name = {​
  name: string;​
};​
type Age = {​
  age: number;​
};​
type Person = Name & Age;​
```

## 问题：TypeScript 中的接口（Interfaces）和它们的用途。​
接口（Interfaces）是一个非常强大的特性，用于定义对象的结构。接口可以指定一个对象应该有哪些属性以及这些属性的类型。它们是TypeScript进行静态类型检查的重要工具，尤其是在处理复杂数据结构时。接口不仅可以帮助你定义复杂类型，还能提高代码的可读性和维护性，确保在开发过程中使用一致的数据结构。​
​
- 定义对象结构
```ts
interface Person {​
  name: string;​
  age: number;​
}​
```

- 函数参数

```ts
function greet(person: Person) {​
  console.log("Hello, " + person.name);​
}
```

- 强制实现特定的类结构​

接口可以被类实现（Implements），这意味着类必须包含接口中定义的所有属性和方法。这是一种确保类满足特定契约的方式。
```ts

interface ClockInterface {​
  currentTime: Date;​
  setTime(d: Date): void;​
}​
​
class Clock implements ClockInterface {​
  currentTime: Date = new Date();​
  setTime(d: Date) {​
      this.currentTime = d;​
  }​
}
```

- 继承​

接口可以继承其他接口，这允许你从一个或多个基接口复制成员，创建出包含所有成员的新接口。
```ts

interface Shape {​
  color: string;​
}​
​
interface Square extends Shape {​
  sideLength: number;​
}
```


## 问题：Typescript  接口（Interface）和类型别名（Type Aliases）  的区别

- 扩展性：​
    - 接口：可以通过声明合并来扩展。这意味着你可以多次声明同一个接口，并将它们合并为一个。接口支持扩展多个接口，提供了一种强大的方式来构建抽象和契约。
    ```ts
    interface Person {​
        name: string;​
    }​
    interface Person {​
        age: number;​
    }​
    // 合并拓展​ 等价
    interface Person {​
        name: string;​
        age: number;​
    }
    ```
    - 类型别名：不能通过声明合并来扩展。类型别名可以使用交叉类型来实现类似的功能。
    ```ts
    type Name = {​
        name: string;​
    };​
    type Age = {​
        age: number;​
    };​
    type Person = Name & Age;
    ```
- 使用场景：
    - 接口：
        - 主要用于定义对象的形状
        - 特别适用于定义类的实现或对象字面量的结构
        - 因为它们支持声明合并，接口非常适合定义公共的外部API的形状
    - 类型别名：
        - 更适用于定义类型的联合或元组
        - 以及其他需要具体类型组合的场景
        - 类型别名的灵活性更高，可以用来定义几乎任何类型

- 声明合并：
    - 接口：支持
    - 类型别名：不支持

- 继承与交叉类型：
    - 接口：可以通过 extends 关键字继承其他接口或类
    - 类型别名：可以通过 & 符号创建交叉类型，以组合现有的多种类型