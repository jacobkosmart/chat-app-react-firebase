# π Twitter Chat - Clone App

<a href="https://jacobko.info/chat-app-react-firebase/" target="_blank">Live Demo</a>

![Animation2](https://user-images.githubusercontent.com/28912774/130751269-83ec7b85-e193-4da4-9248-90c86ff38913.gif)

## π» 1.νλ‘μ νΈ μκ°

### π μ¬μ©κΈ°μ  λ° μΈμ΄

- React hooks

- React-router-dom

- Firebase (Authentication, Firestore DB, Storage)

### β° κ°λ° κΈ°κ°

2021-08-02 ~ 2021-08-06

## π 2.νλ‘μ νΈ λ΄μ©

### π μ£Όμ κΈ°λ₯

- Realtime chat-app

- κ°λ¨ν λ©μμ§μ μ¬μ§νμΌ μλ‘λ κ°λ₯ (firebase db μ μ μ₯)

- Firebase Authentication with Email, Google and github

- Profile μμ Display name(NickName) λ³κ²½ κ°λ₯

### π μ€μΉ ν¨ν€μ§

```bash
# CRA
npx create-react-app PROJECT

# React router dom
yarn add react-router-dom

# Firebase
yarn add firebase --save

# UUID
yarn add uuid

# Font awesome
yarn add @fortawesome/fontawesome-free
```

## π 3.μ£Όμ μ½λ

### A. Firebase config in Project

```js
// in fbase.js at root
// .env νμΌμ security code λ₯Ό λ£μ΄μ github μ κ³΅μ λμ§ μκ² ν¨

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
```

### B. Authentication

> firebase Authentication κ΄λ ¨ λ΄μ© (Jacob's DevLog) - [https://jacobko.info/firebase/firebase_2/](https://jacobko.info/firebase/firebase_2/)

### C. Firestore DB

> firebase DB κ΄λ ¨ λ΄μ© (Jacob's DevLog) - [https://jacobko.info/firebase/firebase_3/](https://jacobko.info/firebase/firebase_3/)

### D. Storage

> firebase Storage κ΄λ ¨ λ΄μ© (Jacob's DevLog) - [https://jacobko.info/firebase/firebase_4/](https://jacobko.info/firebase/firebase_4/)

## π‘ 4. Reference

Firebase official reference - [https://firebase.google.com/docs/reference/js](https://firebase.google.com/docs/reference/js)

normard corder - [https://nomadcoders.co/nwitter](https://nomadcoders.co/nwitter)
