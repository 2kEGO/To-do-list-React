import './Login.css'
import React, {useState, useEffect} from 'react'
import img from '../../../assets/loginimg.jpg'
import { LoginUser } from '../../../Services/authServices'


const Login = () => {

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();

        const login = LoginUser(user, pwd)
        if(login){
            console.log('Login successful')
        }
        else{
            console.log('Login failed')
        }
    }

  return (
    <>
        <div className="login-container">

            <div className="login-wrapper-left">
                <img src={img} alt="" />
            </div>

            <form className="login-wrapper-right">

                <div className="login-item-container" id='login-title'>
                    <h1>Sign in</h1>
                </div>

                <div className="login-item-container">
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                            id='username' 
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder='Username'
                            />
                </div>

                <div className="login-item-container">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" 
                            id='pwd'
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            placeholder='Password'
                        />
                </div>

                <div className="login-item-container" id='login-button-container'>
                    <button onClick={handleSubmit}>Sign in</button>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>

            </form>
        </div>
    </>
  )
}

export default Login