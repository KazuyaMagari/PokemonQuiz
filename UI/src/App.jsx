import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Quiz from "./components/Quiz"
import Todos from "./components/TodoList/Todos"
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/todo" element={<Todos />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
