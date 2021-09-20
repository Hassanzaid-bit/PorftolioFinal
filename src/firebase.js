
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCXtTececMG40i2k4iRukeine79QI1PIbA",
  authDomain: "portfolio-2373b.firebaseapp.com",
  projectId: "portfolio-2373b",
  storageBucket: "portfolio-2373b.appspot.com",
  messagingSenderId: "939695902246",
  appId: "1:939695902246:web:154ec1b6de066a328420e7",
  measurementId: "G-9ZGT44SHGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getBlogs(){
    const blogsCol = collection(db, 'Blogs');
    const blogsSnapshot = await getDocs(blogsCol);
    const blogList = blogsSnapshot.docs.map(doc => doc.data());
    return blogList
}

