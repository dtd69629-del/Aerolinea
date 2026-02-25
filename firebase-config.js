// Configuración de Firebase - VERSIÓN ES6 MODULAR
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBttyZ5gPUkPcIDWKVx7eUor1E--B24mFI",
  authDomain: "aerolinea-f2e97.firebaseapp.com",
  databaseURL: "https://aerolinea-f2e97-default-rtdb.firebaseio.com",
  projectId: "aerolinea-f2e97",
  storageBucket: "aerolinea-f2e97.firebasestorage.app",
  messagingSenderId: "218855130346",
  appId: "1:218855130346:web:210a9d5fcebbc1df4f4393",
  measurementId: "G-FFR72S9M1E",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
