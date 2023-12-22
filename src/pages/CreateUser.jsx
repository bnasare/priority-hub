import React from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously, updateProfile } from "firebase/auth";
import app from "../firebase/config";
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);
const auth = getAuth(app);

function CreateUser() {
    const navigate = useNavigate();

    const addToDatabase = async () => {
        try {
            const credential = await signInAnonymously(auth);
            const inputValue = document.querySelector("input").value;
            if (!inputValue) {
                throw new Error("Please enter a name");
            }

            await updateProfile(credential.user, { displayName: inputValue });

            const usersCollection = collection(db, "users");
            await addDoc(usersCollection, { name: inputValue });
            navigate("/homepage");
            document.querySelector("input").value = "";
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen m-0 overflow-hidden">
            <input type="text" placeholder="Enter name" className="w-1/4 border border-black" />
            <button onClick={addToDatabase} className="w-1/4 border border-black">Enter</button>
        </div>
    );
}

export default CreateUser;
