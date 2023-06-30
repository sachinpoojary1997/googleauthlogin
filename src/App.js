
import './App.css';
import React from 'react';
import { GoogleLogin } from 'react-google-login';


const App = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google Sign-In API
    console.log(response);
  };

  return (
    
    <div className='main'>
            <div className='board'>
             <p>Board.</p>
            </div>
       <div className='signin'>
    
          <p id="p1">sign in</p>
          <p id="p2">signin to your account</p>
                  {/* {google login button code} */}
                  <GoogleLogin className='google'
        clientId="718843101904-jm1h8vfnr0pqjcqi4bvedn0h078jlel0.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
         />
         <div className='box'>
                   <form className='form'>  
                   <label id='lab'>Email addres</label>
                           <input className='inp' type="email" name="email" placeholder="johndoe@gmail.com"/>
                      <label id='lable'>password</label>
                       <input className='inps' type="password" name="" placeholder="••••••••"/>
                       <p id='p3'>Forgot password?</p>
                         <button class="btnn">Sign</button>    
                     </form>
                     <p id='p4'>Don't have an account?<a href='google'>Register here.</a></p>
            </div>
                     
         </div> 
    </div>
  
  );
};




export default App;
