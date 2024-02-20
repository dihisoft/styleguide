# NestJS & Typescript Coding Convention

## 목차

- [1. 기본 세팅](#1-기본-세팅)
- [2. 코드](#2-코드)
  - [2-1. 네이밍](#2-1-네이밍)
    - [Variable](#variable-and-function)
    - [Class](#class)
    - [Interface](#interface)
    - [Type](#type)
    - [Namespace](#namespace)
    - [Enum](#enum)
    - [Filename](#filename)
  - [2-2. ES6](#2-2-es6)
    - [let, const](#let-const)
    - [Arrow function](#arrow-function)
    - [Destructuring assignment](#destructuring-assignment)
    - [Quotes](#quotes)
    - [Spaces](#spaces)
    - [Semicolons](#semicolons)
    - [Array](#array)
    - [`==` or `===`](#or)

## 1. 기본 세팅

- #### Prettier, ESLint
  - 팀원간에 동일한 `Prettier`, `ESLint` 설정 파일로 작업을 진행한다.

## 2. 코드

- ### 2-1. 네이밍

- #### Variable and Function
  - 변수명과 함수명은 `camelCase`를 사용한다.

    **Bad**
    ```tsx
    let FooVar: string
    function BarFunc() { }
    ```
    **Good**
    ```tsx
    let fooVar: string
    function barFunc() { }
    ```

- #### Class
  - 클래스명은 `PascalCase`를 사용한다.

    **Bad**
    ```tsx
    class foo { }
    ```
    **Good**
    ```tsx
    class Foo { }
    ```

  - 멤버명과 메소드명은 `camelCase`를 사용한다.

    **Bad**
    ```tsx
    class Foo {
      Bar: number
      Baz() { }
    }
    ```
    **Good**
    ```tsx
    class Foo {
      bar: number
      baz() { }
    }
    ```

- #### Interface
  - 인터페이스명은 `PascalCase`를 사용한다.
  - 멤버명은 `camelCase`를 사용한다.
  - 접두사로 `I`를 사용하지 않는다.

    **Bad**
    ```tsx
    interface IFoo {
      Bar: number
    }
    ```
    **Good**
    ```tsx
    interface Foo {
      bar: number
    }
    ```

- #### Type
  - 타입명은 `PascalCase`를 사용한다.
  - 멤버명은 `camelCase`를 사용한다.

    **Bad**
    ```tsx
    type foo = {
      Bar: number
    }
    ```
    **Good**
    ```tsx
    type Foo = {
      bar: number
    }
    ```

- #### Namespace
  - 네임스페이스명은 `PascalCase`를 사용한다.

    **Bad**
    ```tsx
    namespace foo { }
    ```
    **Good**
    ```tsx
    namespace Foo { }
    ```

- #### Enum
  - enum명은 `PascalCase`를 사용한다.
  - enum 멤버명은 `PascalCase`를 사용한다.

    **Bad**
    ```tsx
    enum Color {
      red
    }
    ```
    **Good**
    ```tsx
    enum Color {
      Red
    }
    ```

  - switch문에서 enum을 사용하는 경우 `default:` case를 사용하지 않는다.

    **Bad**
    ```tsx
    enum Color {
      Red,
      Blue,
      Green
    }

    const color: Color = Color.Red

    switch (color) {
      case Color.Red:
        console.log('red')
        break
      default:
        console.log('default color')
        break
    }
    ```
    **Good**
    ```tsx
    enum Color {
      Red,
      Blue,
      Green
    }

    const color: Color = Color.Red

    switch (color) {
      case Color.Red:
        console.log('red')
        break
      case Color.Blue:
        console.log('blue')
        break
      case Color.Green:
        console.log('green')
        break
    }
    ```

- #### Filename
  - 파일명은 기본적으로 `camelCase`를 사용한다. (`utils.ts`, `map.ts`)
  - 파일이 단일 클래스로 이루어져 있거나 특정 프레임워크(ex: React)의 구성요소로 사용되어 `PascalCase`를 권장하는 경우 `PascalCase`를 사용한다. (`MyClass.tsx`, `MyComponent.tsx`)

##
### 2-2. ES6

- #### let, const
  - 변수 선언시 `var`를 사용하지 않고 `let`과 `const`만을 사용한다.

- #### Arrow function
  - 함수 선언시 화살표 함수를 사용한다.

    **Bad**
    ```tsx
    const myFn1 = function (a: number, b: number) {
      return a + b
    }

    function myFn2 (a: number, b: number) {
      return a + b
    }
    ```
    **Good**
    ```tsx
    const myFn1 = (a: number, b: number) => a + b

    const myFn2 = (a: number, b: number) => {
      return a + b
    }
    ```

- #### Destructuring assignment
  - 객체를 참조할 때는 구조 분해 할당을 사용한다.

    ```tsx
    const arr = [1, 2, 3]
    const [one, two, three] = arr

    console.log(one) // 1
    console.log(two) // 2
    console.log(three) // 3

    const obj = {
      firstName: 'alice',
      lastName: 'bob'
    }
    const { firstName, lastName } = obj

    console.log(firstName) // alice
    console.log(lastName) // bob
    ```

- #### Quotes
  - 큰따옴표(`"`)보다 작은따옴표(`'`)를 사용한다.
  - 문자열이 변수와 함께 표현되는 경우 back tick (``\``)을 사용한다.

    ```tsx
    const str1 = 'World!'
    const str2 = `Hello ${str1}` // Hello World!
    ```

  - 문자열을 여러줄로 표현하는 경우 back tick (``\``)을 사용한다.

    ```tsx
    const str = `line1 line1 line1 line1
    line2 line2 line2 line2`
    ```
  
- #### Spaces
  - 들여쓰기는 `탭`이 아닌 `2칸`(2 spaces)으로 한다.

- #### Semicolons
  - 세미콜론(`;`)은 사용하지 않는다.

- #### Array
  - 배열은 `foos: Array<T>`보다 `foos: T[]`를 사용한다.

    **Bad**
    ```tsx
    let foos: Array<number>
    ```
    **Good**
    ```tsx
    let foos: number[]
    ```

  - 배열을 복사하거나 확장할 때 spread 연산자를 사용한다.

    ```tsx
    const oldArray = [1, 2, 3];
    const newArray = [...oldArray, 4, 5]; // [1, 2, 3, 4, 5]
    ```

- #### `==` or `===`
  - `==`보다 `===`를 사용한다.

    **Bad**
    ```tsx
    if (foo == 100) {
      
    }
    ```
    **Good**
    ```tsx
    if (foo === 100) {

    }
    ```


