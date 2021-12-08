// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXSxktpPVxOTHDTo0X8_Zhg9tKSEPeSKM",
  authDomain: "tiktok-clone-24dfb.firebaseapp.com",
  projectId: "tiktok-clone-24dfb",
  storageBucket: "tiktok-clone-24dfb.appspot.com",
  messagingSenderId: "786260468794",
  appId: "1:786260468794:web:98446efa294d3769108103",
  measurementId: "G-P7FZ1J3031",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default db;
