import './Login.css'
import React, {useState, useEffect, useContext} from 'react'
import img from '../../../assets/loginimg.jpg'
import { LoginUser } from '../../../Services/authServices'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../../../context/authContext'


const Login = () => {

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate();

    const {auth, setAuth} = useContext(AuthContext);


    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const success = await LoginUser(user, pwd, setAuth);
            if (success) {
                navigate('/homepage');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error(error );
        }
    }

    // useEffect(() => {
    //     if(auth) {
    //         navigate('/homepage')
    //     }
    //     else{
    //         console.log("login failed")
    //     }
    // }, [auth, navigate])

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
                    <button onClick={handleSubmit} id='login-button'>Sign in</button>
                    <p>Don't have an account? <Link to="/Register">Sign Up</Link></p>
                </div>

            </form>
        </div>
    </>
  )
}

export default Login