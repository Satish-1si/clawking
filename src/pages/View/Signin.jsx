import { useState } from 'react';
import '../App.css'

function Signin() {
    return (
        <>
        <form className='form'>
        <label for="Email:" >Email:</label><br></br>
        <input className='input' type='text' id='Email' placeholder='Enter Email'></input><br></br>
        <label for="Password:" >Password:</label><br></br>
        <input className='input' type='password' id='Email' placeholder="Password" ></input>
        <br></br>
        <br></br>
        <button className='Button' onClick={takeData}>Login</button> 
        <a href="">Forgot Password?</a>
        </form>
        </>
    )
}
export default Signin