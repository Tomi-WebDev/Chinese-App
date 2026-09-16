import React, { useState } from 'react';

const VocabQuiz = () => {
    const [vocabularyList, setVocabularyList] = useState([
        { hanzi: '你', pinyin: 'nǐ', english: 'you' },
        { hanzi: '好', pinyin: 'hǎo', english: 'good' },
        { hanzi: '是', pinyin: 'shì', english: 'is' },
        { hanzi: '我', pinyin: 'wǒ', english: 'I, me' },
        { hanzi: '不', pinyin: 'bù', english: 'not' },
        { hanzi: '吗', pinyin: 'ma', english: 'question marker' },
        { hanzi: '的', pinyin: 'de', english: 'of, particle' },
        { hanzi: '他', pinyin: 'tā', english: 'he, him' },
        { hanzi: '她', pinyin: 'tā', english: 'she, her' },
        { hanzi: '我们', pinyin: 'wǒmen', english: 'we, us' },
        { hanzi: '你们', pinyin: 'nǐmen', english: 'you (plural)' },
        { hanzi: '他们', pinyin: 'tāmen', english: 'they, them' },
        { hanzi: '这', pinyin: 'zhè', english: 'this' },
        { hanzi: '那', pinyin: 'nà', english: 'that' },
        { hanzi: '一', pinyin: 'yī', english: 'one' },
        { hanzi: '二', pinyin: 'èr', english: 'two' },
        { hanzi: '三', pinyin: 'sān', english: 'three' },
        { hanzi: '四', pinyin: 'sì', english: 'four' },
        { hanzi: '五', pinyin: 'wǔ', english: 'five' },
        { hanzi: '六', pinyin: 'liù', english: 'six' },
        { hanzi: '七', pinyin: 'qī', english: 'seven' },
        { hanzi: '八', pinyin: 'bā', english: 'eight' },
        { hanzi: '九', pinyin: 'jiǔ', english: 'nine' },
        { hanzi: '十', pinyin: 'shí', english: 'ten' },
        { hanzi: '爸爸', pinyin: 'bàba', english: 'father, dad' },
        { hanzi: '妈妈', pinyin: 'māmā', english: 'mother, mom' },
        { hanzi: '老师', pinyin: 'lǎoshī', english: 'teacher' },
        { hanzi: '朋友', pinyin: 'péngyǒu', english: 'friend' },
        { hanzi: '请', pinyin: 'qǐng', english: 'please' },
        { hanzi: '谢谢', pinyin: 'xièxiè', english: 'thank you' },
        { hanzi: '对不起', pinyin: 'duìbuqǐ', english: 'sorry' },
        // Add more vocabulary words here
      ]);

  const [pinyinAnswers, setPinyinAnswers] = useState(Array(vocabularyList.length).fill(''));
  const [hanziAnswers, setHanziAnswers] = useState(Array(vocabularyList.length).fill(''));
  const [check, setCheck] = useState(false);    
  const [score, setScore] = useState(0);

  const handlePinyinChange = (index, value) => {
    const newPinyinAnswers = [...pinyinAnswers];
    newPinyinAnswers[index] = value;
    setPinyinAnswers(newPinyinAnswers);
  };

  const handleHanziChange = (index, value) => {
    const newHanziAnswers = [...hanziAnswers];
    newHanziAnswers[index] = value;
    setHanziAnswers(newHanziAnswers);
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    setCheck(true);
    let newScore = 0;

    const updatedVocabularyList = vocabularyList.map((word, index) => {
        
      if (pinyinAnswers[index] === word.pinyin && hanziAnswers[index] === word.hanzi) {
        newScore++;
        return { ...word, isCorrect: true };
      } else {
        return { ...word, isCorrect: false };
      }
    });
    // console.log(upda)

    setScore(newScore);
    // setPinyinAnswers(Array(vocabularyList.length).fill(''));
    // setHanziAnswers(Array(vocabularyList.length).fill(''));
    setVocabularyList(updatedVocabularyList);
    // You can update your UI here with the updated vocabulary list
  };

  return (
    <div>
      <h1>HSK 1 Vocabulary Quiz</h1>
      <div>
            {vocabularyList.map((word, index) => (
            <div key={index}>
                <span>{word.english}</span>
                <input
                style={check === true ? word.isCorrect ? {color: 'green'} : {color: 'red'} : {color: 'blue'}}
                placeholder="Pinyin"
                type="text"
                value={check === true ? pinyinAnswers[index] === vocabularyList[index].pinyin ? pinyinAnswers[index] : `${pinyinAnswers[index]} (${vocabularyList[index].pinyin})` : pinyinAnswers[index]}
                onChange={(e) => handlePinyinChange(index, e.target.value)}
                />
                <input
                style={check === true ? word.isCorrect ? {color: 'green'} : {color: 'red'} : {color: 'blue'}}
                type="text"
                placeholder="Hanzi"
                value={check === true ? hanziAnswers[index] === vocabularyList[index].hanzi ? hanziAnswers[index] : `${hanziAnswers[index]} (${vocabularyList[index].hanzi})` : hanziAnswers[index]}
                onChange={(e) => handleHanziChange(index, e.target.value)}
                />
                {word.isCorrect !== undefined &&
                (word.isCorrect ? (
                    <span style={{ color: 'green' }}>✔</span>
                ) : (
                    <span style={{ color: 'red' }}>✘</span>
                ))}
            </div>
            ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>Score: {score}/{vocabularyList.length}</div>
    </div>
  );
};

export default VocabQuiz;

