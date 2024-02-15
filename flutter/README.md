# Flutter Coding Convention

## 목차

- [1. 기본 세팅](#1-기본-세팅)
- [2. 코드](#2-코드)
  - [2-1. 네이밍](#2-1-네이밍)
  - [2-2. IF 구문 중괄호 표기법](#2-2-if-구문-중괄호-표기법)

## 1. 기본 세팅

- dart format
  - 팀원간에 동일한 dart format을 사용해서 작업을 진행한다.
  - 끝에 ',' 를 항상 붙인다.
  ```dart
  return Padding(
    padding: EdgeInsets.symmetric(vertical: 8.h),
    child: SizedBox(
      child: WellugaText(
        formattedText,
        style: TextStyle(
          fontSize: 16.sp,
          fontWeight: FontWeight.w700,
          color: WDSColors.greyDark,
        ),
      ),
    ),
  );
  ```

## 2. 코드

### 2-1. 네이밍

- 클래스
  - 클래스 이름은 pascal case로 작성한다.
  ```dart
  class SliderMenu { ... }
  class HttpRequest { ... }
  ```
- 열거형
  - 열거형 이름은 pascal case로 작성한다.
  ```dart
  enum EnumName {
    value1,
    // ...
  }
  ```
- 타입
  - 타입 이름은 pascal case로 작성한다.
  ```dart
  typedef Predicate<T> = bool Function(T value);
  ```
- extensions
  - extension의 이름은 pascal case로 작성한다.
  ```dart
  extension StringExtension on String {
    String formatHHmm() {
      return '${substring(0, 2)}:${substring(2)}';
    }
  }
  ```
- 함수

  - 함수 이름은 camel case로 작성한다.

  ```dart
  bool isSuccess() {
    return true
  }
  ```

- 상수

  - 상수 이름은 camel case로 작성한다.

  ```dart
  // good
  const pi = 3.14;
  const defaultTimeout = 1000;

  // bad
  const PI = 3.14;
  const DefaultTimeout = 1000;
  ```

- 패키지, 폴더
  - 패키지, 폴더 이름은 snake case로 작성한다.
- 다트 파일
  - 다트 파일 이름은 snake case로 작성한다.
  ```dart
  delete_app_user_usecase.dart
  create_user_usecase
  ```
- 사용하지 않는 콜백 매개변수
  - 사용하지 않는 콜백함수의 매개변수는 \_, \_\_ 등을 사용한다.
  ```dart
  futureOfVoid.then((_) {
    print('Operation complete.');
  });
  ```

### 2-2. IF 구문 중괄호 표기법

- [dangling else][] 문제를 피하기 위해 중괄호 표기법 규칙을 정한다.

  [dangling else]: https://en.wikipedia.org/wiki/Dangling_else

  ```dart
  if (isWeekDay) {
    print('Bike to work!');
  } else {
    print('Go dancing or read a book!');
  }
  ```

- **예외:** `else` 절이 없는 `if` 문이 한 줄에 모두 들어맞을 경우, 선호한다면 중괄호를 생략할 수 있다.

  ```dart tag=good
  if (arg == null) return defaultValue;
  ```

- 본문이 다음 줄로 넘어간다면, 중괄호를 사용한다.

  ```dart
  // good
  if (overflowChars != other.overflowChars) {
    return overflowChars < other.overflowChars;
  }

  // bad
  if (overflowChars != other.overflowChars)
    return overflowChars < other.overflowChars;
  ```
