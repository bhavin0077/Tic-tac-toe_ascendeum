import './App.css';
import React,{useState} from "react"

function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [isNext,setNext]= useState(true)
  const [active,setActive]=useState(false)
  const [winner,setWinner]=useState(null)

const handleClick = (index) => {
   if(!active || board[index] || winner)
    return

   const newBoard = board.slice()
newBoard[index]= isNext ? "X" : "O"
setBoard(newBoard)
setNext(!isNext)
checkWinner(newBoard)
}

const checkWinner = (squares) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let [a,b,c] of lines) {
    // const [a,b,c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
      setWinner(squares[a])
      setActive(false)
      return
    }   
  }

  if (!squares.includes(null)) {
    setWinner("Draw")
    setActive(false)
  }
}



  const startGame = () => {
    setActive(true)
    setBoard(Array(9).fill(null))
    setWinner(null)
    setNext(true)
  }

  const pauseGame = () => {
setActive(false)
  } 

   const resetGame = () => {
    setActive(false)
    setBoard(Array(9).fill(null))
    setWinner(null)
    setNext(true)

  }


  return (
    <>
    <div className='game'>
    <h1>Toc-Tac-Toe</h1>
  <div className='controls'>
    <button onClick={startGame} >Start</button>
    <button onClick={pauseGame} >Pause</button>
    <button onClick={resetGame} >Reset</button>
    </div>
    <div className='status'>
    {winner 
    ? winner === "Draw"
    ? "Game Drawn"
    : `"Winner":${winner}`
    : active
    ? `Next Player : ${isNext ?
    "X": "O"}` : "Click start to play" }
    </div>
    <div className='board'>
    {board.map((cell,index)=>(
 <div
 key={index}
 className='cell'
onClick={()=>handleClick(index)}
 >
 {cell}
      </div>
    ))}

    </div>
    </div>
    </>
  );
}

export default App;
