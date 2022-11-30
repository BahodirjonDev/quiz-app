import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Teams from './Teams'
function App() {
    // let { userId } = useParams()
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path=':userId' element={<Teams />} />
                </Routes>
            </Router>
            {/* <Teams/> */}
        </>
    )
}

export default App