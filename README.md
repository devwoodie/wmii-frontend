## 💡 what movie is it?

`Tect Stack`
- React
    - redux-toolkit
    - react-router-dom
    - hooks
- scss
- swiper slider
- firebase

### 📌 Project concept

1. **영화 소개**
    1. 리스트 나열, 즐겨 찾기, 회원 가입, 로그인(open source API 사용)
    2. 페이지 분류
        1. 최신 영화 리스트
        2. 영화 검색
        3. 커뮤니티
        4. 사용자 정보

### 📄 New Movie List(Home)

- 최신 영화 리스트 화면
    - 영화 포스터, 제목, 장르 등…
        - 클릭 시 영화 상세 소개 페이지로 이동(즐겨찾기 기능)
        
<img width="357" alt="스크린샷 2023-03-18 오후 10 52 43" src="https://user-images.githubusercontent.com/86578755/226110257-4ca4edd2-a82f-43b8-83ce-9440e7f27a91.png">

### 📄 Community

- 게시글 나열된 화면
    - 회원일 시 글을 쓸 수 있게 
    
<img width="354" alt="스크린샷 2023-03-18 오후 10 53 03" src="https://user-images.githubusercontent.com/86578755/226110271-efcfd190-d28a-4338-89a3-d924cbd9bf74.png">

### 📄 Log-in

- 로그인 화면 / 회원 가입 화면 → 정보가 있을 때 자동으로 홈 화면으로 이동
    - 로그인 화면
        - firebase 구글 로그인 


### 📄 Search Movie

- 전체 영화 검색 화면
    - 검색 시 포스터, 영화 제목 나타남
        - 클릭 시 영화 상세 소개 페이지로 이동(즐겨찾기 기능)
    - 검색 가능 텍스트
        - 영화 제목, 장르, 배우
        
`File Structure`

```
src
│  App.js
│  App.test.js
│  index.js
│  reportWebVitals.js
│  setupTests.js
│
├─component
│      Community.js
│      Home.js
│      MovieDetail.js
│      MyInfo.js
│      Search.js
│      Signup.js
│
├─css
│  │  reset.css
│  │  style.css
│  │  style.css.map
│  │  style.scss
│  │  _common.scss
│  │  _community.scss
│  │  _home.scss
│  │  _infoDetail.scss
│  │  _mixin.scss
│  │  _movieDetail.scss
│  │  _myinfo.scss
│  │  _search.scss
│  │  _signup.scss
│  │
│  └─.sass-cache
│      └─432ec9cb28ae5952bd4863bee856162e6dc58c31
│              style.scssc
│              _common.scssc
│              _home.scssc
│              _mixin.scssc
│              _myinfo.scssc
│              _recommend.scssc
│              _search.scssc
│
├─firebase
│      config.js
│
├─hooks
│      useCollection.js
│      useFirestore.js
│
└─redux
        store.js
        userInfo.js
```
