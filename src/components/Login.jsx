import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form action="" method="post">
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                
                <button>Sign In</button>
            </form>
            <p>You don't have a account? Register</p>
        </div>
    </div>
  )
}

export default Login