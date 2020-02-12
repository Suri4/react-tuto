import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './component/Membre';
import Button from './component/Button';

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
  state = {
    famille,
    isShow : false
  }

  handleClick = (addedYear) => {
    // 1- Je copie mon state pour avoir un objet famille qui reproduit mon state a l'état actuel
    const famille = { ... this.state.famille} 

    // 2- Je fais la modif sur mon state
    famille.membre1.age += addedYear 

    // 3- J'update le state
    this.setState({famille}); 
  }

  handleChange = event => {
    const famille = { ... this.state.famille} 
    const nom = event.target.value
    console.log(nom);
    famille.membre1.nom = nom
    this.setState({famille}); 
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({isShow});
  }

  render () {
    const {title} = this.props
    const {famille, isShow} = this.state

    let description = null;

    if(isShow){
      description = <strong>Je supporte L'OL, snif.</strong>
    } 

    const list = Object.keys(famille).map(membre => (
      <Membre age={famille[membre].age} name={famille[membre].nom} />
    ))


    return (
      <Fragment>
        <div className='App'>
          <h1>{title}</h1>
          <input type="text" value={famille.membre1.nom} onChange={this.handleChange}/>
          {list}
          <Membre age={famille.membre4.age} name={famille.membre4.nom} >
          {description}
          <button onClick={this.handleShowDescription}>
          {  
              isShow ? "Cacher" : "Montrer"
          }
          </button>

          </Membre>
          <Button vieillir={() => this.handleClick(2)} />
        </div>
      </Fragment>
    );
  }
}

export default App;
