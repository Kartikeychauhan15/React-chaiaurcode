import React from 'react'

const App = () => {
  // console.log(process.env.REACT_APP_APPWRITE_URL); // yeh nahi chalega
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <div>Blog with appwrite</div>
  )
}

export default App