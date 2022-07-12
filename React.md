# React의 스타일 주기 : 컴포넌트 스타일링
1. 일반 CSS
2. Sass / Scss
  - 제일 많이 이용하는 방법
  - scss / sass 파일 작성 -> 일반 CSS번역: 전처리기가 해줌
  - create-react-app 2버전 이후 자동으로 사용설정 되어 있음
3. CSS Module
  - 이름 충돌되지 않도록 파일 고유의 이름으로 CSS 클래스 정의
4. styled-components 이용

- 프로젝트 생성
  - npx create-react-app react-css
  - yarn create react-app react-css

1. 일반 CSS
  - CSS-Selector
    - #아이디명
    - .클래스명
    - 태그명
    - 선택자1 > 선택자2 (부등호): 자식만
    - 선택자1 선택자2 (공백): 자손까지
    - 선택자1 + 선택자2 (더하기): 형제, 같은 레벨
  - App.css

2. Sass / Scss
  - Syntactically Awesome Style Sheets ( 문법적으로 매우 놀라운(뛰어난) 스타일 시트 )
  - CSS 천처리기 : node-sass 설치
    - yarn add node-sass
  - create-react-app의 2버전 이후는 자동으로 추가 설정 없이 사용 가능
    - .Sass
      - 문법이 CSS와 다름
    - .Scss : 주로 많이 사용됨
      - 문법이 CSS와 거의 유사
  - 작업 후 저장 -> 서버중지 (Ctrl + C) -> yarn start

- sass-loader 커스터마이징
  - 반드시 할 필요 없지만, 해두면 편리하다.
  - scss파일 import시 폴더 구조 상관없이 로드 가능하게 설정

  1. yarn eject : config폴더 생성
    - git add.
    - git commit -m"Commit before yarn eject"
  2. react-scripts eject 
  3. config 폴더에 webpack.config.js 오픈
  4. sassRegex를 검색, 아래 내용 확인 //정규 표현식
```js
  {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
      modules: {
        mode: "icss",
      },
    }
    //'sass-loader' 코드 삭제 후 concat으로 커스터마이징된 sass-loader 설정 입력
  ).concat({
    loader: require.resolve("sass-loader"),
    options: {
      sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
      },
      additionalData: "@import 'utils'",
      // sourceMap: isEnvProduction && shouldUseSourceMap,
    },
  }),
  sideEffects: true,
}
```
5. SassComponentTest.scss 파일에 @import 'utils'; 으로 Path 없이 파일명으로만 임포트 가능
6. additionalDate: "@import 'utils';" 를 추가하면 scss파일에 @import 'utils'; 없이도 실행 가능하게 할 수 있다.

## node_modules의 라이브러리 import하기
- @import '../../node_modules/library/styles'; ->
- @import '~library/styles';

- Sass 라이브러리 사용하기
- 반응형 디자인 : include-media
  - https://www.npmjs.com/package/inclued-media
- 색상 팔레트 정의 : open-color
  - https://www.npmjs.com/package/open-color

3. CSS Module
- CSS를 불러와서 사용할 때 클래스명을 고유한 값으로 자동 설정
- 파일명_클래스명_해시값의 형태로 자동 설정됨
- CSS-loader 에서 해줌
- 파일명 설정 : 파일명.module.css

- classnames 라이브러리를 사용
  - 조건부 랜더링 &&
  - 설치 : yarn add classnames
  - 사용법 : import classNames from 'classnames';
  ```js
  classNames('one', 'two'); // 'one two'
  classNames('one', { two:true }); // 'one two'
  classNames('one', { two:false }); // 'one'
  const myTestCls = 'jit_cls'
  classNames('one', myTestCls, { myCondition:true }); // 'one jit_cls myCondition'
  ```

- CSS Module과 classnames의 콜라보
  - classnames의 bind함수 사용
  - classname = { styles.클래스이름 } 사용한 형태를
  - import classNames from "classnames/bind";
  - const cx = classNames.bind(styles);
  - cx('클래스명1', '클래스명2', ...);

- CSS Module과 Sass의 콜라보
  - Sass문법으로 처리
  - css -> scss로 확장자 변경

4. styles-components
- React 개발자들이 선호하는 방식
- 자바스크립트 파일 안에 스타일을 선언하는 방식
- CSS-in-JS
- https://github.com/MicheleBertoli/css-in-js
- 설치 : yarn add styled-components
- 장점 : 따로 css / scss파일 작성 필요 없음
- vscode-styled-components 확장 프로그램 설치 후 코딩 추천
- Tagged 템플릿 리터럴 : 템플릿 문자열 내의 객체와 함수를 원본 그대로 사용
  - ``: 스타일 작성, 템플릿 문자열
  - `hello ${{foo: 'bar' }} ${() => 'world' }!`
    - Object라는 문자열     함수표시되는 문자열
  function tagged(...args){
    console.log(args);
  }
  tagged`hello ${{foo: 'bar' }} ${() => 'world' }!`;

- 반응형 웹 작성
  - 미디어 쿼리
    - @media 처리