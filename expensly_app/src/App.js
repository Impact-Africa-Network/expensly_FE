import './App.css';
import React from 'react'
import { CssBaseline} from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<p>Starting page ... </p>} />
        </Routes>
        <CssBaseline /> 
    </Router>
      
    </>
  );
}

export default App;
