import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './component/Membre';

const famille = {
  membre1: {
    nom: 'Oualid',
    age: 35
  },
  membre2: {
    nom: 'Xavier',
    age: 40
  },
  membre3: {
    nom: 'Loyd',
    age: 25
  },
  membre4: {
    nom: 'Alex',
    age: 24
  }
}

class App extends Component {
  state = {famille}

  handleClick = () => {
    // 1- Je copie mon state pour avoir un objet famille qui reproduit mon state a l'état actuel
    const famille = { ... this.state.famille} 

    // 2- Je fais la modif sur mon state
    famille.membre1.age += 1 
    famille.membre2.age += 1 
    famille.membre3.age += 1 
    famille.membre4.age += 1 

    for(let member of famille){
      member.age += 1
    }

    // 3- J'update le state
    this.setState({famille}); 
  }

  render () {
    const {title} = this.props
    const {famille} = this.state
    return (
      <Fragment>
        <div className='App'>
          <h1>{title}</h1>
          <Membre age={famille.membre1.age} name={famille.membre1.nom} />
          <Membre age={famille.membre2.age} name={famille.membre2.nom}  />
          <Membre age={famille.membre3.age} name={famille.membre3.nom}  />
          <Membre age={famille.membre4.age} name={famille.membre4.nom} >
            <strong>Je supporte L'OL, snif.</strong> 
          </Membre>
          <button onClick={this.handleClick}>Vieillir</button>
        </div>
      </Fragment>
    );
  }
}

export default App;
