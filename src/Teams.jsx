// import React, { useState, useRef } from 'react'
// import './style.css';
// function Teams() {
//   // varianbles
//   let color = "yellow"
//   // states
//   const [teamOne, setTeamOne] = useState(0)
//   const [teamTwo, setTeamTwo] = useState(0)
//   const [check, setCheck] = useState(false)
//   const [teams, setTeams] = useState('teamOne')
//   // refs
//   const bgOne = useRef(0)
//   const bgTwo = useRef(0)
//   // functions
//   // alishtirsh uchun funktsiya
//   const alish = () => {
//     setCheck(false)
//     if (teams == 'teamOne') {
//       setTeams('teamTwo')
//       bgOne.current.style.backgroundColor = "white";
//       bgTwo.current.style.backgroundColor = color;
//     } else {
//       setTeams('teamOne')
//       bgOne.current.style.backgroundColor = color;
//       bgTwo.current.style.backgroundColor = "white";
//     }
//   }
//   // ball qo'shuvchi funktsiya
//   const Point = () => {
//     if (teams == 'teamOne') {
//       setTeams('teamTwo')
//       setTeamOne(teamOne + point)
//       bgOne.current.style.backgroundColor = "white";
//       bgTwo.current.style.backgroundColor = color;
//     } else {
//       setTeams('teamOne')
//       setTeamTwo(teamTwo + point)
//       bgOne.current.style.backgroundColor = color;
//       bgTwo.current.style.backgroundColor = "white";
//     }
//     setCheck(false)
//   }
//   return (
//     <>
//       <div className="quetions">
//         {/* results start */}
//         <div className="results">
//           <h1 style={{ backgroundColor: "yellow" }} ref={bgOne}>
//             1-Jamoa: {teamOne}
//           </h1>
//           <h1 style={{ backgroundColor: "white" }} ref={bgTwo}>
//             2-Jamoa: {teamTwo}
//           </h1>
//         </div>
//         {/* results end */}
//         {/* quetions start */}
//         <p>Lorem ipsum dolor sit amet consectetur.</p>
//         <button onClick={() => setCheck(true)}>Tekshirish</button>
//         {check && (
//           <div>
//             <i>Lorem ipsum dolor sit.</i>
//             <button onClick={Point}>Tog'ri</button>
//             <button onClick={alish}>Notog'ri</button>
//           </div>
//         )}
//         {/* quetions end */}
//       </div>
//     </>
//   )
// }

// export default Teams