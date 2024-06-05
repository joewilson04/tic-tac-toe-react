export default function GameOver({winner , onRestart}) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>Its a draw!</p>}
        <p>
            <button onClick={() => onRestart()}>
                Rematch!
            </button>
        </p>
    </div>
}





//SOLO ATTEMPT (GONE WRONG D: )
// export default function WinnerCheck(firstSquareSymbol) {

//     let winningStatement

//     if (firstSquareSymbol === "X") {
        
//         winningStatement =    <>
//                 <p>congrats p1 you win {console.log("test")}</p>
//             </>;
//         return;
        
//     }
//     else if (firstSquareSymbol === "O") {
//         winningStatement = <>
//             <p>gg p2 you win</p>
//         </>;
        
//     }
//     else if (firstSquareSymbol === "draw") {
//         winningStatement = <>
//                 <p>its a draw! nobody wins!</p>
//         </>;

//     }
    
//     return winningStatement;
// }