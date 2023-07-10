import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'
import "./UserPage.css"

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const history = useHistory();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    history.push(`/list`)
  }




  return (
    <>
    {/* <div className="userPage"> */}
    <div className="container">
      <h2>Hello {user.customer_name},</h2>
       <h2>Welcome to the Nice To Meat You App ™️ </h2>
       <h3>Brought to you by African Halal & Deli</h3>
      <p>Your customer ID is: {user.id}</p>
      <p>
      <i>Click</i> on the 'start shopping' button to see what kinds of meat we have!
      </p>
      <LogOutButton className="btn" />
    </div>

    

    
      <button
      className="btn"
      onClick={() => handleClick()}
      >
        Start Shopping
      </button>
    
    {/* </div> */}
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
