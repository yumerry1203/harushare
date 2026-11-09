# HARU SHARE

필요한 기간만큼 구독 서비스를 이용할 수 있도록 구성한 구독권 공유 서비스 웹 프로젝트입니다.
구독형 서비스를 1일권, 3일권, 6일권처럼 필요한 기간만 선택해 이용하는 흐름을 중심으로 화면을 구성했습니다.

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-0AE448?style=flat-square&logo=greensock&logoColor=white)

## 주요 기능

- 구독 서비스별 이용권 선택 및 구매 흐름
- 서비스 소개 및 이용 방법 안내
- 구매 후 이용 중인 상품 정보 확인
- 구매 상품의 ID, PW, Email 정보 확인 및 복사 UI
- 결제 내역 및 결제 상태 확인
- 자주 묻는 질문 페이지
- 카카오 로그인 모달 UI
- GSAP을 활용한 메인 페이지 인터랙션


## 화면 구성

- **Home** : 하루쉐어 서비스 소개, 이용권 장점, 이용 방법 안내
- **Purchase** : 구독 서비스 및 이용권 선택, 구매 단계 진행
- **My Page** : 현재 이용 중인 상품과 결제 내역 확인
- **FAQ** : 서비스 이용 관련 자주 묻는 질문 확인

## 구현 내용

### 서비스 소개 페이지

- 구독 서비스의 가격과 이용 방식을 시각적으로 구성
- 넷플릭스와 유튜브 프리미엄 등 서비스별 콘텐츠 제공
- 구매 과정을 STEP 단위로 안내
- 서비스 시작 버튼과 Sticky UI 구성

### 구매 및 이용 흐름

- 이용권 구매를 위한 단계별 페이지 구성
- 서비스와 이용 기간에 따른 상품 선택 화면 구현
- 구매 완료까지 이어지는 페이지 흐름 구성

### My Page

- 현재 이용 중인 구독 상품 카드 UI 구현
- 상품별 이용 기간과 계정 정보 표시
- ID, PW, Email 정보 복사 UI 구성
- 입금 대기, 결제 완료 등 결제 상태 표시
- 이용 중인 상품이나 결제 내역이 없는 상태의 Empty UI 구성

### Login

- 로그인 및 회원가입 진입 모달 구현
- 카카오 로그인을 위한 UI 구성

### Interaction

- GSAP을 활용한 메인 페이지 애니메이션
- Sticky 버튼 등 스크롤 상황에 따른 인터랙션 구성

## Project Structure

```text
harushare/
├─ css/
├─ image/
├─ js/
├─ index.html
├─ mypage1.html
├─ purchase1.html
├─ purchase2.html
├─ purchase3.html
└─ qna.html
```

