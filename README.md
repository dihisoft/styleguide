## 식별자

식별자는 세 가지 유형이 있습니다.

- `UpperCamelCase`는 각 단어의 첫 글자를 대문자로 합니다, 첫 단어 포함.
- `lowerCamelCase`는 첫 단어를 제외한 각 단어의 첫 글자를 대문자로 합니다, 첫 단어는 항상 소문자입니다, 약어라도 마찬가지입니다.
- `lowercase_with_underscores`는 모든 단어를 소문자로 하며, 단어 사이는 `_`로 구분합니다, 약어에도 소문자만 사용합니다.

### `UpperCamelCase` 사용

클래스, 열거형 타입, 타입 정의, 그리고 타입 매개변수는 첫 번째 글자(첫 단어 포함)를 대문자로 하고, 단어 사이에 구분자를 사용하지 않아야 합니다.

<?code-excerpt "style_good.dart (type-names)"?>
```dart tag=good
class SliderMenu { ... }

class HttpRequest { ... }

typedef Predicate<T> = bool Function(T value);
```

여기에는 메타데이터 주석에 사용하려는 클래스도 포함됩니다.

```dart tag=good
class Foo {
  const Foo([Object? arg]);
}

@Foo(anArg)
class A { ... }

@Foo()
class B { ... }
```

어노테이션 클래스의 생성자가 매개 변수를 받지 않는 경우, 다음과 같이 할 수 있습니다.
별도의 `lowerCamelCase` 상수를 생성하는 것이 좋습니다.

```dart tag=good
const foo = Foo();

@foo
class C { ... }
```

### `extensions`는 `UpperCamelCase`를 사용하여 명명

타입처럼, `extensions`는 각 단어의 첫 글자(첫 단어 포함)를 대문자로 하고, 단어 사이에 구분자를 사용하지 않아야 합니다.

```dart tag=good
extension MyFancyList<T> on List<T> { ... }

extension SmartIterable<T> on Iterable<T> { ... }
```

### 패키지, 디렉토리, 그리고 소스 파일의 이름을 `lowercase_with_underscores`로 지정

일부 파일 시스템은 대소문자를 구분하지 않으므로, 많은 프로젝트에서 파일 이름을 모두 소문자로 요구합니다. 구분 문자를 사용하면 이러한 형태에서도 이름이 여전히 읽기 쉬워집니다. 구분자로 밑줄을 사용하면 이름이 여전히 유효한 Dart 식별자가 되므로, 나중에 언어가 기호적인 임포트를 지원하게 될 경우 유용할 수 있습니다.

good
```plaintext tag=
my_package
└─ lib
   └─ file_system.dart
   └─ slider_menu.dart
```

bad
```plaintext tag=
mypackage
└─ lib
   └─ file-system.dart
   └─ SliderMenu.dart
```

### `import` 접두사는 `lowercase_with_underscores`를 사용하여 명명

<?code-excerpt "style_lib_good.dart (import-as)" replace="/(package):examples\/effective_dart\/foo.dart[^']*/$1:angular_components\/angular_components.dart/g; /(package):examples\/effective_dart\/bar.dart[^']*/$1:js\/js.dart/g"?>
good
```
import 'dart:math' as math;
import 'package:angular_components/angular_components.dart' as angular_components;
import 'package:js/js.dart' as js;
```

<?code-excerpt "style_lib_good.dart (import-as)" replace="/(package):examples\/effective_dart\/foo.dart[^']*/$1:angular_components\/angular_components.dart/g; /as angular_components/as angularComponents/g; /(package):examples\/effective_dart\/bar.dart[^']*/$1:js\/js.dart/g; / math/ Math/g;/as js/as JS/g"?>
bad
```
import 'dart:math' as Math;
import 'package:angular_components/angular_components.dart' as angularComponents;
import 'package:js/js.dart' as JS;
```


### 기타 식별자는 `lowerCamelCase`를 사용하여 명명

클래스 멤버, 최상위 정의, 변수, 매개변수, 그리고 명명된 매개변수는 첫 단어를 제외한 각 단어의 첫 글자를 대문자로 하고, 단어 사이에 구분자를 사용하지 않아야 합니다.

<?code-excerpt "style_good.dart (misc-names)"?>
```dart tag=good
var count = 3;

HttpRequest httpRequest;

void align(bool clearItems) {
  // ...
}
```


### 상수 이름에는 `lowerCamelCase` 사용 선호

새로운 코드에서, 상수 변수와 열거형 값을 포함하여 `lowerCamelCase`를 사용하세요.

good
```dart tag=
const pi = 3.14;
const defaultTimeout = 1000;
final urlScheme = RegExp('^([a-z]+):');

class Dice {
  static final numberGenerator = Random();
}
```

bad
```dart tag=
const PI = 3.14;
const DefaultTimeout = 1000;
final URL_SCHEME = RegExp('^([a-z]+):');

class Dice {
  static final NUMBER_GENERATOR = Random();
}
```

### 두 글자를 초과하는 약어와 축약어는 단어처럼 대문자를 사용

대문자화된 약어는 읽기 어렵고, 여러 개의 인접한 약어는 모호한 이름을 초래할 수 있습니다.
예를 들어, `HTTPSFTP`로 시작하는 이름이 주어졌을 때, 이것이 HTTPS FTP를 의미하는지, HTTP SFTP를 의미하는지 알 수 없습니다.

이를 피하기 위해, 약어와 축약어는 일반 단어처럼 대문자화됩니다.

**예외:** 두 글자인 *약어*인 경우 IO (입출력)는 전체 대문자로 표기됩니다: `IO`. 반면, 두 글자인 *축약어*인 경우 ID (식별)는 일반 단어처럼 대문자화됩니다: `Id`.

good
```dart tag=
class HttpConnection {}
class DBIOPort {}
class TVVcr {}
class MrRogers {}

var httpRequest = ...
var uiHandler = ...
var userId = ...
Id id;
```

bad
```dart tag=
class HTTPConnection {}
class DbIoPort {}
class TvVcr {}
class MRRogers {}

var hTTPRequest = ...
var uIHandler = ...
var userID = ...
ID iD;
```


### 사용하지 않는 콜백 매개변수에는 `_`, `__` 등을 사용

콜백 함수의 타입 서명이 매개변수를 요구하지만, 콜백 구현에서 해당 매개변수를 _사용하지 않는_ 경우가 있습니다.
이 경우, 사용하지 않는 매개변수의 이름을 `_`로 하는 것이 관례입니다.
함수에 사용되지 않는 매개변수가 여러 개 있는 경우, 이름 충돌을 피하기 위해 추가적인 밑줄을 사용합니다: `__`, `___` 등.

<?code-excerpt "style_good.dart (unused-callback-params)"?>
```dart tag=good
futureOfVoid.then((_) {
  print('Operation complete.');
});
```

이 지침은 *익명이면서 지역적인* 함수에만 해당됩니다.
이러한 함수는 보통 사용되지 않는 매개변수가 무엇을 나타내는지 분명한 상황에서 즉시 사용됩니다.
반면에, 최상위 함수와 메소드 선언은 그러한 맥락이 없으므로, 매개변수는 사용되지 않더라도 각 매개변수가 무엇을 위한 것인지 분명하게 명명되어야 합니다.

### 식별자에 선행 밑줄을 사용하지 마세요, 단 이는 비공개가 아닐 경우에 한합니다

Dart는 식별자 앞에 밑줄을 사용하여 멤버와 최상위 선언을 비공개로 표시합니다. 이는 사용자가 선행 밑줄을 보고 해당 종류의 선언과 연관지어 생각하도록 합니다. `_`는 `private`라고 생각합니다.

로컬 변수, 매개변수, 로컬 함수, 또는 라이브러리 접두사에는 `private`라는 개념이 없습니다. 이러한 것들 중 하나가 밑줄로 시작하는 이름을 가질 때, 이는 독자에게 혼란을 줍니다. 이를 피하기 위해, 그러한 이름에 선행 밑줄을 사용하지 마세요.

### 접두사 문자를 사용하지 마세요

[헝가리안 표기법](https://en.wikipedia.org/wiki/Hungarian_notation)과 다른 체계는 BCPL 시대에 생겨났으며, 컴파일러가 코드를 이해하는 데 큰 도움을 주지 않았을 때 나타났습니다. Dart는 선언의 타입, 범위, 가변성, 그리고 다른 속성을 알려줄 수 있기 때문에, 이러한 속성들을 식별자 이름에 인코딩할 필요가 없습니다.

good
```dart tag=
defaultTimeout
```

bad
```dart tag=
kDefaultTimeout
```

### 라이브러리에 명시적으로 이름을 지정하지 마세요

`library` 지시어에 이름을 추가하는 것은 기술적으로 가능하지만, 이는 유산 기능이며 권장되지 않습니다.

Dart는 각 라이브러리에 대해 그 경로와 파일명을 기반으로 유일한 태그를 생성합니다.
라이브러리에 이름을 지정하면 이 생성된 URI를 덮어씁니다.
URI 없이는 도구가 해당하는 주 라이브러리 파일을 찾기 어려워질 수 있습니다.

bad
```dart tag=
library my_library;
```

good
```dart tag=
/// A really great test library.
@TestOn('browser')
library;
```

## `import` 순서

파일의 전문을 정돈된 상태로 유지하기 위해, 지시어가 나타나야 하는 순서가 정해져 있습니다. 각 섹션은 빈 줄로 구분되어야 합니다.

### `dart:` 임포트를 다른 임포트보다 먼저 배치

<?code-excerpt "style_lib_good.dart (dart-import-first)" replace="/\w+\/effective_dart\///g"?>
```dart tag=good
import 'dart:async';
import 'dart:html';

import 'package:bar/bar.dart';
import 'package:foo/foo.dart';
```

### `package:` 임포트를 상대 임포트보다 먼저 배치

<?code-excerpt "style_lib_good.dart (pkg-import-before-local)" replace="/\w+\/effective_dart\///g;/'foo/'util/g"?>
```dart tag=good
import 'package:bar/bar.dart';
import 'package:foo/foo.dart';

import 'util.dart';
```

### 모든 임포트 이후 별도의 섹션에서 `export`를 지정

good
```dart tag=
import 'src/error.dart';
import 'src/foo_bar.dart';

export 'src/error.dart';
```

bad
```dart tag=
import 'src/error.dart';
export 'src/error.dart';
import 'src/foo_bar.dart';
```

### 섹션을 알파벳 순으로 정렬

good
```dart tag=
import 'package:bar/bar.dart';
import 'package:foo/foo.dart';

import 'foo.dart';
import 'foo/foo.dart';
```

bad
```dart tag=
import 'package:foo/foo.dart';
import 'package:bar/bar.dart';

import 'foo/foo.dart';
import 'foo.dart';
```

## 포맷팅

많은 언어들처럼 Dart는 공백을 무시합니다. 하지만 *사람들*은 그렇지 않습니다. 일관된 공백 스타일을 유지하는 것은 사람들이 컴파일러가 코드를 보는 것과 같은 방식으로 코드를 볼 수 있도록 도와줍니다.

### 코드를 `dart format`을 사용하여 포맷

이 프로젝트는 기본적인 룰을 따르며 터미널에서의 명령어 한줄로 코드를 포맷팅할 수 있습니다.

### 80자를 초과하는 줄을 피하세요

연구에 따르면, 긴 텍스트 줄은 다음 줄의 시작으로 눈을 이동할 때 더 멀리 이동해야 하기 때문에 읽기가 더 어렵습니다. 이것이 신문과 잡지가 텍스트의 여러 열을 사용하는 이유입니다.

80자를 초과하는 줄을 정말 원한다면, 코드가 너무 장황하고 좀 더 간결할 수 있다는 것을 의미합니다. 주범은 보통 `VeryLongCamelCaseClassNames`입니다. 각 단어가 당신에게 중요한 정보를 주거나 이름 충돌을 방지하는지 스스로에게 물어보세요. 그렇지 않다면, 생략하는 것을 고려하세요.

`dart format`이 이 작업의 99%를 처리해 주지만, 나머지 1%는 직접 처리해야합니다. 80열에 맞게 긴 문자열 리터럴을 분할하지 않으므로, 수동으로 해야 합니다.

**예외:** URI나 파일 경로가 주석이나 문자열(보통 import나 export에서)에 나타날 때, 80자를 초과하더라도 줄을 나누지 않고 전체를 유지할 수 있습니다. 이렇게 하면 소스 파일에서 경로를 검색하기가 더 쉬워집니다.

**예외:** 멀티라인 문자열은 줄 내에서 80자를 초과할 수 있습니다. 문자열 내에서는 줄바꿈이 중요하기 때문에, 줄을 더 짧게 나누는 것이 프로그램을 변경할 수 있습니다.

### 모든 흐름 제어 구문에 중괄호를 사용

이렇게 하면 [dangling else][] 문제를 피할 수 있습니다.

[dangling else]: https://en.wikipedia.org/wiki/Dangling_else


<?code-excerpt "style_good.dart (curly-braces)"?>
```dart tag=good
if (isWeekDay) {
  print('Bike to work!');
} else {
  print('Go dancing or read a book!');
}
```

**예외:** `else` 절이 없는 `if` 문이 한 줄에 모두 들어맞을 경우, 선호한다면 중괄호를 생략할 수 있습니다:

<?code-excerpt "style_good.dart (one-line-if)"?>
```dart tag=good
if (arg == null) return defaultValue;
```

하지만 본문이 다음 줄로 넘어간다면, 중괄호를 사용하세요:

good
```dart tag=
if (overflowChars != other.overflowChars) {
  return overflowChars < other.overflowChars;
}
```

bad
```dart tag=
if (overflowChars != other.overflowChars)
  return overflowChars < other.overflowChars;
```
