# NestJS & Typescript Coding Convention

## 목차

- [1. 기본 세팅](#1-기본-세팅)
- [2. TypeScript](#2-typescript)
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
- [3. NestJS](#3-nestjs)
  - [3-1. 디렉토리 구조](#3-1-디렉토리-구조)

---
## 1. 기본 세팅

- #### Prettier, ESLint
  - 팀원간에 동일한 `Prettier`, `ESLint` 설정 파일로 작업을 진행한다.

---
## 2. TypeScript
[2. 참고]: https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md

- ### 2-1. 네이밍

- #### Variable and Function
  - 변수명과 함수명은 `camelCase`를 사용한다.

    **Bad**
    ```ts
    let FooVar: string
    function BarFunc() { }
    ```
    **Good**
    ```ts
    let fooVar: string
    function barFunc() { }
    ```

- #### Class
  - 클래스명은 `PascalCase`를 사용한다.

    **Bad**
    ```ts
    class foo { }
    ```
    **Good**
    ```ts
    class Foo { }
    ```

  - 멤버명과 메소드명은 `camelCase`를 사용한다.

    **Bad**
    ```ts
    class Foo {
      Bar: number
      Baz() { }
    }
    ```
    **Good**
    ```ts
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
    ```ts
    interface IFoo {
      Bar: number
    }
    ```
    **Good**
    ```ts
    interface Foo {
      bar: number
    }
    ```

- #### Type
  - 타입명은 `PascalCase`를 사용한다.
  - 멤버명은 `camelCase`를 사용한다.

    **Bad**
    ```ts
    type foo = {
      Bar: number
    }
    ```
    **Good**
    ```ts
    type Foo = {
      bar: number
    }
    ```

- #### Namespace
  - 네임스페이스명은 `PascalCase`를 사용한다.

    **Bad**
    ```ts
    namespace foo { }
    ```
    **Good**
    ```ts
    namespace Foo { }
    ```

- #### Enum
  - enum명은 `PascalCase`를 사용한다.
  - enum 멤버명은 `PascalCase`를 사용한다.

    **Bad**
    ```ts
    enum Color {
      red
    }
    ```
    **Good**
    ```ts
    enum Color {
      Red
    }
    ```

  - switch문에서 enum을 사용하는 경우 `default:` case를 사용하지 않는다.

    **Bad**
    ```ts
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
    ```ts
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
  - 파일이 단일 클래스로 이루어져 있거나 특정 프레임워크(ex: React)의 구성요소로 사용되어 `PascalCase`를 권장하는 경우 `PascalCase`를 사용한다. (`MyClass.ts`, `MyComponent.ts`)

---
### 2-2. ES6

- #### let, const
  - 변수 선언시 `var`를 사용하지 않고 `let`과 `const`만을 사용한다.

- #### Arrow function
  - 함수 선언시 화살표 함수를 사용한다.

    **Bad**
    ```ts
    const myFn1 = function (a: number, b: number) {
      return a + b
    }

    function myFn2 (a: number, b: number) {
      return a + b
    }
    ```
    **Good**
    ```ts
    const myFn1 = (a: number, b: number) => a + b

    const myFn2 = (a: number, b: number) => {
      return a + b
    }
    ```

- #### Destructuring assignment
  - 객체를 참조할 때는 구조 분해 할당을 사용한다.

    ```ts
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

    ```ts
    const str1 = 'World!'
    const str2 = `Hello ${str1}` // Hello World!
    ```

  - 문자열을 여러줄로 표현하는 경우 back tick (``\``)을 사용한다.

    ```ts
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
    ```ts
    let foos: Array<number>
    ```
    **Good**
    ```ts
    let foos: number[]
    ```

  - 배열을 복사하거나 확장할 때 spread 연산자를 사용한다.

    ```ts
    const oldArray = [1, 2, 3];
    const newArray = [...oldArray, 4, 5]; // [1, 2, 3, 4, 5]
    ```

- #### `==` or `===`
  - `==`보다 `===`를 사용한다.

    **Bad**
    ```ts
    if (foo == 100) {
      
    }
    ```
    **Good**
    ```ts
    if (foo === 100) {

    }
    ```

---
## 3. NestJS

### 3-1. 디렉토리 구조
[3-1. 참고]: https://sumini.dev/guide/019-nestjs-directory-structure/
  - 기본구조
    - 다음과 같은 디렉토리 구조를 따른다.
      ```
      src
      ├── auth
      │   ├── decorators
      │   ├── dtos
      │   ├── exceptions
      │   ├── guards
      │   └── interfaces
      ├── common
      │   ├── decorators
      │   ├── dtos
      │   ├── entities
      │   ├── exceptions
      │   ├── helpers
      │   └── interfaces
      ├── config
      │   ├── app
      │   ├── database
      │   │   └── mysql
      │   └── jwt
      ├── database
      │   ├── migrations
      ├── modules
      │   ├── item
      │   │   ├── brands
      │   │   │   ├── entities
      │   │   │   ├── interfaces
      │   │   │   └── repositories
      │   │   └── items
      │   │       ├── entities
      │   │       ├── interfaces
      │   │       └── repositories
      │   └── user
      │       └── users
      │           ├── entities
      │           ├── interfaces
      │           └── repositories
      ├── providers
      |   ├── aws
      │   │   ├── s3
      │   │   └── sqs
      |   ├── cache
      │   │   └── redis
      │   ├── database
      │   │   └── postgres
      │   └── elasticsearch
      │       ├── helpers
      │       └── types
      ├── app.controller.ts
      ├── app.module.ts
      └── main.ts
      ```

  - Config
    - `@nestjs/config`를 사용하여 환경변수들을 설정한다.
      ```
      src/config
      ├── app
      │   ├── config.module.ts
      │   ├── config.service.ts
      │   ├── configuration.ts
      │   └── index.ts
      ├── database
      │   └── mysql
      │       ├── config.module.ts
      │       ├── config.service.ts
      │       ├── configuration.ts
      │       └── index.ts
      └── jwt
          ├── config.module.ts
          ├── config.service.ts
          ├── configuration.ts
          └── index.ts
      ```
    - 각 파일의 용도는 다음과 같다.
      - `index.ts`: 다른 모듈들을 export하는 barrel
      - `configuration.ts`: process.env 환경 변수들을 읽어 @nestjs/config에 등록
      - `config.service.ts`: 외부 모듈들에 각 config 값들을 노출시켜주는 인터페이스 역할을 수행
      - `config.module.ts`: ConfigModule.forRoot를 호출하고 service를 외부 모듈들에 export

  - Providers
    - Provider는 외부 provider 엔진과 앱을 연결시켜주는 모듈들로 구성된다. (데이터베이스, 검색엔진 등)
    - service에는 provider 자체를 활용하는 기능만 추가하고, 비즈니스 로직은 포함하지 않는다.
      ```
      src/providers
      ├── aws
      │   ├── s3
      │   │   ├── index.ts
      │   │   ├── s3.module.ts
      │   │   └── s3.service.ts
      │   └── sqs
      │       ├── index.ts
      │       └── sqs.module.ts
      ├── cache
      │   └── redis
      │       ├── redis.module.ts
      │       ├── redis.service.ts
      │       └── index.ts
      ├── database
      │   └── mysql
      │       ├── index.ts
      │       └── mysql.module.ts
      └── elasticsearch
          ├── helpers
          ├── types
          ├── elasticsearch.module.ts
          ├── elasticsearch.service.ts
          └── index.ts
      ```