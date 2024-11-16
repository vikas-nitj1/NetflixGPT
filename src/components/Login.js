import React, { useRef, useState } from 'react';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import Header from './Header';
//form validation
import { checkValidData } from '../utils/validate';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BG_URL, USER_AVTAR } from '../utils/constant';
const Login = () => {

const[isSignInForm,setSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);
// const navigate=useNavigate();
const dispatch=useDispatch();
const email=useRef(null);
const password=useRef(null);
const name=useRef(null);

const toggleSignInForm=()=>{
setSignInForm(!isSignInForm);
}

const handleButtonClick=()=>{
  //validate the form data
  // console.log(email);
  // console.log(password);
const message=checkValidData(email.current.value,password.current.value);
// console.log(message);
setErrorMessage(message);
if(message) return;
if(!isSignInForm)
{
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVTAR
    }).then(() => {
      // Profile updated!
      // ...
       const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(
          addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        })
        )

      // navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"_"+errorMessage)
  });
}
else{
//sign In logic
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    // navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"_"+errorMessage);
  });
}
}

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
        className='w-screen h-screen object-cover'
          src={BG_URL}
          alt='bg-img'
        />
         </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-3/12 absolute top-0 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl p-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />)}
          <input
          ref={email}
           type='text'
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
         
          <input 
          ref={password}
          type='password' 
          placeholder='Password'
           className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
           <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' 
          onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
          <p className='py-4 cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
     
    </div>
  );
};
export default Login;
