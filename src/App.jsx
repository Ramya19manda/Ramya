// import React from 'react'
// import Navbar from './components/Navbar';
// import {BrowserRouter  , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Clasroom from './pages/Classroom';
// import Assessments from './pages/Assessments';
// import Store from './pages/Store';
// import Calender from './pages/Calendar';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MySettings from './pages/MySettings';
// import MyAccount from './pages/MyAccount';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Clasroom/>}/>
//             <Route path='/assessment' element={<Assessments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}>
//               <Route path='/profile/myaccount' element={<MyAccount/>}/>
//               <Route path='/profile/mysettings' element={<MySettings/>}/>
           
//             </Route>
//             <Route path='*' element={<PageNotFound/>}/>
          
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



// import React from 'react'
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Home from './crudcomponents/Home';
// import Create from './crudcomponents/Create';
// import Edit from './crudcomponents/Edit';

// const App=()=>{
//     return(
//         <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/create' element={<Create/>}/>
//         <Route path='/edit/:userId' element={<Edit/>}/>
//         <Route/>
//         <Route />
//         </Routes>
//         </BrowserRouter>
        
//     )

// }
// export default App

import React from "react";
import Card from "./Card";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Card />
    </div>
  );
}

export default App;

