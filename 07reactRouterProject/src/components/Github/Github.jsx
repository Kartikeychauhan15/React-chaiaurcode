import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/kartikeychauhan15")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //   })
    // },[])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}</div>
    // <img src={data.avatar_url} alt="git picture" />
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async ()=>{
 const response = await fetch("https://api.github.com/users/kartikeychauhan15")
 return response.json()
}