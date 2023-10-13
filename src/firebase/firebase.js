import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig)
const db =getFirestore(app)
const collection_name = "contacts"

const saveToFirestore = async (name, email, message) => {
    try {
        const docRef = await addDoc(collection(db, collection_name), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    saveToFirestore(name, email, message);
}

export { handleSubmit };
