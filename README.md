![header](https://capsule-render.vercel.app/api?type=waving&color=4B89DC&height=100&section=header&fontSize=90)

**Pre-Campaign Inner API Project**

# Project Design


## Pre-Campaign

* 프리캠페인에 참가한 신청자들의 리스트와 프리캠페인별 신청자들의 참가 사진을 볼 수 있다.

* 마케팅팀 직원들이 이용할 수 있는 Inner API이다. -> 마케팅팀 직원들의 계정 정보가 DB에 저장되어 있음을 가정한다.

#### -> `마케팅팀 직원들이 프리캠페인 신청자들을 평가하여 본 캠페인에 참여할 수 있는 인플루언서를 발굴하는 앱`

<br>

## ERD

![image](https://user-images.githubusercontent.com/57164712/163947232-2396ce48-3c8e-45a6-aec2-697ff8b5c296.png)

### Applicant

> 프리캠페인 지원자 이름, 성별, 생일, 연락처, 주소, 키, 몸무게, 대표사진을 갖는 테이블

### Applicant_Image

> 신청자 참여를 위한 접수 이미지 <br>
신청자와 이미지는 1(지원자) : N(이미지) 관계 <br>
신청자와 캠페인 중간테이블의 ID와 지원자가 접수한 이미지의 URL를 갖는 테이블

### Platform

> 신청자가 사용하는 플랫폼을 확인 <br>
플랫폼 이름 ( ex. Instagram, Facebook, YouTube, Twitter )을 갖는 테이블

### Applicant_Platform

> 신청자, 캠페인과 플랫폼은 N:M (다대다) 관계 <br>
신청자캠페인의 중간테이블 ID와 플랫폼 ID <br>
캠페인 별로 신청자가 유입된 플랫폼 계정을 갖는 중간 테이블

### Keyword

> 신청자가 선택한 본인에 해당하는 키워드를 확인 <br>
키워드 이름 ( ex. 뉴요커, 빈티지, 레트로, 미니멀, 패셔니스타 )을 갖는 테이블

### Applicant_Keyword

> 신청자와 키워드는 N:M ( 다대다 ) 관계 <br>
신청자 ID와 키워드 ID를 갖는 중간 테이블

### Campaign
> 프리캠페인의 이름, 상태, 평가기간, 설명, 대표사진을 갖는 테이블

### Campaign_Applicant
> 신청자와 캠페인은 N:M ( 다대다 ) 관계 <br>
신청자 ID와 캠페인 ID, 그리고 지원자의 수락 결과를 갖는 테이블

### User
> 어플을 사용하는 유저 정보 ( 마케팅 직원 )를 통해 로그인 <br>
직원의 이름과 이메일, 비밀번호를 갖는 테이블

### Rate
> 프리캠페인별로 지원자가 제출한 사진들을 직원이 평가 후 해당 신청자에 대한 총평을 점수로 평가 <br>
신청자와 직원, 그리고 캠페인 간의 N:M ( 다대다 ) 관계 <br>
신청자와 캠페인의 중간테이블 ID와 직원 ID를 통해 배경, 트렌드, 독창성에 대한 평가 점수를 갖는 테이블


<br>

## UI Prototype Design

![image](https://user-images.githubusercontent.com/57164712/163943458-046bc173-f874-420b-80b2-d1828de19aee.png)

![image](https://user-images.githubusercontent.com/57164712/163946625-6ffba8a2-619d-4112-8ee4-8cc1a4473bb0.png)

![image](https://user-images.githubusercontent.com/57164712/163944060-8e974b2f-cb13-4ca9-ad4f-59d213379e04.png)

![image](https://user-images.githubusercontent.com/57164712/163946479-76a8ba60-01a8-4ce9-8bc6-df11c9a0c39e.png)

![image](https://user-images.githubusercontent.com/57164712/163946834-1edb1e90-1417-4db6-bae0-6d3558ad326f.png)

![image](https://user-images.githubusercontent.com/57164712/163946893-9da5f7bd-9ea3-4d16-bd8d-5ee041c6b042.png)

<br>

---

# Development period & Team members

### 개발기간
  #### 2022.03.28 ~ 2022.04.21
  > 1 ~ 2주차 : 기획 <br>
  > 2 ~ 3주차 : 개발 <br>
  > 4주차 : 리뷰 후 리팩토링

<br>

### 개발인원 & 구현파트
   * #### [FRONTEND](https://github.com/cskangGT/precampaign-frontend)

      * 강성훈
        * 초기세팅(Webpack, Barbel)
        * 캠페인리스트 페이지 UI, 기능 구현, 통신
        * 캠페인별 신청자리스트 페이지 UI, 기능 구현, 통신
        * 캠페인별 수락된 신청자 페이지 기능 구현, 통신
        * 모든 수락된 신청자 페이지 기능 구현, 통신
        * Recoil이용해서 별점 상태 관리(Modal), 별점 통신 구현

      * 김준영
        * 로그인 페이지 
        * Modal 페이지 구현
        * 평점 기능 구현
        * 전체적인 UI, Style 수정


   * #### BACKEND
  
      * 김가람휘
        * 초기세팅
        * 모델링
        * 로그인 js, ts로 구현
        * 캠페인리스트 js, ts로 구현
        * AWS EC2 서버에 RDS를 이용하여 배포
        * API Document 작성

      * 김광일
        * 모델링
        * 캠페인별 신청자 리스트 js, ts로 구현
        * 수락된 신청자 리스트 ts로 구현
        * 평점 ts로 구현
        * DB에 데이터 넣기

<br>

---

# Tech Stack

* #### FRONTEND
    <a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/javascript-EFD81D?style=plastic&logo=javascript&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/typescript-3178C6?style=plastic&logo=typescript&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/React-68D5F3?style=plastic&logo=react&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/webpack-8DD6F9?style=plastic&logo=webpack&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/recoil-232F3E?style=plastic&logo=recoil&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/barbel-F76934?style=plastic&logo=barbel&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/emotion-005E85?style=plastic&logo=emotion&logoColor=white"/></a>
    
* #### BACKEND
    <a href="#"><img src="https://img.shields.io/badge/javascript-EFD81D?style=plastic&logo=javascript&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/typescript-3178C6?style=plastic&logo=typescript&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/node.js-339933?style=plastic&logo=node.js&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/MySQL-005E85?style=plastic&logo=mysql&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=plastic&logo=Amazon AWS&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/postman-F76934?style=plastic&logo=postman&logoColor=white"/></a>

* #### COMMUNICATION
    <a href="#"><img src="https://img.shields.io/badge/github-1B1E23?style=plastic&logo=github&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Slack-D91D57?style=plastic&logo=slack&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Trello-2580F7?style=plastic&logo=trello&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/notion-000000?style=plastic&logo=notion&logoColor=white"/></a>

<br>

---

# API Document

[Pre-Campaign API Document](https://documenter.getpostman.com/view/19725087/Uyr7Gy35)

<br>

---

# Prototype Video

추후 추가 예정

<br>

---

# Reference

* 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 사진은 해당 프로젝트 외부인이 사용할 수 없습니다.
* 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다.


![Footer](https://capsule-render.vercel.app/api?type=waving&color=4B89DC&height=100&section=footer)
