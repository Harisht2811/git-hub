import React from 'react';
import "../results/results.css";

function Results(props) {
  const { repos } =props;

  const list = repos.length !==0? repos.data.map((item)=><li>{item.name}</li>):(<li>No Repos Found</li>)
  return (
     <>
     <div className='results'>
       <h4>Repos are :</h4>
         <ul>
            {list}
         </ul>
     </div>
     </>
  )
}

export default Results;