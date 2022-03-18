<h1 align="center"> 메신저 과제 </h1>

<h3 align="center"> 서비스 링크: https://swit-messenger-app.herokuapp.com</h3>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/43867711/158022840-5a7038eb-3d58-429c-8ca8-90ad224800cd.png" /></p>

## `Implementation`

**메시지 답장 기능, 전역 상태 관리, json-server를 사용한 초기 데이터 관리, 모달 창, 배포**를 주로 개발하였습니다.

-   [x] 입력창
    -   [x] 엔터 키로 전송 가능
    -   [x] 컨텐츠 입력 시 전송 버튼 즉시 활성화
    -   [x] 컨텐츠 미입력 시 전송 불가
    -   [x] 멀티 라인 입력 가능
-   [x] 대화 목록
    -   [x] 과거부터 최신 순으로 정렬
    -   [x] 메시지를 보낼 때 대화 목록은 항상 가장 아래로 스크롤
    -   [x] 미리 생성된 데이터로 3명이 5건의 메시지 주고받는 내용 출력
-   [x] 메시지
    -   [x] 내가 전송한 메시지의 경우 이름 옆에 \* 문자 출력
    -   [x] 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력
    -   [x] 사용자가 보낸 시간대로 출력
    -   [x] 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입
    -   [x] 삭제 버튼을 클릭하면 "\*\*\* 메시지를 삭제하시겠습니까?" 메시지 출력되고 응답시 삭제
    -   [x] \*\*\*는 메시지 내용 중 최대 10자 출력, 나머지는 ... 처리
    -   [x] hover 시 배경 스타일 변경 & 답장, 삭제 버튼 표시
-   [x] 로그인
    -   [x] 간단한 로그인 localStorage로 구현
-   [x] 레이아웃
    -   [x] 재사용 가능 Button Component
-   [x] **리덕스**를 통한 상태 관리
    -   [x] 메시지 데이터 모델, 현재 유저, 답장 input, 모달 창

## `Stack`

`React` `JavaScript` `Redux` `styled-components`

## `Installation`

```
# clone the project
$ git clone https://github.com/console-lo9/messenger.git

# install modules
$ cd messenger
$ npm install || yarn

# build
$ npm run build || yarn build

# start
$ npm run start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## `Directory`

    ├── public
    ├── server
    └── src
        ├── assets
        ├── components
        │   ├── Header
        │   ├── Login
        │   ├── Messages
        │   ├── Modal
        │   ├── NewMessage
        │   └── SideNav
        ├── hooks
        ├── layout
        ├── models
        ├── pages
        ├── store
        │   ├── action
        │   └── reducer
        └── utils
        │   └── constants
        ├── App.js
        ├── GlobalStyle.js
        └── index.js

## `ScreenShot`

### 1. 로그인 및 사용자 인식 기능

 <img src='https://user-images.githubusercontent.com/93258739/153690714-76369c95-2cd7-481a-9389-a3e0f5f3b674.gif' alt="gif" />

### 2. 메시지 답장 기능

 <img src='https://user-images.githubusercontent.com/93258739/153690928-27c0cc72-14f5-41ee-9dd6-217544ceabb0.gif' alt="gif" />

### 3. 메시지 삭제 기능

 <img src='https://user-images.githubusercontent.com/93258739/153691138-ae9da50d-ad2b-46bb-afdd-efe0debc3717.gif' alt="gif" />

### 4. 메시지 전송 시 자동 스크롤

![ezgif-2-9d56bd88c5](https://user-images.githubusercontent.com/43867711/153703977-674e70e2-fabc-4bc1-9d40-f4347eea6214.gif)
![ezgif-2-31d138df56](https://user-images.githubusercontent.com/43867711/153703984-fd39f566-a2fc-44b1-bb04-8c43695735ed.gif)
