import React, { useState } from 'react'
import { useContext } from 'react';
import { questiongame } from '../App';
import { useNavigate } from 'react-router-dom';


function Quizdata() {
    const [count, setcount] = useState(0)
    const { score, setScore } = useContext(questiongame)
    const { wronganswer, setWronganswer } = useContext(questiongame)
    const [answermatch, setAnswermatch] = useState("")


    const navigate = useNavigate()


    let questions = [
        {
            question: "Q. 1: Which of the following is not a looping structure in PHP?",
            a: "for",
            b: "for each",
            c: "while",
            d: "do-while",
            ans: "ans2"
        },
        {
            question: "Q. 2: Which of the following is used to declare a constant in PHP?",
            a: "define()",
            b: "const()",
            c: "final()",
            d: "let()",
            ans: "ans1"
        },
        {
            question: "Q. 3: What is the output of the following code snippet?\n $a = 10;\n $b = 5;\n echo $a + $b . $a * $b;",
            a: "1050",
            b: "60",
            c: "35",
            d: "15",
            ans: "ans1"
        },
        {
            question: "Q. 4: What is the default value of max_execution_time directive in PHP?",
            a: "30",
            b: "60",
            c: "90",
            d: "120",
            ans: "ans2"
        },
        {
            question: "Q. 5: Which of the following is used to redirect a user to a different page in PHP?",
            a: "redirect()",
            b: "header()",
            c: "location()",
            d: "forward()",
            ans: "ans2"
        },
        {
            question: "Q. 6: Which of the following is used to upload files in PHP?",
            a: "POST method",
            b: "GET method",
            c: "PUT method",
            d: "UPLOAD method",
            ans: "ans1"
        },
        {
            question: "Q. 7: What is the output of the following code snippet?\n $x = 5;\n $y = '5';\n if ($x === $y) { echo 'Equal'; } else { echo 'Not equal'; }",
            a: "Equal",
            b: "Not equal",
            c: "Undefined",
            d: "Error",
            ans: "ans2"
        },
        {
            question: "Q. 8: Which of the following function is used to check if a file exists in PHP?",
            a: "file_exists()",
            b: "file_open()",
            c: "file_read()",
            d: "file_write()",
            ans: "ans1"
        },
        {
            question: "Q. 9: Which of the following is used to declare a class in PHP?",
            a: "class()",
            b: "define()",
            c: "const()",
            d: "interface()",
            ans: "ans1"
        },
        {
            question: "Q. 10: What is the output of the following code snippet?\n $str = 'Hello World';\n echo substr($str, 0, 5);",
            a: "Hello",
            b: "World",
            c: "Hello World",
            d: "Error",
            ans: "ans1"
        }
    ];


    function handlecount() {
        if (count < questions.length - 1) {
            setcount(count + 1)
        }
        else {
            navigate('/score')
        }
    }

    function handleselect(e) {
        setAnswermatch(e.target.value)
    }
    console.log(answermatch)


    function answer() {
        const correct = questions[count].ans
        if (answermatch === correct) {
            setScore(score + 1)
        }
        else {
            setWronganswer([...wronganswer, { ...questions[count] }])
        }
        // console.log(wronganswer)
    }
    // console.log(score)


    return (

        <div className='product'>
            <div className='setproduct'>
                <h3> {questions[count].question}</h3>
                <ul>
                    <li>
                        <input type="radio" name='quiz' id='option1' value={"ans1"} onChange={handleselect}></input>{questions[count].a}<br /></li>
                    <li>
                        <input type="radio" name='quiz' id='option2' value={"ans2"} onChange={handleselect}></input>{questions[count].b}<br /></li>
                    <li>
                        <input type="radio" name='quiz' id='option3' value={"ans3"} onChange={handleselect}></input>{questions[count].c}<br /></li>
                    <li>
                        <input type="radio" name='quiz' id='option4' value={"ans4"} onChange={handleselect}></input>{questions[count].d}<br /></li>
                </ul>
                <button type='submit' onClick={() => { handlecount(); answer() }}>Next</button>
            </div>

        </div>

    )
}

export default Quizdata