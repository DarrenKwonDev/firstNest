### Module, Controller, Service
Module : controller와 provider(service, repo...)을 응집하는 덩어리. 기능별로 Module을 분리하곤 함.
* AppModule : 모든 Module의 대장 => main.ts에서 app을 구성하는데 사용되고, listen으로 실행됨. 

Controller : url을 받고 함수를 실행함. 특정 url에 반응하는 함수 로직을 작성할 수는 있지만 보통 그렇게 안함. 그렇다면 이 함수(비즈니스 로직)은 어디서 담당하냐? Service에서.

Service : 비즈니스 로직을 작성함. 그래서 유저에게 제공하는 'Service'라고 이름 붙여짐. nest는 url을 처리하는 controller와 비즈니스 로직을 작성하는 부분을 분리하도록 설계됨
### 설치
```
yarn
```
### 프로젝트 생성
```
nest new [project-name] // new는 n으로 줄여 표현 가능
nest 입력 후 cli를 확인해볼 것
```
### pipe

[https://docs.nestjs.com/pipes](https://docs.nestjs.com/pipes)

