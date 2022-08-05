import './App.css';
import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DashboardPage from './pages/dashboard/DashboardPage'

const theme = {
  palette: {
    // primary:{
    //   main:'#333996',
    //   light:'#3c44b126',
    // },
    primary:{
      main:'#503584',
      light:'#8C52FF',
    },
    secondary: {
      main: '#f83245',
      light:'#f8324526',
    },
    background: {
      // default: '#f4f5fd'
      default: '#f3f3f4'
    },
    default: {
      default: '#845DD2',
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      },
     
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  },

  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.8)",
        },
      },
    },
  }, 

}

function App() {

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>

          <Routes>
            <Route path='/' element={<p>Starting page ... </p>} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
          <CssBaseline /> 

        </ThemeProvider>
    </Router>
      
    </>
  );
}

export default App;
