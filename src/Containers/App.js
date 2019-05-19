import React, { Component } from 'react';
import styleClassees from './App.css';
import Input from '../Components/Input/Input';
import Preview from '../Components/Preview/Preview';

class App extends Component {

  state = {
    fontColor: '#000',
    backColor: '#fff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat mauris metus, vel maximus nunc faucibus nec. Aenean elementum lobortis massa, vel maximus lacus scelerisque ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam augue turpis, commodo vel erat sed, tristique mattis risus. Ut non viverra ante, eget suscipit velit. In hac habitasse platea dictumst. Vivamus a leo urna.'
  }

  fontChange = (color) => {
    this.setState({fontColor: color});
  }

  backChange = (color) => {
    this.setState({backColor: color});
  }

  render() {
    return (
      < >
      <h1 className={styleClassees.heading}>Choose you best color combination</h1>
      <div className={styleClassees.cockPit}>
        <div className={styleClassees.input}>
            <Input value="Font Color" changed={this.fontChange}/>
            <Input value="Background Color" changed={this.backChange}/>
        </div>

        <div className={styleClassees.preview}>
            <Preview text={this.state.text} font={this.state.fontColor} back={this.state.backColor}/>        
        </div>
      </div>
      </ >
    );
   
  }
}

export default App;
