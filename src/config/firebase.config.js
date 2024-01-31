
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3BzZKNq18UHxoYdCZxkZXuulSQ9va-L0",
  authDomain: "movie-ticket-react.firebaseapp.com",
  projectId: "movie-ticket-react",
  storageBucket: "movie-ticket-react.appspot.com",
  messagingSenderId: "653318752700",
  appId: "1:653318752700:web:53c185356c5456c28503b9"
};

const app = initializeApp(firebaseConfig);

export default app;