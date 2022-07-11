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
  4. sassRegex를 검색, 아래 내용 확인
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