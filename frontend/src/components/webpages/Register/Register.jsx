import React, {useState, useEffect} from 'react'
import './Register.css'
import img from '../../../assets/registerImg.jpg'
import { RegisterUser } from '../../../Services/authServices'


const Register = () => {

    const USER_REGEX = /^[A-z][A-z0-9-_]{4,24}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

    const [user,setUser] = useState("")
    const [validUser, setValidUser] = useState(false)
    // const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState("")
    const [validPwd, setValidPwd] = useState(false)
    // const [pwdFocus, setPwdFocus] = useState(false) 

    const [confirmPwd, setConfirmPwd] = useState("")
    const [validConfirmPwd, setValidConfirmPwd] = useState(false)
    // const [confirmPwdFocus, setConfirmPwdFocus] = useState(false)

    const [accountCreated, setAccountCreated] = useState(false)

    // SUBMIT BUTTON
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {

            if(pwd !== confirmPwd){
                throw new Error('Passwords do not match')
            }
            RegisterUser(user, pwd, setAccountCreated)

        } 
        catch (error) {
            console.error(error)
        }
    }

    //If user successfully created account
    useEffect(() => {
        if(accountCreated){
            setUser("")
            setPwd("")
            setConfirmPwd("")

            console.log('account created')
        }
    }, [accountCreated])


    // CHECK VALID PASSWORD
    useEffect(() =>{
        setValidPwd(PWD_REGEX.test(pwd));
        setValidConfirmPwd(pwd === confirmPwd);
    }, [pwd, confirmPwd])

    //CHECK VALID USERNAME
    useEffect(() => {
        setValidUser(USER_REGEX.test(user));
    }, [user])

  return (
    <>
    <div className="register-container">

        <div className="register-wrapper-left">
            <img src={img} alt="" />
        </div>

        <form className="register-wrapper-right" onSubmit={handleSubmit}>

            
            <div className="register-item-container" id='title'>
                <h1>Create an account</h1>
                <p>Already have an account? <a href="#">Log in</a></p>
            </div>
            
            <div className="register-item-container">
                <label htmlFor="username">User name</label>
                <input type="text" 
                        id='username'
                        required={true}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        autoComplete='false'
                        // onFocus={setUserFocus(true)}
                        // onBlur={setUserFocus(false)}
                        />
                <p className={validUser? 'show': 'hidden'}>Username already exist</p>
            </div>

            {/* <div className="register-item-container">
                <label htmlFor="displayname">Display Name</label>
                <input type="text" id='displayname'/>               
            </div> */}
            
            <div className="register-item-container">
                <label htmlFor="pwd">Password</label>
                <input type="password"
                        id='pwd'
                        required={true}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        autoComplete='false'
                        // onFocus={setPwdFocus(true)}
                        // onBlur={setPwdFocus(false)}
                        />
                <p></p>
            </div>

            <div className="register-item-container">
                <label htmlFor="confirm_pwd">Confirm Password</label>
                <input type="password" 
                        id='confirm_pwd'
                        required={true}
                        value={confirmPwd}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        autoComplete='false'
                        // onFocus={setConfirmPwdFocus(true)}
                        // onBlur={setConfirmPwdFocus(false)}
                        />
                <p className={setValidConfirmPwd? 'hidden': 'show'}>Password does not match</p>
            </div>

            {/* <div className="register-item-container">
                <label htmlFor="email">Email</label>
                <input type="email" id='email'/>
                <p>Email already exsist, <a href="#">Log in</a> instead? </p>
            </div> */}

            <div className="register-item-container" id='button-container'>
                <button type='submit' >Create account</button>
                <p>Already have an account? <a href="#">Log in</a></p>
            </div>

        </form>
    </div>
    </>
  )
}

export default Register