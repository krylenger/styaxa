import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Gallery from "../components/Gallery/Gallery";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ButtonsList from "../components/ButtonsList/ButtonsList";
import Presets from "../components/Presets/Presets";
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'Main'
    }
    this.changeGallerySection = this.changeGallerySection.bind(this);
  }

  changeGallerySection = (section) => {
    this.setState({
      section: section
    })
  }
  
  render(){
    
    return(
      <div className="App">
        <Header />
        <Introduction />
        <Presets />
        <ButtonsList changeGallerySection={this.changeGallerySection}/>
        <Gallery section={this.state.section}/>
        <ContactInfo />
      </div>
    );
  };
}

export default App;