import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
const SignUp = () => {
     const {user} = useContext(AuthContext)
     const [error, setError] = useState('')

     const handleSignUp = event => {
          event.preventDefault()
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const confirmPassword = form.confirm.value;
          console.log(email, password, confirmPassword);

          if(password !== confirmPassword){
               setError('Password did not match')
               return
          }
          else if(password.length < 6) {
               setError('Password must be 6 character or longer')
               return
          }
     }
     

     return (
          <div className='form-container'>
               <h2 className='form-title'>Sign up</h2>
               <form onSubmit={handleSignUp}>
                    <div className="form-control">
                         <label htmlFor="email"> Email</label>
                         <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                         <label htmlFor="password">Password</label>
                         <input type="password" name='password' required />
                    </div>
                    <div className="form-control">
                         <label htmlFor="confirm">Confirm Password</label>
                         <input type="password" name='confirm' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign up" />
               </form>
               <p><small>Already Have An Account? <Link to="/login">Login</Link></small></p>
               <p className='text-error'>{error}</p>
          </div>
     );
};

export default SignUp;