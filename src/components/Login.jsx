import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';


const login = () => {
    const [user, setUser] = useState(null);


    const auth = getAuth(app);                   // import for athentiacaton (app ta k niye ashci firebase.init.js theke sheta k auth korlm)
    // console.log(app);
    const GoggleProvider = new GoogleAuthProvider();  // for goggle authentication provider
    const githubProbvider = new GithubAuthProvider();


    //function for sign in
    const handleGooglesignin = () => {
        // console.log('goggle mama is comming');
        signInWithPopup(auth, GoggleProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error-found', error.message); F
            })
    }



    // function for github login
    const handleGithubsignIn = () => {
        // console.log('goggle mama is comming');
        signInWithPopup(auth, githubProbvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error-found', error.message);
            })
    }





    //function for signout
    const handlesignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            {/* user ? logout : log in */}

            {/* {user ? '' : <button onClick={handleGooglesignin}>Sign in </button>}
            {user && <button onClick={handlesignOut}>SignOut</button>} */}

            {user ?
                <button onClick={handlesignOut}>SignOut</button> :
                <>
                    <button onClick={handleGooglesignin}>Goggle Login</button>
                    <button onClick={handleGithubsignIn}>Github Login</button>
                </>
            }

            {user && <div>
                <h3>User: {user.displayName}</h3>
                <h4>email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>
            }


            {/* <div>user:{user ? user.email : ''}</div> */}

            {/* conditional rendering user thakle dhukbe noyto atar moddhe jiboneo dhukbe na */}

        </div>

    );
};

export default login;