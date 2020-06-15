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
import config from './config'
import Draftling from './draftling/Draftling';

class App extends React.Component {

  state = {
    draftlings: []
  };

  componentDidMount() {
    Promise.all( [
      fetch(`${config.API_ENDPOINT}/mydraftlings`),
    ])
    .then(([draftlingsRes]) => {
      if (!draftlingsRes.ok)
        return draftlingsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          draftlingsRes.json(),
        ])
    })

    .then(([draftlings]) => {
      this.setState( {draftlings})
    })
    .catch(error => {
      console.log({ error })
    })
  }

  handleAddDraftling = draftling => {
    this.setState( {
      mydraftlings: [
        ...this.state.draftlings,
        draftling
      ]
    })
  }
  render() {
    const providerValue = {
      addDraftling: this.handleAddDraftling,
      draftlings: this.state.draftlings,
    }
    return (
      <ApiContext.Provider value={providerValue}>
        <div className='App'>
          <Nav />
          <Route exact path ='/' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path ='/mydash' component={Dash}/>
          <Route path='/search' component={Search}/>
          <Route path='/results' component={SearchResults} />
          <Route path ='/postdraftling' component={PostDraftling} />

          <Route 
            path ='/mydraftlings' 
            render={(props) =><MyDraftlings {...props} draftlings={this.state.draftlings} />}
          />
          <Route
          path='/draftling/:slug' 
          render={(props) => <Draftling {...props} draftlings={this.state.draftlings} />}
          />
          <Route path ='/about' component={About} />
          <Route path= '/read' component={Read} />
          <Route path='/edit' component={Edit} />
          <Route path='/choosecritique' component={ChooseCritique}/>
          <Route path='/postfreeformcritique' component={CritiqueFreeform} />
          <Route path='/posttemplatecritique' component={CritiqueTemplate} />
        </div>
      </ApiContext.Provider>
      );


        const value = {
          draftlings: this.state.draftlings,
          addDraftling: this.handleAddDraftling,
        }
      
  }
}

export default App;