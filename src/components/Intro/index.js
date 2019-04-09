import React from 'react';


const Intro = props => (
    <p className="App-intro">
          {props.message} {/* props object ko message ki property se attach krdia */}
          
          </p>
  );
  
  export default Intro;