import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data=useLoaderData()
  //   useEffect(() => {
  //       const[data,SetData]=useState([])
  //    fetch('https://api.github.com/users/mugheesiqbal')
  //    .then(res=>res.json())
  //    .then(data =>{
  //  SetData(data)
  //    })
  //   }, [])
    
  return (
    <div className='text-center m-4 text-white  bg-gray-700 text-3xl'>Github Follwers: {data.followers}
    <img src={data.avatar_url} alt="Github Avatar" width={300} /></div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
const response= await fetch('https://api.github.com/users/mugheesiqbal');
if (!response.ok) {
  throw new Error('Network response was not ok');
}
return response.json()
}