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
import Edit from './edit/Edit';
import CritiqueTemplate from './critiquetemplate/CritiqueTemplate';
import CritiqueFreeform from './critiquefreeform/CritiqueFreeform';
import ApiContext from './ApiContext';
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
  handlePublishDraftling = (id, status) => {
    console.log(id, status)
    this.setState( {
      draftlings: this.state.draftlings.map((draftling) => {
         if (parseInt(draftling.id) === parseInt(id)) {
          console.log("SETTING NEW STATUS")
            return {
              ...draftling,
              status: status
            } 
         } else {
          return draftling;
         }
       })
    })
  }

  addFreeformCrit = () => {

  }

  fetchDraftlings = (props) => {
    fetch(`${config.API_ENDPOINT}/mydraftlings`)
    .then((draftlingsRes) => {
      if (!draftlingsRes.ok)
        return draftlingsRes.json().then((e) => Promise.reject(e));
  
      return draftlingsRes.json();
    })
    .then((draftlings) => {
      this.setState({ draftlings });
    })
    .catch((error) => {
      console.log({ error });
    });
  }
  render() {
    const providerValue = {
      addDraftling: this.handleAddDraftling,
      draftlings: this.state.draftlings,
      handlePublishDraftling: this.handlePublishDraftling,
      addFreeformCrit: this.addFreeformCrit
    }
    
    return (
      <ApiContext.Provider value={providerValue}>
        <div className='App'>
          <Nav />
          <Route exact path ='/' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path ='/mydesk' component={Dash}/>
          <Route path='/search' component={Search}/>
          <Route path ='/postdraftling' component={PostDraftling} />

          <Route 
            path ='/mydraftlings' 
            render={(props) =><MyDraftlings {...props} draftlings={this.state.draftlings} />}
          />
          <Route
          path='/draftling/:slug' 
          render={(props) => <DraftlingPage {...props} draftlings={this.state.draftlings} handlePublishDraftling={this.handlePublishDraftling} />}
          />
         
          <Route path ='/about' component={About} />

          <Route 
            path="/edit/:id" 
            render={(props) => <Edit {...props} fetchDraftlings={this.fetchDraftlings}/>} 
          />
          <Route 
            path='/:id/update_status' 
            render={(props) => <Publish {...props} fetchDraftlings={this.fetchDraftlings} />} 
          />
          <Route 
            path='/postfreeformcritique/:id' 
            render={(props) => <CritiqueFreeform {...props} fetchDraftlings={this.fetchDraftlings} />}
          />

          <Route 
            path='/posttemplatecritique/:id' 
            render={(props) => <CritiqueTemplate {...props} fetchDraftlings={this.fetchDraftlings} />}
          />

        </div>
      
      </ApiContext.Provider>
      );


      
      
  }
}

export default App;