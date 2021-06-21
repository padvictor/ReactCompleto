import React from 'react'

const Home = ({url}) => {
  if (url == '/') {
  return (
    <div>
      <h1 style={{color: 'green'}}>Home</h1>
      <p>Essa é a Home</p>
    </div>
  )
}
else {
  return null;
}
}
export default Home
