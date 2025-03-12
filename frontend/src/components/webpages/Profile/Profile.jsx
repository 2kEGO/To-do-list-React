import React from 'react'
import Cookies from 'js-cookie'
import { getUserInfo } from '../../../Services/authServices'

const Profile = () => {

  const getData = async () => {
    const getToken = Cookies.get('token') // Get the token from cookies

    if (!getToken) {
      console.error("Token not found");
      return; // Optionally handle the case when the token is not available
    }

    try {
      // Fetch user info using the token
      const data = await getUserInfo(getToken)

      if (data) {
        console.log("User data:", data);
        // Optionally, you could set this data into state and display it
      } else {
        console.error("No data received");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="profile-background">

        <div className="profile-container">
          <div className="profile-wrapper">

            <div className="profile-item-container">
              <h1>Profile</h1>
              <button onClick={getData}>Get data</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Profile