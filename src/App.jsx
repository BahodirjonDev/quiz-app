import React, { useState, useRef } from 'react'
import './style.css';
import quetions from './quetions';
import correct from './assets/correct.mp3'
import wrong from './assets/wrong.mp3'
import math from './assets/math.jpg'
import { Zoom } from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineCheck } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'
function App() {
  // varianbles
  let color = "yellow"
  // states
  const [teamOne, setTeamOne] = useState(0)
  const [teamTwo, setTeamTwo] = useState(0)
  const [check, setCheck] = useState(false)
  const [teams, setTeams] = useState('teamOne')
  const [ids, setIds] = useState(null)
  const [open, setOpen] = useState(false)
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
        bgOne.current.style.backgroundColor = "rgb(2, 74, 158)";
        bgTwo.current.style.backgroundColor = color;
      } else {
        setTeams('teamOne')
        bgOne.current.style.backgroundColor = color;
        bgTwo.current.style.backgroundColor = "rgb(2, 74, 158)";
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
      bgOne.current.style.backgroundColor = "rgb(2, 74, 158)";
      bgTwo.current.style.backgroundColor = color;

    } else {
      setTeamTwo(teamTwo + point)
      setTeams('teamOne')
      bgOne.current.style.backgroundColor = color;
      bgTwo.current.style.backgroundColor = "rgb(2, 74, 158)";
    }
    setCheck(false)
    var index = quetions.map(x => {
      return x.id;
    }).indexOf(ids);
    quetions.splice(index, 1);
    // }, 1000);
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
        <div className="select">
          {/* results end */}
          {/* quetions start */}
          {/* <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button onClick={() => setCheck(true)}>Tekshirish</button>
          {check && (
            <div>
              <i>Lorem ipsum dolor sit.</i>
              <button onClick={Point}>Tog'ri</button>
              <button onClick={alish}>Notog'ri</button>
            </div>
          )} */}
          {/* quetions end */}
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
                          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolores earum pariatur excepturi magni atque fugiat necessitatibus, numquam, quam porro at inventore perferendis unde vitae quaerat ab totam, et placeat.</h1>
                          <button className='btn-simple' onClick={() => setCheck(true)}> <BiSearchAlt /></button>
                        </div>
                        {check && (
                          <div className='chacked'>
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quam itaque fugit voluptatem facere ipsam, reprehenderit facilis libero earum, architecto illo doloribus optio qui? Modi quia rerum doloribus nostrum voluptates.</h2>
                            <div className="btns">
                              <button className='btn-simple' onClick={() => { Point() }}> <AiOutlineCheck /></button>
                              <button className='btn-simple' onClick={() => { alish() }}> <VscError /> </button>
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
      </div>
    </>
  )
}

export default App