import React from 'react';
import withData from '../with-data/with-data';

const UserList = ({data}) => {

  return (
  <div className='container user-list'>
    {
      data.map(user => {
        return (
          <div className="post" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        )
      })
    }
   
  </div>
  )  
};

export default withData(UserList);
