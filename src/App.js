import React, { Component } from 'react';
import './App.css';
import data from './data/sample.json';



class ImageSection extends Component {
  
  render() {
    const img = data && data.length>0 && data.map((item)=><p>{item}</p>);
      return(
          <div>
              <div>
                  {/* <img className="prof_pic" src={img.id}/> */}
                  <p>heelo</p>
                  <img className="prof_pic" src={img.picture}/>
                  {/* <img className="prof_pic" src={img.picture}/>
                  <img className="prof_pic" src={img.picture}/>
                  <img className="prof_pic" src={img.picture}/>
                  <img className="prof_pic" src={img.picture}/>  */}
              </div>
          </div>
      )
  }
}

function App() {
  return (
       
    new ImageSection()
    
  );
}

export default App;
