import axios  from 'axios';
import React, { useState } from 'react'
import "../gitsearch/gitsearch.css"
import Results from '../results/results';

function Gitsearch() {
  const [Search,setsearch] = useState('');
  const [repos,setRepos] =useState([]);

  const handlechange=(e)=>{
    setsearch(e.target.value);
  }
  const handleClick=async()=>{
    console.log(Search);
    try{
      const result = await axios(`https://api.github.com/orgs/${Search}/repos`)
      setRepos(result);
    }catch(err){
      console.log(err)
    }
  
  }
  console.log(repos);
  return (
    <>
    <div className='gitSearch'>
      <h1>Git Repositories</h1>
      <hr></hr>
      <div className='searchHere'>
      <label>Search Here :</label> <input type="text" placeholder='Search here' onChange={handlechange}></input>
     <button  onClick={handleClick}>Search</button>
      </div>
    
    </div>
    <Results repos= {repos} />
    </>
  )
}

export default Gitsearch;