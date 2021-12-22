# Youtube 강좌 
  - https://www.youtube.com/watch?v=3JminDpCJNE
  - nest.js 로 게시판 CRUD 

### 주요 기능 
  - google login OAuth2
  - passport
  - json webtoken
  - uuid 

### 실행 
  - npm run start:dev

### Module
  - 생성 : nest g module boards
      - g 는 generate
  - Module은 하나 이상 있어야 한다. 
  - Module은 기본적으로 Single Tone 

### Controller 
  - 생성 : nest g controller boards --no-spec
  - 들어오는 요청을 처리학고 클라이언트에 응답 반환 
  - @ : decoration 

### Handler 
  - @Get, @Post, @Delete 등과 같은 데코레이터로 장식된 Method

### Service 
  - 생성 : nest g service boards --no-spec
  - DB와 관련된 로직을 처리 
  - @Injectable : 다른 컴포넌트에서 이 서비스를 사용할 수 있게 함
  - 데이터의 유효성 체크를 하거나 DB CRUD 담당 

### Depencency Injection 
  - 해당 클래스의 Contructor 안에서 이루어짐.
  
### Providers
  - Services, Repository, Factory, Helper 포함 
  - 이들은 종속성으로 주입할 수 있다. 

### 모델 정의 
  - Class 를 이용하거나 Interface를 이용한다. 
  - Interface : 변수의 타입만 체크함 
  - Classes : 변수의 타입 뿐만 아니라 인스턴스 생성도 가능하다. 
  