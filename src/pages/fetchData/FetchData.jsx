import React, { useEffect, useState } from 'react'
import "./fetchData.css"
function FetchData() {
    const [dummyData, setDummyData] = useState([])
    const [load, setLoad] = useState(true)
  
    //fetching data from api
    const data = async()=>{
      try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
  
        //selecting random data from fetched data
        const randomData = json.sort(()=>0.5 - Math.random()).slice(0, 2)
        setDummyData(randomData)
        setTimeout(() => {
          setLoad(false)
        }, 1000);
      }catch(err){
        console.error(err)
      }
     
    }
  
    useEffect(()=>{
      data()
    },[])

    return (
      <div className="reviews-container">
        <div className='header-div'>
        <h1 className='review-header'>Don’t Just Take Our Word for It. Read Their Stories!</h1>
        </div>
        <div className='card-contianer'>
        {load ? <span class="loader"></span> : 
        <>
        {dummyData.map((val, key)=>(
          <div key={key} className='card'>
             <div className='card-img-title-div'>
            <img src='./images/user.png' className='card-img'/>
            <div className='user-id-div'>
            <p className='title'>User id: <span className='userId-data'>{val.userId}</span></p>
            <p className='id-title'> Id: <span className='id-data'>{val.id}</span></p>
            </div>
            
            </div>
            <p className='title'> Title: <span className='data'>{val.title}</span></p>
            <p className='title'> Post: <span className='data'>{val.body}</span></p>
            </div>
        ))} </>}     
       </div>
       <div className='see-more-div'>
       <button onClick={data} className='card-btn'>See More</button>
       </div>
      </div>
    );
}

export default FetchData