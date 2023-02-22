// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCxmnNMHj2EFkFofv3WZbe16_CbrE-xphg",
//   authDomain: "clone-hanna.firebaseapp.com",
//   projectId: "clone-hanna",
//   storageBucket: "clone-hanna.appspot.com",
//   messagingSenderId: "440379366325",
//   appId: "1:440379366325:web:b414c90aa89f39a83697fc",
//   measurementId: "G-178QZN8DPE",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzGlz9lZp7Hl-SpGsQBkgSz4Ebr-95wFc",
  authDomain: "clone-a0c9e.firebaseapp.com",
  projectId: "clone-a0c9e",
  storageBucket: "clone-a0c9e.appspot.com",
  messagingSenderId: "427775170639",
  appId: "1:427775170639:web:4dd4f39a79b07f3756723a",
  measurementId: "G-2SXP5009LB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
