import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { router } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isLoggingIn, setIsLoggingIn } = useState(true)
    const [loading, setLoading] = useState(false)
    const { login, signup, currentUser, logout } = useAuth()
    const [error, setError] = useState('');
    
    console.log(currentUser)
    
    async function submitHandler(e){
        e.preventDefault()
        
        if ( !email || !password ) {
            alert("Please enter your email and password")
            return
        }
    
            try {
                setLoading(false)
                await login(email, password)
                
                router.push('/ekowisata')
            } catch (err) {
                alert('Incorrect email or password')
            }
            setLoading(true)
        
    }

  return (
    <div>
      <section style={{ backgroundColor: '#4ABDAC', minHeight: '100vh' }} class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: '1rem', boxShadow: '10px 10px 20px rgb(35,34,34)', backgroundColor: 'white' }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img style={{ borderRadius: '1rem 0 0 1rem' }} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="login form" class="img-fluid" />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas" style={{ color: '#ff6219' }}></i>
                          <span class="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 class="fw-normal" style={{ letterSpacing: '1px' }}>
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example17">
                            Email address
                          </label>
                          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form2Example17" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example27">
                            Password
                          </label>
                          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form2Example27" class="form-control form-control-lg" />
                        </div>

                        <div class="pt-1 mb-4">
                          <button onClick={submitHandler} class="btn btn-dark btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>
                        <a class="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p class="mb-5">
                          Don't have an account?
                          <Link href="/sign-up" passHref>
                            <a href="#!">Register here</a>
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
