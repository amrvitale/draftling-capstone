import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
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
import DraftlingPage from './draftlingpage/DraftlingPage'
import Publish from './publish/Publish'

class App extends React.Component {

  state = {
    draftlings: [],
    freeformCrits: [],
    templateCrits: []
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
      console.log(draftlings, "here we are!!!")
      this.setState( {draftlings: draftlings})
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

  addFreeformCrit = freeformCrit => {
    this.setState( {
      freeformCrits: [
        ...this.state.freeformCrits,
      

        freeformCrit
      ]
    })
    console.log(this.state.freeformCrits)
  }

  addTemplateCrit = templateCrit => {
    this.setState( {
      templateCrits: [
        ...this.state.templateCrits,
        templateCrit
      ]
      
    })
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

  fetchFreeformCritiques = (props) => {
    fetch(`${config.API_ENDPOINT}/draftling/freeform`)
    .then((freeformCritRes) => {
      console.log(freeformCritRes);
      if(!freeformCritRes.ok)
      return freeformCritRes.json().then((e) => Promise.reject(e));
      return freeformCritRes.json();
    })
    .then ((freeformCrits) => {
      console.log('FREEFORMCRITS', freeformCrits);
      this.setState({freeformCrits: freeformCrits});
    })
    .catch((error) => {
      console.log({ error });
    });
    console.log(this.state.freeformCrits)
    console.log(this.context.freeformCrits)
  }

  fetchTemplateCritiques = (props) => {
    fetch(`${config.API_ENDPOINT}/draftling/template`)
    .then((templateCritRes) => {
      if(!templateCritRes.ok)
      return templateCritRes.json().then((e) => Promise.reject(e));
      return templateCritRes.json();
    })
    .then ((templateCrits) => {
      console.log('TEMPLATECRITS', templateCrits)
      this.setState ({templateCrits: templateCrits});
    })
    .catch((error) => {
      console.log({ error });
    });
    console.log(this.state.templateCrits)
    console.log(this.context.templateCrits)
  }


  render() {
    const providerValue = {
      addDraftling: this.handleAddDraftling,
      draftlings: this.state.draftlings,
      freeformCrits: this.state.freeformCrits,
      templateCrits: this.state.templateCrits,
      handlePublishDraftling: this.handlePublishDraftling,
      addFreeformCrit: this.addFreeformCrit,
      addTemplateCrit: this.addTemplateCrit,
      fetchTemplateCritiques: this.fetchTemplateCritiques,
      fetchFreeformCritiques: this.fetchFreeformCritiques
    }
    
    return (
      <ApiContext.Provider value={providerValue}>
        <div className='App'>
          <Nav />
    
          
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