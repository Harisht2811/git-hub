import './App.css';
import Gitsearch from "./components/gitsearch/gitsearch";
import Dashboard from  './components/dashboard/dashboard';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../src/components/store/store"


function App() {
  return (
    <>
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Gitsearch/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
    
  );
}

export default App;
