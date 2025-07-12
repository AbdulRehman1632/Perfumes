import React from 'react'
import CustomNav from './Components/CustomNav/CustomNav'
import { Route, Routes ,BrowserRouter as Router } from 'react-router-dom'
import { routes } from '../Routes'

const App = () => {
  return (
    <div>
    <Router>
      <CustomNav/>
      <Routes>
        {
          routes.map((items,index)=>{
            return(
              <Route key={index} path={items.path} element={items.element}/>

            )
          })
        }

      </Routes>
    </Router>
    </div>
  )
}

export default App
