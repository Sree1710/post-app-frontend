import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './Components/AddPost';
import SearchPost from './Components/SearchPost';
import ViewPost from './Components/ViewPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<AddPost/>}/>
      <Route path='/searchpp' exact element={<SearchPost/>}/>
      <Route path='/viewpp' exact element={<ViewPost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
