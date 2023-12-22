import React from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/config";

const auth = getAuth(app);

function Homepage() {
    return (
        <div>
            <p>Hello, {auth.currentUser.displayName}</p>
        </div>
    );
}

export default Homepage;
