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
            question: "Q1: What is React?",
            a: "A JavaScript framework",
            b: "A JavaScript library",
            c: "A programming language",
            d: "An operating system",
            ans: "ans2",
        },
        {
            question: "Q2: What is JSX?",
            a: "JavaScript XML",
            b: "JavaScript Extension",
            c: "Java Syntax",
            d: "JavaScript Syntax",
            ans: "ans1",
        },
        {
            question: "Q3: What does React use to increase performance?",
            a: "DOM manipulation",
            b: "Virtual DOM",
            c: "HTML templates",
            d: "CSS pre-processors",
            ans: "ans2",
        },
        {
            question: "Q4: What is the purpose of state in React?",
            a: "To store and manage component data",
            b: "To style components",
            c: "To handle events",
            d: "To create components",
            ans: "ans1",
        },
        {
            question: "Q5: Which method is used to update the state in React?",
            a: "setState()",
            b: "updateState()",
            c: "changeState()",
            d: "modifyState()",
            ans: "ans1",
        },
        {
            question: "Q6: What is the purpose of keys in React lists?",
            a: "To uniquely identify elements in a list",
            b: "To style list items",
            c: "To reorder list items",
            d: "To delete list items",
            ans: "ans1",
        },
        {
            question: "Q7: What is the significance of useEffect() in React?",
            a: "To fetch data from an API",
            b: "To handle form submission",
            c: "To perform side effects in functional components",
            d: "To define component props",
            ans: "ans3",
        },
        {
            question: "Q8: What is the purpose of useRef() in React?",
            a: "To create reusable components",
            b: "To manage component state",
            c: "To reference DOM elements",
            d: "To handle component events",
            ans: "ans3",
        },
        {
            question: "Q9: What is the concept of prop drilling in React?",
            a: "Passing data from child to parent components",
            b: "Passing data from parent to child components",
            c: "Passing data between sibling components",
            d: "Passing data between unrelated components",
            ans: "ans1",
        },
        {
            question: "Q10: What is the purpose of the useContext() hook in React?",
            a: "To manage component state",
            b: "To handle form submission",
            c: "To share data across components without prop drilling",
            d: "To create custom hooks",
            ans: "ans3",
        },
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