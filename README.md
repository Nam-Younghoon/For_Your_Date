# For Your Date[데이트를 부탁해]👫
- 데이트 코스를 고민하는 대한민국 커플들을 위해 자동으로 데이트 코스를 추천해주는 서비스입니다

## 0. 기획 의도
- 데이트 코스로 인해 고민을 해본적이 있나요? 저는 생각보다 잦습니다<br>늘 같은 곳만 가기는 좀 그렇고,, 새로운 곳을 가보고 싶은데 블로그를 검색하면 글이 너무 길거나 광고가 많습니다<br>이러한 고민거리를 해결해 보고자 데이트코스를 자동으로 계획해주는 서비스를 생각하게 되었습니다

## 1. 목표와 기능 및 요구사항
### 목표
- 커플들을 위한 데이트 코스 추천 페이지 제작
- ChatGPT API를 통해 일일 데이트 코스 일정 생성
- 사용자의 요구사항을 받아, 요구사항을 바탕으로 데이트 코스를 추천
- 복잡하지 않게 카드뷰 식으로 직관적인 UI 구성

### 기능
- 사용자로부터 데이트 장소, 계절, 방문 시간, 교통수단 데이터를 받아 데이트 코스 추천
- 이전 데이트에 대한 기록

### 요구사항 명세
#### 구현 기능
- 질문을 HTTP로 요청 및 응답받기
    - 전송 버튼, Enter키 입력 두 가지 방식으로 HTTP 요청
    - HTTP 요청 시 input 내용 초기화
- 질문과 답변을 화면에 출력
    - HTTP 요청시에 사용자의 질문을 화면에 출력
    - HTTP 응답이 돌아오면 AI의 답변을 화면에 출력
    - 한번의 요청에 하나의 질문과 답변이 출력



### 프로토타입
- [카카오오븐](https://ovenapp.io/view/U23mWtW1jsSSKADVnLsFzei88m4K0wid/)

    #### 메인
    ![main](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/0f35e820-0ff9-40b0-baa9-889f2bc61220)
    #### 사용자 입력
    ![form](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/cdb05836-a4b4-4dbd-bbe3-3d9c69845ff0)
    #### 로딩
    ![loading](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/32ca7f1b-d6fd-4f1c-b2e8-ba356c47278e)
    #### 결과
    ![result](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/68f26173-1f17-40c9-bf17-563071607cec)
    #### 히스토리
    ![history](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/6c4f39ae-9499-475d-80db-388b87165f02)




## 2. 개발 환경 및 배포
### 개발 환경
<a href="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white"/></a>
<a href="https://img.shields.io/badge/css3-1572B6?logo=css3&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/css3-1572B6?logo=css3&logoColor=white"/></a>
<a href="https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white"/></a>
<a href="https://img.shields.io/badge/jquery-0769AD?logo=jquery&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/jquery-0769AD?logo=jquery&logoColor=white"/></a>
<a href="https://img.shields.io/badge/bootstrap-7952B3?logo=bootstrap&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/bootstrap-7952B3?logo=bootstrap&logoColor=white"/></a>

### 개발 기간
2023.08.30 ~ 2023.09.06


### 웹 서비스 URL
[For Your Date](https://nam-younghoon.github.io/For_Your_Date/)


## 3. 개발 일정 및 프로젝트 구조

### 개발일정
![wbs](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/48f3ef27-42e7-44fb-b022-a2e17d8fc12a)

### 프로젝트 구조
```tree
For_Your_Date
├── README.md
├── css
│   ├── common.css
│   └── images
│       ├── back-button.png
│       └── main-background.jpg
├── index.html
└── javascript
    ├── data.js
    ├── history.js
    ├── init.js
    └── select.js

```




## 4. UI

### 메인
- 메인화면 입니다
- 계획하기, 이전 계획보기 두가지로 이동할 수 있습니다
- 심심함을 줄이기 위해, Lottie 이미지를 적용하였습니다

    ![main](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/5dfb795f-257b-4331-a70c-7c4e9255acc1)

### 사용자 입력
- 사용자 입력폼입니다
- 데이트 장소, 계절, 시작/종료 시간, 교통수단을 선택할 수 있습니다
- 원활한 계획을 위해 `모든 입력폼은 필수조건`입니다
- 빠진 내용이 있을 시, 다음으로 넘어가지 못하게 막고 `alert()`를 이용해서 알릴 수 있도록 구성했습니다
- 뒤로가기를 통해 메인화면으로 돌아갈 시, 입력된 데이터들은 `초기화`되도록 했습니다
- 결과창에서 사용자에게 `저장하기` 요청을 처리하기 위해서 `추천받기!`를 클릭 시, tempUserForm에 데이터를 집어넣도록 구현하였습니다

    ![form](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/ccec54bd-3d17-4c6c-a305-60af4be27eac)

### 로딩
- 로딩창 입니다
- 사용자의 입력을 토대로 fetch()를 통해서 chatGPT API에 POST 요청을 하고, 응답값이 올 때 까지 로딩창이 유지됩니다
- chatGPT API에서 응답이 오면 콜백 함수를 통해 다음 화면으로 넘어갑니다

    ![loading](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/b87ee6d1-d552-4a57-9a2c-adf78beb87c5)

### 결과
- 결과창입니다
- `textarea`에 chatGPT가 응답해준 데이트 추천 코스가 노출되도록 하였고 데이터 변동을 막기위해 `readonly` 속성을 주었습니다
- `저장하기` 클릭 시, `localStorage`에 JSON 형식으로 데이터를 저장하게 구현했습니다
    ```JSON
    "현재 날짜" : {
        "date" : "오늘 날짜",
        "place" : "데이트 장소", 
        "question" : "사용자의 질문", 
        "answer" : "chatGPT의 추천 데이트 코스"
    }
    ```


    ![result](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/16d8f687-9977-47ff-b8e6-1edb3fb7ad40)

### 히스토리
- 사용자가 이전에 요청했던 데이트코스 목록입니다
- 날짜 + 데이트 장소로 title을 노출합니다
- 카드 클릭 시 히스토리 상세화면으로 넘어갑니다
- 해당 상세내용을 `localStorage`에서 가져오기 위해 HTML 최하단에 `<input type='hidden'>` 태그를 만들었고 카드 클릭 시 해당 컨텐츠의 key를 `value`로 넣었다가 상세 카드뷰가 그려질 때 `value`에 저장된 key로 `localStorage`에서 value를 찾아 넣어줍니다
- 삭제를 클릭 시, `localStorage.removeItem()`을 통해 데이터를 삭제하고 View를 새로고침 합니다

    ![history](https://github.com/Nam-Younghoon/For_Your_Date/assets/58909988/c3b47a1a-5af9-430a-be1f-583dec64ffbb)

## 5. 개발자
남영훈

## 6. 개발 후기
