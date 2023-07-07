import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const history = useHistory();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    history.push(`/list`)
  }




  return (
    <>
    <div className="container">
      <h2>Hello {user.customer_name}</h2>
       <h2>Welcome to African Halal & Deli, Its Nice To Meat You ™️ </h2>
      <p>Your customer ID is: {user.id}</p>
      <p>
      <i>Click on the 'start shopping' button to see what kinds of meat we have!</i>
      </p>
      <LogOutButton className="btn" />
    </div>

    <div>
      <button
      className="btn"
      onClick={() => handleClick()}
      >
        Start Shopping
      </button>
    </div>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
