import React from 'react';
import "../results/results.css";
import { Card } from "react-bootstrap"

function Results(props) {
  const { repos } = props;

  const list = repos.length !== 0 ? repos.data.map((item) => <li>{item.name}</li>):(<li>No Repos Found</li>);
  let data = localStorage.setItem("list", list)
  console.log(list)
  return (
    <>

      <div className='results'>
        <h4>Repos are :</h4>
        <div className='card'>
          <p>{list}</p>
        </div>
      </div>
      <div className='repoData'>
        {
          repos.length !== 0 ? (repos.data.map((item) =>
            <Card className='card1' key={item.id} style={{ width: '18rem' }}>
              <Card.Img className='card-img' variant="top" src={item.owner.avatar_url} />
              Project Name<hr></hr><Card.Title className='card-title'> {item.name} </Card.Title>
              <Card.Subtitle className="my-2 text-muted">Project Id :{item.id}</Card.Subtitle>
              <Card.Body>
                <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
                <Card.Text>Pushed time: &nbsp;{item.pushed_at}</Card.Text>
                <Card.Text>Watchers: &nbsp;{item.watchers}</Card.Text>
                <Card.Text> Open issues count: {item.open_issues_count}</Card.Text>
              </Card.Body>
              <Card.Link className='cardLink1' href={item.html_url}>Git Link </Card.Link>
              <a className='cardLink2' href={`${item.html_url}/projects`} > Project Details</a>
            </Card>

          )) : (<h1>No repos Found</h1>)
        }
      </div>
    </>
  )
}

export default Results;