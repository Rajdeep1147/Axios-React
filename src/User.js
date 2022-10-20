import React from 'react'
import {useParams} from 'react-router-dom';
function User() {
    const params= useParams();
    const {name} = params;
  return (
    <div>This is {name} Page</div>
  )
}

export default User