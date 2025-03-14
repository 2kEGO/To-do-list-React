import React, {useState, useContext} from 'react'
import Cookies from 'js-cookie'
import { UpdateUserInfo } from '../../../Services/authServices'
import AuthContext from '../../../context/authContext.js'

import "./Profile.css"

const Profile = () => {

  const username = Cookies.get('username')
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")

  const {profile, setProfile} = useContext(AuthContext)

  const updateUser = async () => {

    const token = Cookies.get('token') // Get the token from cookies

    if (!token) {
      console.error("Token not found");
      return; // Optionally handle the case when the token is not available
    }

    try {
      // Fetch user info using the token
      const data = await UpdateUserInfo(token, username, password, email)

      if (data) {
        console.log("User info updated successfully");
        
        // Optionally, you could set this data into state and display it
      } else {
        console.error("No data received");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  const changeProfile = () => {
    setProfile(!profile)
  }

  return (
    <>
      <div className="profile-container">
        <div className="profile-wrapper">

          <div className="profile-item-container">
            <h1>Profile</h1>
          </div>

          <div className="profile-item-container">
            <button onClick={changeProfile}>Back</button>
          </div>

          <div className="profile-item-container" id='username'>
            <p>Username:</p>
            <p>{username}</p>
          </div>

          <div className="profile-item-container">
            <label htmlFor="">Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="profile-item-container">
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="profile-item-container">
            <label htmlFor="">Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <div className="profile-item-container">
            <button onClick={updateUser} disabled={password!==confirmPassword? true:false}>Save</button>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default Profile