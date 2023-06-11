import React from 'react';
import { Container } from '@material-ui/core';


import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxidth='xl'>
        <Navbar />
        <Routes>
          
          <Route  path='/' element={<Navigate to="/posts" />} />
          <Route  path='/posts' element={<Home/>} />
          <Route  path='/posts/search' element={<Home/>} />
          <Route  path='/posts/:id' element={<PostDetails/>} />
          <Route  path='/auth' element={!user ? <Auth/> : <Navigate to="/posts" />} />
        </Routes>
      </Container>
    </BrowserRouter>

  );
}

export default App;

// npm install axios moment react-file-base64 redux redux-thunk
// npm install -force @material-ui/core