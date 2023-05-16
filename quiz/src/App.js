import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Rejister from './Components/Rejister'
import Quizdata from './Components/Quizdata'
import Selectoption from './Components/Selectoption'
import Score from './Components/Score'
import { createContext } from 'react'
import { useState } from 'react'


export const questiongame = createContext(null)

function App() {

    const [score , setScore] = useState(0)
    const [wronganswer , setWronganswer] = useState([])

    return (
        <div>
            <questiongame.Provider value={{score , setScore , wronganswer , setWronganswer}}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/rejister' element={<Rejister />}></Route>
                        <Route path='/quizdata' element={<Quizdata />}></Route>
                        <Route path='/selectoption' element={<Selectoption />}></Route>
                        <Route path='/score' element={<Score />}></Route>
                    </Routes>
                </BrowserRouter>
            </questiongame.Provider>
        </div>
    )
}

export default App