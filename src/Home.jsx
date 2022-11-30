import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
    const [data, setData] = useState([])
    const fetchApi = () => {
        fetch(`http://localhost:5000/all/`)
            .then(response => response.json())
            .then(res => setData(res))
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
            {data.map(db => (
                <>
                    <Link to={db._id} className="quetions">
                        <img style={{ width: "350px" }} src={db.img} alt="" />
                        <h1>{db.name}</h1> 
                    </Link>
                </>
            ))}
        </>
    )
}

export default Home