import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Signup from './signup/Signup';
import Login from './login/Login';
import PostDraftling from './postDraftling/PostDraftling';
import Search from './search/Search';
import Dash from './dash/Dash';
import About from './about/About';
import './App.css';
import MyDraftlings from './mydraftlings/MyDraftlings';
import SearchResults from './searchResults/SearchResults';
import Read from './read/Read';
import Edit from './edit/Edit';
import CritiqueTemplate from './critiquetemplate/CritiqueTemplate';
import CritiqueFreeform from './critiquefreeform/CritiqueFreeform';
import ApiContext from './ApiContext';
import ChooseCritique from './choosecritique/ChooseCritique'

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
      <Route path= '/read' component={Read} />
      <Route path='/edit' component={Edit} />
      <Route path='/choosecritique' component={ChooseCritique}/>
      <Route path='/postfreeformcritique' component={CritiqueFreeform} />
      <Route path='/posttemplatecritique' component={CritiqueTemplate} />
    </div>
  );
}

export default App;