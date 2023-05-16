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
            {/* <div className='answer'>
                {
                    wronganswer.map((element, index) => {
                        return (
                            <div key={index}>
                                <h1>{element.question}</h1>
                                <h3>a : {element.a}</h3>
                                <h3>b : {element.b}</h3>
                                <h3>c : {element.c}</h3>
                                <h3>d : {element.d}</h3>
                                <h2>Correct Answer : {element.ans}</h2>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default Score