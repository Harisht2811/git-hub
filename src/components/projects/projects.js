import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function Project() {
  const selectValue = useSelector((state) => state.selectValue)
  console.log("value", selectValue.text);
  useEffect(() => {
    fetchidApi();
  }, [selectValue]);


  const [open_issues, setOpen_issues] = useState([]);

  const fetchidApi = async () => {
    const data = await fetch(`https://api.github.com/repos/venzo-mdu/${selectValue.text}/projects`,{
        headers: {
             'Authorization': `Bearer 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`,
          },   
    }
    );
    const itemdata = await data.json();
    setOpen_issues(itemdata);
  }
 
  return (
    <div>
      <h2 className=' mx-5 my-2'>Open Issues</h2>
      <div className='open_issuse'>
        {open_issues.map((item) =>
          <Card className='card my-5' key={item.id} style={{ width: '18rem' }}>
          projects Name: <Card.Title> {item.title} </Card.Title>
            
          </Card>
        )}
      </div>
      
    </div>

  )
}

export default Project;
