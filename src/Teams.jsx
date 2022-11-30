import React, { useState, useRef, useEffect } from 'react'
import './style.css';
// import quetions from './quetions';
import correct from './assets/correct.mp3'
import wrong from './assets/wrong.mp3'
import math from './assets/math.jpg'
import { Zoom } from 'react-awesome-reveal'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineCheck } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'
import {useParams} from 'react-router-dom'
function Teams() {
    const [quetions, setQuetions] = useState([])
    let {userId}  = useParams()

    const fetchData = () => {

        fetch(`http://localhost:5000/all/${userId}`)
            .then(response => response.json())
            .then(res =>setQuetions(res.body))
    }
    useEffect(() => {
        fetchData()
    }, []);
    // api

    // varianbles
    let color = "yellow"
    // states
    // team points 
    const [teamOne, setTeamOne] = useState(0)
    const [teamTwo, setTeamTwo] = useState(0)
    // check  answer
    const [check, setCheck] = useState(false)
    // navbat
    const [teams, setTeams] = useState('teamOne')
    // id
    const [ids, setIds] = useState(null)
    // open modal
    const [open, setOpen] = useState(false)
    // point
    const [point, setPoint] = useState(0)

    // refs
    const bgOne = useRef(0)
    const bgTwo = useRef(0)

    // functions

    // alishtirsh uchun funktsiya
    const alish = () => {
        setTimeout(() => {
            setCheck(false)
            if (teams == 'teamOne') {
                setTeams('teamTwo')
                bgOne.current.style.backgroundColor = "rgb(4, 94, 196)";
                bgTwo.current.style.backgroundColor = color;
            } else {
                setTeams('teamOne')
                bgOne.current.style.backgroundColor = color;
                bgTwo.current.style.backgroundColor = "rgb(4, 94, 196)";
            }
            var index = quetions.map(x => {
                return x.id;
            }).indexOf(ids);

            quetions.splice(index, 1);
        }, 1000);
        var audio = new Audio(wrong).play()

    }
    // ball qo'shuvchi funktsiya
    const Point = () => {
        // setTimeout(() => {
        if (teams == 'teamOne') {
            setTeamOne(teamOne + point)
            setTeams('teamTwo')
            bgOne.current.style.backgroundColor = "rgb(4, 94, 196)";
            bgTwo.current.style.backgroundColor = color;

        } else {
            setTeamTwo(teamTwo + point)
            setTeams('teamOne')
            bgOne.current.style.backgroundColor = color;
            bgTwo.current.style.backgroundColor = "rgb(4, 94, 196)";
        }
        setCheck(false)
        var index = quetions.map(x => {
            return x.id;
        }).indexOf(ids);
        quetions.splice(index, 1);
        var audio = new Audio(correct).play()
    }

    return (
        <>
            <div className="quetions">
                {/* results start */}
                <div className="results">
                    <h1 style={{ backgroundColor: "yellow", color: 'black' }} ref={bgOne}>
                        1-Jamoa: {teamOne}
                    </h1>
                    <h1 ref={bgTwo}>
                        2-Jamoa: {teamTwo}
                    </h1>
                </div>

                <div className="cards">
                    <>
                        {quetions.map(card => (
                            <>
                                <div className='card' onClick={(e) => {
                                    setIds(card.id);
                                    setOpen(true);
                                    setPoint(card.point)
                                }}>
                                    <h1 >{card.id}</h1>
                                </div>
                            </>
                        ))
                        }
                    </>
                </div>
                <div className="savol">
                    {quetions.map(card => (
                        <>
                            {open && (
                                <>
                                    {card.id == ids && (
                                        <div className='modal'>
                                            <Zoom>
                                                <div className="req">
                                                    <mark><h1>{card.point}</h1></mark>
                                                    <img src={math} alt="savol" />
                                                    <h1 style={{ boxShadow: '0 0 2px black', margin: "15px", padding: " 5px 100px" }}>{card.quetion}</h1>
                                                    <button className='btn-simple' onClick={() => setCheck(true)}> <BiSearchAlt /></button>
                                                </div>
                                                {check && (
                                                    <div className='chacked'>
                                                        <h2 style={{ boxShadow: '0 0 2px black', margin: "15px", padding: " 5px 100px" }}>{card.answer}</h2>
                                                        <div className="btns">
                                                            <button className='btn-simple' onClick={() => { Point(); getWin() }}> <AiOutlineCheck /></button>
                                                            <button className='btn-simple' style={{ backgroundColor: 'red' }} onClick={() => { alish(); getWin() }}> <VscError /> </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </Zoom>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    ))}
                </div>
                <div className="winner">
                    {quetions.length == 0 && (
                        <>
                            {teamOne > teamTwo && (<h1>🏆🥇Birinchi jamoa g'alaba qozondi🥇🏆</h1>)}
                            {teamOne < teamTwo && (<h1>🏆🥇Ikkichi jamoa g'alaba qozondi🥇🏆</h1>)}
                            {teamOne === teamTwo && (<h1>👥Do'stlik g'alaba qozondi👥</h1>)}
                        </>
                    )}
                </div>
                <style jsx>
                    {`
            .winner{
              display:flex;
              align-items: center;
              justify-content: center;
              margin-top:10%;
              font-family: 'Noto Sans Mono', monospace;
            }
          `}
                </style>
            </div>
        </>
    )
}

export default Teams