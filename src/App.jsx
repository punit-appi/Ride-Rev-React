import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import "./styles.css";
import Bookservice from "./Bookservice";
import Newmodels from "./Newmodels";
import Login from "./login";



function App() {
  return (
    <Router>
      <div>
        <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Bookservice" element={<Bookservice />} />
          <Route path="/Newmodels" element={<Newmodels />} />
          <Route path="/Login" element={<Login   />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React from 'react'
// import HomePage from './HomePage'
// import RegisterPage from './RegisterPage'
// import Bookservice from './Bookservice'
// import Newmodels from './Newmodels'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<HomePage></HomePage>,
//     children:[
//       {
//         path:"/RegisterPage",
//         element:<RegisterPage></RegisterPage>
//       },
//       {
//         path:"/Bookservice",
//         element:<Bookservice></Bookservice>
//       },
//       {
//         path:"/Newmodels",
//         element:<Newmodels></Newmodels>
//       }
//     ]
//   }
// ])

// const App = () => {
//   return (
//     <div>
//          <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App
