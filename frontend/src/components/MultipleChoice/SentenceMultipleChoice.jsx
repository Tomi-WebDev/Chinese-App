import React, { useState } from "react"

const SentenceMultipleChoice = (props) => {

    const [check, setCheck] = useState(false);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});

    const handleAnswerChange = (questionId, selectedOptionId) => {
        setUserAnswers({ ...userAnswers, [questionId]: selectedOptionId });
    };

    const evaluateUserAnswers = () => {
        setCheck(true);
        let newScore = 0; // Initialize a new score variable
    
        props.questions.forEach((question) => {
        const selectedOptionId = userAnswers[question.id];
        if (selectedOptionId === undefined) {
            // User didn't select an answer
        } else if (question.options.find((opt) => opt.id === selectedOptionId)?.isCorrect) {
            newScore++; // Increment the newScore variable for each correct answer
        }
        });
    
        setScore(newScore); // Update the score once after calculating it
    };

    return (
        <div className="sentence_multiple_choice_container">
             {props.questions.map((question) => (
                <div key={question.id} className="verb_multiple_choice">
                <p>{question.text}</p>
                {question.options.map((option) => (
                    <label key={option.id}>
                    <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={option.id}
                        checked={userAnswers[question.id] === option.id}
                        onChange={() => handleAnswerChange(question.id, option.id)}
                    />
                    {option.text}
                    </label>
                ))}
                </div>
            ))} 
            <button onClick={evaluateUserAnswers}>Submit</button>
            {check ? (<div>{score}/{props.questions.length}</div>) : null}
        </div>
    )
}

export default SentenceMultipleChoice;