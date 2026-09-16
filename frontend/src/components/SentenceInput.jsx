import React, { useState } from "react";

const SentenceInput = (props) => {

    const [check, setCheck] = useState(false);
    const [sentenceUserAnswers, setSentenceUserAnswers] = useState([]);
    const [sentenceScore, setSentenceScore] = useState(0);

    const handleSentenceAnswerChange = (index, userAnswer) => {
        const newAnswers = [...sentenceUserAnswers];
        newAnswers[index] = userAnswer;
        setSentenceUserAnswers(newAnswers);
    };
    
    const evaluateSentenceAnswers = () => {
        setCheck(true);
        console.log(check);
        let score = 0;
        for (let i = 0; i < props.correctAnswers.length; i++) {
          const userAnswer = sentenceUserAnswers[i];
          if (userAnswer === props.correctAnswers[i]) {
            score++;
          }
        }
        setSentenceScore(score);
    };

    return (
        <div className="sentence_input_container">
            {props.correctAnswers.map((answer, index) => (
                <div key={index} className="verb_translate">
                    <p>{props.sentenceLabels[index]}</p>
                    <input
                        type="text"
                        value={sentenceUserAnswers[index]}
                        onChange={(e) => handleSentenceAnswerChange(index, e.target.value)}
                    />
                    </div>
            ))}
            <button onClick={evaluateSentenceAnswers}>Submit</button>
            {check ? (<p>Score: {sentenceScore}/{props.correctAnswers.length}</p>) : null}
        </div>
    )
}

export default SentenceInput;