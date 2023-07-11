import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './components/FavList.js';
import Header from './components/Header';
// import Trending from './components/Trending';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}></Route>
      {/* <Route path='/trending' element={<Trending/>}></Route> */}
    </Routes>
    </>
  );
}

export default App;
