import React from 'react'
import { useContext } from 'react'
import { questiongame } from '../App'

function Score() {

    const { score } = useContext(questiongame)
    const { wronganswer } = useContext(questiongame)

    return (
        <div className='scoresave'>
            <div className='score'>
                <h1>Quiz Complete</h1>
                <h1>Your Score: {score} / 10</h1>
                {/* {score === 0 && <h1>Poor Performance</h1>}
                {score === 10 && <h1>Good Performance</h1>} */}
            </div>

        </div>
    )
}

export default Score