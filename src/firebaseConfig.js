import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLNgB-qxloVbnDWZVjxjyx2WUMImA6AFU",
  authDomain: "tienda-onlinexam.firebaseapp.com",
  projectId: "tienda-onlinexam",
  storageBucket: "tienda-onlinexam.firebasestorage.app",
  messagingSenderId: "503691813638",
  appId: "1:503691813638:web:9dac5f0f8cfc1f53acf487",
  measurementId: "G-F3LQH2177F"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios para usarlos en tus componentes
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);