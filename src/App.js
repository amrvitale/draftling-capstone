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
import DraftlingPage from './draftlingpage/DraftlingPage'
import Publish from './publish/Publish'

class App extends React.Component {

  state = {
    draftlings: []
  };

  componentDidMount() {
    Promise.all( [
      fetch(`${config.API_ENDPOINT}/mydraftlings`),
      //fetch(`${config.API_ENDPOINT}/draftling/${draftling.id}`)
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
      draftlings: [
        ...this.state.draftlings,
        draftling
      ]
    })
  }
 
 /* handleViewDraftling = draftling => {
    this.setState( {
      draftling: [
        ...this.state.draftling,
        draftling
      ]
    })
  }*/

  render() {
    const providerValue = {
      addDraftling: this.handleAddDraftling,
      //viewDraftling: this.handleViewDraftling,
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
          render={(props) => <DraftlingPage {...props} draftlings={this.state.draftlings} />}
          />
          <Route path ='/about' component={About} />
          <Route path= '/read' component={Read} />
          <Route path="/edit/:id" component={Edit} /> 
          <Route path='/choosecritique' component={ChooseCritique}/>
          <Route path='/postfreeformcritique' component={CritiqueFreeform} />
          <Route path='/posttemplatecritique' component={CritiqueTemplate} />
        </div>
      </ApiContext.Provider>
      );


      
      
  }
}

export default App;