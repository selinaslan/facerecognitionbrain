import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import 'tachyons';
import Particles from 'react-particles-js';
import './App.css';


const appClarifai = new Clarifai.App({
  apiKey: '249732bf403345959b1e460fea3d3f08'
 });
 

const particlesOptions={
  
    particles: {
      number: {
        value:200,
        density: {
          enable: true,
          value_area:800
        }
      }
    }
  }

class App extends Component {
    constructor() {
      super();
      this.state={
        input: '',
        imgUrl:''
      }


    }

 onInputChange = (event) => {
   this.setState({input:event.target.value})
 }

 onButtonSubmit = (event) => {
  console.log('click');
  this.setState({imgUrl: this.state.input});
  appClarifai.models.predict("e466caa0619f444ab97497640cefc4dc", this.state.input).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );

}

  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm onInputChange ={this.onInputChange} onButSubmit = {this.onButtonSubmit} />
      <FaceRecognition imgUrl={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;
