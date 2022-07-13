// import { Card } from 'react-bootstrap';
// import React, { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { fetchRepos } from "../store/actions/index";

// import { getRepos } from "../store/dispatch/index";
// import "../gitsearch/gitsearch.css"

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const repos = useSelector(getRepos);
//   // const [search,setSearch] = useState([]);
// //   function handleSubmit(e){
// //       setSearch(e.target.value);
// //   }
// //   function handleClick(){
// //  console.log(search);
// // }
//   useEffect(() => { dispatch(fetchRepos()); }, [dispatch]);
//   return (
//     <>
//     {/* <div className='gitSearch'>
//       <h1>Git Repositories</h1>
//     <label>Search Here :</label><input type="text" placeholder='Search your repo' onChange={handleSubmit}></input>
//     <button className='buttonSearch' onClick={handleClick}>Search</button>
//     </div> */}
//       <div className='repoData'>
//         {
//           repos.map((item) =>
//             <Card className='card1' key={item.id} style={{ width: '18rem' }}>
//               <Card.Img className='card-img' variant="top" src={item.owner.avatar_url} />
//               Project Name<hr></hr><Card.Title className='card-title'> {item.name} </Card.Title>
//               <Card.Subtitle className="my-2 text-muted">Project Id :{item.id}</Card.Subtitle>
//               <Card.Body>
//                 <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
//                 <Card.Text>Pushed time: &nbsp;{item.pushed_at}</Card.Text>
//                 <Card.Text>Watchers: &nbsp;{item.watchers}</Card.Text>
//                 <Card.Text> Open issues count: {item.open_issues_count}</Card.Text>
//               </Card.Body>


//             </Card>
//           )
//         }
//       </div>
//     </>
//   );

// };

// export default SearchBar;





import {useState,useEffect} from 'react';
import axios from 'axios'
import Result from '../results/results'
import { connect } from 'react-redux';
import "../gitsearch/gitsearch.css"
import { useDispatch } from "react-redux";
import { search } from '../store/action';

const SearchBar =(props) => {
    const dispatch = useDispatch();

    const [repos, SetRepos] =useState([])
    const handleClick = async () => {
        try{
            const result =await axios(`https://api.github.com/orgs/${props.inputValue}/repos`,{
                headers: {
                     'Authorization': `Bearer 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`,
                  },   
            })
            const action ={ type:"INPUT_CHANZGE", text:props.inputValue};
            console.log("action",props.inputChanged)
            dispatch(search(action)) 
            SetRepos(result)

        }catch (err) {
            console.log(err)
        }
    }  

    return(
        <div className='container '>
            <div className='gitSearch'> 
                <h1 className='title'>Github Project</h1>
                <br /><label>Search Here :</label> <input  type='text' placeholder='search' value ={props.inputValue}  onChange ={props.inputChanged}/>    
                <button className='btn btn-primary mx-3' onClick ={handleClick}> Search </button>
            </div>
            <div className='result'>
                <Result repos ={repos} />
            </div>
        </div>
    )    

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged:(e) => {
            console.log("changed", e.target.value)
            const action ={ type:"INPUT_CHANZGE", text:e.target.value};
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
