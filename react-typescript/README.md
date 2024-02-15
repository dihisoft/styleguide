# React & Typescript Coding Convention

## 목차

- [1. 기본 세팅](#1-기본-세팅)
- [2. 코드](#3-코드)
  - [2-1. 네이밍](#3-1-네이밍)
  - [2-2. ES6](#3-2-es6)
  - [2-3. 스타일 컴포넌트](#3-3-스타일-컴포넌트)
  - [2-4. 컴포넌트 내부 순서](#3-4-컴포넌트-내부-순서)
- [3. 폴더 구조](#4-폴더-구조)
- [3-1. 라우터 디렉토리](#4-1-라우터-디렉토리)
  - [3-1-1. routing Folder](#4-1-1-routing-folder)
  - [3-1-2. component Folder](#4-1-2-component-folder)
  - [3-1-3. api Folder](#4-1-3-api-folder)
- [3-2. 루트 디렉토리](#4-2-루트-디렉토리)
  - [3-2-1. utils](#4-2-1-utils)
  - [3-2-2. constants](#4-2-2-constants)
  - [3-2-3. assets](#4-2-3-assets)
  - [3-2-4. components](#4-2-4-components)
  - [3-2-5. hooks](#4-2-5-hooks)
  - [3-2-6. styles](#4-2-6-styles)
  - [3-2-7. types](#4-2-7-types)
- [4. 기타](#5-기타)

## 1. 기본 세팅

- Prettier, ESLint
  - 팀원간에 동일한 Prettier, ESLint 설정 파일로 작업을 진행한다.

## 2. 코드

### 2-1. 네이밍

- 컴포넌트

  - 컴포넌트의 이름은 pascal case로 작성한다.

    ```tsx
    import React from 'react';

    const Header = () => {
      return <>I'm header</>;
    };

    export default Header;
    ```

- Interface, Type

  - Interface와 Type중에 Type 사용을 우선시 한다.
  - (type이 유니온 타입이나 교차 타입 같은 고급 타입을 사용하는데 있어서 유연하다고 생각)

    ```tsx
    type User = {
      id: number;
      name: string;
      email: string;
    };
    type UserDeleteRequest = Pick<User, 'id'>;
    type UserProfile = Partial<Omit<User, 'id'>>;

    type ApiResponse<T> = {
      status: string;
      data: T;
    };
    ```

  - 컴포넌트의 props는 interface로 정의한다.

    ```tsx
    interface UserProps {
      id: number;
      name: string;
      email: string;
    }

    const UserProfile = ({
      id,
      name,
      email,
    }: UserProps) => {
      return (
        <div>
          <h2>{name}</h2>
          <p>Email: {email}</p>
        </div>
      );
    };
    ```

- 클래스
  - 클래스명은 pascal case로 작성한다.
  - 예시) ChocoCookie, UserRepository, NetworkModule
- 함수
  - 함수명은 camel case로 작성한다.
  - 예시) run(), runFast(), getBackground()
- 속성

  - 속성의 이름은 camel case를 사용한다.

    ```tsx
    // bad
    <Card
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Card
      userName="hello"
      phoneNumber={12345678}
    />
    ```

- 변수
  - 변수명은 camel case로 작성한다.
  - 예시) userData, foodRecipe
- 상수
  - 상수명은 모두 대문자를 사용하고 단어 사이는 밑줄로 연결한다.
  - 예시) HTTP_OK, AUTH_TOKEN, BASE_URL
- 폴더
  - 라우팅 폴더명은 kebab case로 작성한다.
  - 라우팅 폴더를 제외한 폴더명은 camel case로 작성한다.
- 파일

  - tsx(리액트 컴포넌트)가 없을 경우 .ts 확장자를 사용한다.
  - 컴포넌트 파일은 pascal case로 작성한다.
  - 클래스가 정의된 파일은 pascal case로 클래스명과 동일하게 작성한다.
  - 위 이외의 파일명은 camel case로 작성한다.

- 이벤트 핸들러
  - props의 경우에는 ‘on’을 붙여서 작성한다.
  - 함수인 경우에는 ‘handle’을 붙여서 작성한다. (함수 이름을 봤을 때 이벤트 핸들러를 처리하는지 함수인지 판별 가능)
    ```tsx
    <MyComponent onClick={this.handleClick} />
    ```

### 2-2. ES6

- 배열이나 객체의 요소를 복사하거나 확장할 때 spread 연산자를 사용한다.

  ```tsx
  const oldArray = [1, 2, 3];
  const newArray = [...oldArray, 4, 5]; // [1, 2, 3, 4, 5]
  ```

- 객체를 참조할 때는 구조 분해 할당을 사용한다.
  ```tsx
  const person = { name: 'John', age: 30 };
  const { name, age } = person;
  ```
- let과 const만 사용한다. (var 사용 금지)
- 화살표 함수를 사용한다.
- null이나 undefined를 처리할 때는 optional chaining 연산자 (?.) 를 사용한다.

  ```tsx
  const user = { profile: { name: 'John' } };

  // good
  const userName = user.profile?.name ?? '';

  // bad
  if (user.profile) {
    const userName = user.profile.name;
  } else {
    const userName = '';
  }
  ```

### 2-3. 스타일 컴포넌트

1. 최상위 부모
   - 'Layout' 이름으로 생성
2. 최상위 부모의 자식
   - 'Row' 또는 'Col' 이름으로 생성
   - Row나 Col이라는 네이밍의 실제 태그는 div, section 태그등이 될 수 있음
   - Row -> 가로, Col -> 세로
     - 둘 다 실제 태그가 div여도 flex-direction 등을 변경해서 사용 가능
3. 나머지 요소
   - div 태그 -> 'Box'
   - section 태그 -> 'Section'
   - ul 태그 -> 'List'
   - li 태그 -> 'Item'
   - p 태그 -> 'Paragraph'
   - span 태그 -> 'Span'
4. 스타일은 다르지만 태그 형태가 같아서 중복되는 이름이 생긴다면 기본 네이밍 앞에 설명을 돕는 명사를 붙인다.
5. 예시) UserRow, GuestRow, UserCol, UserBox, GuestBox 등

```tsx
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: 1;
  padding: 10px;
`;

const Box = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Item = styled.li`
  width: 100px;
  height: 50px;
`;
```

### 2-4. 컴포넌트 내부 순서

1. Import
2. Interface
3. styled-component
4. useState
5. global state
6. custom hooks
7. useEffect
8. handler
9. etc
10. react code

```tsx
'use client';

// 1. import
import { use, useEffect, useState } from 'react';

// 2. interface
interface UserListContainerProps {
  users: string[];
}

// 3. styled-components
const Layout = styled.div`
  // code
`;

const Row = styled.div`
  // code
`;

const Box = styled.div`
  // code
`;

const UserListContainer = ({
  users,
}: UserListContainerProps) => {
  // 4. state
  const [user, setUser] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<string>();

  // 5. global state
  const { bears, increasePopulation, removeAllBears } =
    useStore(state => state);

  // 6. custom Hooks
  const { getUserListAction, isLoadingUserList } =
    useUserList();

  // 7. useEffect
  useEffect(() => {
    getUserListAction();
  }, []);

  useEffect(() => {
    if (isLoadingUserList) {
      return;
    }
    setUser(users);
  }, [isLoadingUserList]);

  // 8. handler
  const handleClickDeleteUser = (id: string) => {};
  const handleClickEditUser = (id: string) => {};

  // 9. etc
  const isEnabledSaveButton = () => {};

  if (isLoadingUserList) {
    return <>Loading</>;
  }

  // 10. react code
  return (
    <Layout>
      <Row>
        {users.map(userData => (
          <Box>{userData}</Box>
        ))}
      </Row>
    </Layout>
  );
};

export default UserListContainer;
```

## 3. 폴더 구조

- 가독성, 유지보수 효율성을 높이기 위해 '뷰', '비즈니스 로직 처리', '데이터 관리'의 책임을 명확히 구분해서 관리해야한다.
- 폴더 구조는 사용하는 라이브러리나 버전에 따라 다를 수 있지만, 기본 구조는 최대한 비슷하게 설계해야한다.
- 라우팅 폴더는 구글의 URL구조 권장방식을 참고해서 단어의 형태로 간결하게 네이밍하고, 여러 개의 단어로 표현되야한다면 kebab case를 사용한다.
- https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=ko
- 폴더와 파일의 종류는 아래처럼 나뉜다.
  ## 3-1. 라우터 디렉토리
  ### 3-1-1. routing 폴더
      - routing 폴더 내부에는 page.tsx, loading.tsx 등 NextJs에서 정의한 파일이 들어간다.
  ### 3-1-2. components 폴더
      - component 폴더 내부에는 client component가 들어간다.
      - hook, custom hook, useEffect 등의 기능이 들어간다.
      - component는 자식 component를 소유할 수 있다.
  ### 3-1-3. hooks 폴더
      - hooks 폴더 내부에는 custom hook 파일이 들어간다.
      - custom hook은 api 통신과 관련된 기능을 처리하는 hook과 비즈니스 로직을 처리하는 hook으로 나눈다.
      - api 통신과 관련된 hook은 파일명 끝에 'Query' 또는 'Mutation'을 붙인다.
      - 비즈니스 로직을 처리하는 hook은 비즈니스 로직이 길어질 때 사용한다.
  ### 3-1-4. api 폴더
      - api 폴더 내부에는 page.tsx(server component)에서 사용하는 api 파일이 들어간다.
  ### 3-1-5. context 폴더
      - context 폴더 내부에는 해당 페이지에서 사용되는 context(provider) 파일이 들어간다.
  ## 3-2. 루트 디렉토리
  - 공통으로 사용되는 기능은 루트 경로에 폴더를 만들어서 관리한다.
  ### 3-2-1. utils
      - 공통으로 사용되는 format 등 모음
  ### 3-2-2. constants
      - 상수 모음
  ### 3-2-3. assets
      - 이미지 파일이나 아이콘 등의 파일 모음
  ### 3-2-4. components
      - 컴포넌트는 모음
  ### 3-2-5. contexts
      - context(provider) 모음
  ### 3-2-6. hooks
      - custom hook 모음
  ### 3-2-7. styles
      - theme, color 모음
  ### 3-2-8. types
      - 타입 모음

## 4. 기타

- PR을 생성하기 전에는 console.log를 제거한다.
