import React from 'react';
import WithData from '../with-data/with-data';


const UserProfile = (props) => {
  console.log('User-Profile' ,props);
  const {name, email,data} = props
  return (
        <div className="container">
      <h3>{name}</h3>
      <p>{email}</p>
      {
        data.length > 1 ? 
        data.map(post => {
          return ( 
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
        )
        })
        : 
        <h1>Loading......</h1>
      }
    </div>
  )
}


export default WithData(UserProfile, 'https://jsonplaceholder.typicode.com/posts');

// const UserProfile = ({ name, email }) => {

//   const [posts, setPosts] = useState([]);
  
//   useEffect(() => {  
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => setPosts(data.slice(0,3)))   
//   }, [posts])

//   return (
//     <div className="container">
//       <h3>{name}</h3>
//       <p>{email}</p>
//       {
//         posts.length > 1 ? 
//         posts.map(post => {
//           return ( 
//             <div key={post.id} className="post">
//               <h1>{post.title}</h1>
//               <p>{post.body}</p>
//             </div>
//         )
//         })
//         : 
//         <h1>Loading......</h1>
//       }
//     </div>
//   ) 
//   };

// export default UserProfile;
