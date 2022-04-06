import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialPosts from './SocialPosts';
import Header from './Header';
/*
import { PostInList } from './PostInList';
import Post from './models/Post';
*/

function App() {
  return (
    <div className="App">
      <Header/>
     <SocialPosts  />
    </div>)
}

export default App;
