import { Card } from 'react-bootstrap';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRepos } from "../store/actions/index";

import { getRepos } from "../store/dispatch/index";
import "../gitsearch/gitsearch.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const repos = useSelector(getRepos);
  useEffect(() => { dispatch(fetchRepos()); }, [dispatch]);
  return (
    <>
      <div className='repoData'>
        {
          repos.map((item) =>
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


            </Card>
          )
        }
      </div>
    </>
  );

};

export default SearchBar;