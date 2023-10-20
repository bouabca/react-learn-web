
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import All from "./all";

function App() {
 

 
  
  return(
    <Router>
      <Routes>
        <Route    path="/" element={<All/>} />
      
      </Routes>




    </Router>
    
  )
   
     
  
}

export default App;
