import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBThXNq1yR48qtXLu3KsuRj4SkYsPVH-_M",
  authDomain: "farming-project-63377.firebaseapp.com",
  databaseURL:
    "https://farming-project-63377-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "farming-project-63377",
  storageBucket: "farming-project-63377.appspot.com",
  messagingSenderId: "451673140107",
  appId: "1:451673140107:web:7ce8e8379c1f862d8e9d8e",
  measurementId: "G-YLYTHKVQ1H",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
