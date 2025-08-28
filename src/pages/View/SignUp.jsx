import { useState } from 'react';


function SignUp() {

  const [Length, setLength] = useState(1);
  return (
    <>
      <div>
        <div className='w-full h-screen bg-pink-400 flex' >
          <div className='px-7 max-h-md mx-auto shadow-2xl rounded-lg  py-10 my-10 bg-white'>

            <div>Hello!</div>
            <div className='text-pink-700 '>Good Morning</div>

            <div className='text-center'>
              <a className='text-pink-600'>Login</a>
              <a className='text-pink-600'>   Your Account</a>
            </div>

            <div className='text-pink-700 bg-gray-300 flex-wrap space-y-5'>
              <div className='my-5 space-y-5 '>
                <div>
                  <input className='outline-none bg-gray-100 rounded-md  py-2' type='string' placeholder='Email Address' ></input>
                </div>
                <div>
                  <input className='outline-none bg-gray-100 rounded-md  py-2' type='string' placeholder='Email Address' ></input>
                </div>
                <div>
                  <input type='checkbox' defaultChecked={true} id='Rem' onChange={() => setLength(0)}></input>
                  <label>Remember</label>
                </div>
                <div className=''>
                  <a href=''>Forget Password?</a>
                </div>
                <div className='bg-blue-400 text-center'>
                  <button>SUBMIT</button>
                </div>
                <div className=''>
                  <a href=''>Create Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp