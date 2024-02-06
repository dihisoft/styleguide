# React + Typescript Coding Convention

## 1. 기본 세팅

- Prettier, ESLint
    - 팀원간에 동일한 Prettier, ESLint 설정 파일로 작업을 진행한다.

## 2. 주석

- VSCode의 plugin Comment Anchors를 사용한다.
- 불필요한 주석을 사용하지 않는다.
- https://github.com/StarlaneStudios/vscode-comment-anchors

    <img width="600" src="https://github.com/dihisoft/styleguide/assets/138173291/6c35b41b-95fc-4835-a1d2-4a9a61ded345" />

- // 를 입력하면 자동완성으로 나오는 형태를 사용한다.
    
    <img width="600" src="https://github.com/dihisoft/styleguide/assets/138173291/ddecd688-2b92-45fe-8c6e-e57e3e7dc418" />

## 3. 코드

### 3-1. 네이밍

- 컴포넌트
    - 컴포넌트의 이름은 pascal case로 작성한다.
      
      ```tsx
      import React from 'react';
    
      const Header = () => {
        return <header>This is a Header</header>;
      };
    
      export default Header;
      ```
- Interface, Type
    - Interface와 Type중에 Type 사용을 우선시 한다.
    - type이 유니온 타입이나 교차 타입 같은 고급 타입을 사용하는데 있어서 더 유연하다고 생각함
  
      
      ```tsx
      type User = {
        id: number;
        name: string;
        email: string;
      };
      type UserDeleteRequest = Pick<User, "id">
      type UserProfile = Partial<Omit<User, "id">>
      
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
      
      const UserProfile = ({ id, name, email }: UserProps) => {
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
    - 폴더명은 camel case로 작성한다.
    - 예시) components, apiStore, centerSetting
- 파일
    - 파일명은 pascal case로 작성한다.
    - customHooks을 사용하는 경우 ‘use + 함수명’ 으로 작성한다.
- 이벤트 핸들러
    - Props의 경우에는 ‘on’을 붙여서 작성한다.
    - 함수인 경우에는 ‘handle’을 붙여서 작성한다.
        
        ```tsx
        <MyComponent onclick={this.handleClick} />
        ```
        

### 3-2. ES6

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
  const userName = user.profile?.name; // 'John'
  ```

### 3-3. 스타일 컴포넌트
1. 최상위 부모
   - '컴포넌트명'Layout 이름으로 생성
2. 최상위 부모의 자식
   - '컴포넌트명'Row 또는 '컴포넌트명'Col 이름으로 생성
   - Row나 Col이라는 네이밍의 실제 태그는 div, section 태그등이 될 수 있음
   - Row -> 가로, Col -> 세로
     - 둘 다 실제 태그가 div여도 flex-direction 등을 변경해서 사용 가능
3. 나머지 요소
   - div 태그 -> '컴포넌트명'Box
   - section 태그 -> '컴포넌트명'Section
   - ul 태그 -> '컴포넌트명'List
   - li 태그 -> '컴포넌트명'Item
   - p 태그 -> '컴포넌트명'Paragraph
   - span 태그 -> '컴포넌트명'Span
4. ㅇ

6. 태그명은 S + PascaleCase으로 작성한다. (스타일을 입힌 태그라는 의미의 style를 접두사로 붙인다.)
- 감싸는태그 중, 최상위 태그의 경우에는 S + Layout 으로 작성한다. (Wrapper는 사용하지 말 것)
- 감싸는 태그 이름은 SLayout > SContainer > SBox 순으로 작성한다.
  
  ```tsx
  export const SLayout = styled.div`
	// code
  `
  export const SContainer = styled.div`
  // code
  `
  export const SBox = styled.div`
  // code
  `
  ```

### 3-4. 컴포넌트 내부 순서

1. Import
2. Interface
3. styled-component
4. useState
5. custom hooks
6. useEffect
7. handler
8. etc
9. react code
    
   ```tsx
    // 1. import
    import { use, useEffect, useState } from 'react';
    
    // 2. interface
    interface UserListContainerProps {
      users: string[];
    }
    
    // 3. styled-components
    const SLayout = styled.div`
      // code
    `;
    
    const SContainer = styled.div`
      // code
    `;
    
    const SBox = styled.div`
      // code
    `;
    
    const UserListContainer = ({ users }: UserListContainerProps) => {
      // 4. useState
      const [user, setUser] = useState<string[]>([]);
      const [userInfo, setUserInfo] = useState<string>();
    
      // 5. custom Hooks
      const { getUserListAction, isLoadingUserList } = useUserList();
    
      // 6. useEffect
      useEffect(() => {
        getUserListAction();
      }, []);
    
      useEffect(() => {
        if (isLoadingUserList) {
          return;
        }
        setUser(users);
      }, [isLoadingUserList]);
    
      // 7. handler
      const handleClickDeleteUser = (id: string) => {};
      const handleClickEditUser = (id: string) => {};
    
      // 8. etc
      const isEnabledSaveButton = () => {};
    
      if (isLoadingUserList) {
        return <>Loading</>;
      }
    
      // 9. react code
      return (
        <SLayout>
          <SContainer>
            {users.map(userData => (
              <SBox>{userData}</SBox>
            ))}
          </SContainer>
        </SLayout>
      );
    };
    
    export default UserListContainer;

   ```

### 3-5. 기타

- console.log는 제거하고 PR을 생성해야 한다.
- 
