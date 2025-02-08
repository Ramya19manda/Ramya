// import React from 'react';
// import Navbar from './components/Navbar1';
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';
// import './components/global.css';

// const App = () => {
//   return (
//     <div className="app">
//       <div className="navbar">Navbar1</div>
//       <div className="main">Main</div>
//       <div className="sidebar">
//         <div className="sidebar1">Sidebar1</div>
//         <div className="sidebar2">Sidebar2</div>
//       </div>
//       <div className="footer">Footer</div>
//     </div>
//   );
// };
// export default App;

// import React, {Component} from 'react'
// // import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEx from './propsex/FBCPropEx'

// export default class App extends Component{
//   render(){
//     return(
//     <div>
//       {/* <CBCPropEx
//       username="ramya"
//       age={19}
//       hobbies={["playing","dancing"]}
//       address={{city:"jangaon",area:"Rameshwaram"}}
//       sendFun={function(){alert("hi i am ramya")}}
//       /> */}
//       <FBCPropEx
//       username="abhinay"
//       isMarried={true}
//       hobbies={["chatting","Reading","eating"]}
//       />
//     </div>
//     )
//   }
// }

// import React from "react";

// import CBCStateEX from "./stateexample/CBCStateEx";
// const App = () => {
//   return (
//     <div>
//       <App/>
//       <CBCStateEX />
    
//     </div>
//   );
// };

// export default App;





// import React from "react";
// import FBCStateEx from "./stateexample/FBCStateEx";
// const App = () => {
//   return (
//     <div>App <FBCStateEx/>      
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import FunctionalComponent from './components/FunctionalComponent';
// import './components/Styles.css'

// function App() {
//   return (
//     <div className="App">
//       <h2 class={StyleSheet.error}>Errrr</h2>
//       <h1 class='heading'>Thus is on styling class</h1>

//       {<FunctionalComponent clgName='MRU' city='hyd' apply={true}>
//         <h1>hello good afternoon</h1>
//       </FunctionalComponent> }
//     </div>
//   )
// }

// export default App
import React from 'react';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <ClassComponent />
    </div>
  );
}

export default App;


