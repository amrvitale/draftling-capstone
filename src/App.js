import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import PostDraftling from './components/postDraftling/PostDraftling';
import Search from './components/search/Search';
import Dash from './components/dash/Dash';
import About from './components/about/About';
import './App.css';
import MyDraftlings from './components/mydraftlings/MyDraftlings';
import SearchResults from './components/searchResults/SearchResults';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Route exact path ='/' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path ='/mydash' component={Dash}/>
      <Route path='/search' component={Search}/>
      <Route path='/results' component={SearchResults} />
      <Route path ='/postdraftling' component={PostDraftling} />
      <Route path ='/mydraftlings' component={MyDraftlings} />
      <Route path ='/about' component={About} />
    </div>
  );
}

export default App;