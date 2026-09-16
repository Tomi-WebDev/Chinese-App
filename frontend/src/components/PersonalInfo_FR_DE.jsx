import React, { useState } from "react";
import Navbar from "./Navbar";
import VocabQuiz from "./VocabQuiz";
import Flashcard from "./Flashcard";
import MultipleChoiceQuiz from "./MultipleChoiceQuiz";
import Sudoku1 from "./AnimalSudoku";
import DragAndDrop from "./InputAnswer";
import DuolingoDragAndDrop from "./Sentence";
import FillSentence from "./FillSentence2";

const PersonalInfo_FR_DE = (props) => {

  // Shuffles an array using Fisher-Yates algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const [vocabularyList, setVocabularyList] = useState([
      { german: "das Kind", french: "l'enfant" },
      { german: "die Frau", french: "la femme" },
      { german: "das Mädchen", french: "la fille" },
      { german: "der Junge", french: "le garçon" },
      { german: "der Mann, der Mensch", french: "l'homme" },
      { german: "die Person", french: "la personne" },
      { german: "die Adresse, die Anschrift", french: "l'adresse" },
      { german: "das Alter", french: "l'âge" },
      { german: "heißen", french: "s'appeler" },
      { german: "der Personalausweis", french: "la carte d'identité" },
      { german: "der Name", french: "le nom" },
      { german: "der Vorname", french: "le prénom" },
    ]);

    // if(props.knownLanguage === 0) {
    //   if(props.learningLanguage === 1) {
    //     setVocabularyList([
    //       { german: "das Kind", french: "l'enfant" },
    //       { german: "die Frau", french: "la femme" },
    //       { german: "das Mädchen", french: "la fille" },
    //       { german: "der Junge", french: "le garçon" },
    //       { german: "der Mann, der Mensch", french: "l'homme" },
    //       { german: "die Person", french: "la personne" },
    //       { german: "die Adresse, die Anschrift", french: "l'adresse" },
    //       { german: "das Alter", french: "l'âge" },
    //       { german: "heißen", french: "s'appeler" },
    //       { german: "der Personalausweis", french: "la carte d'identité" },
    //       { german: "der Name", french: "le nom" },
    //       { german: "der Vorname", french: "le prénom" },
    //     ])
    //   } else if(props.learningLanguage === 2) {
    //     setVocabularyList([
    //       { german: "das Kind", french: "child" },
    //       { german: "die Frau", french: "women" },
    //       { german: "das Mädchen", french: "girl" },
    //       { german: "der Junge", french: "boy" },
    //       { german: "der Mann, der Mensch", french: "man" },
    //       { german: "die Person", french: "la personne" },
    //       { german: "die Adresse, die Anschrift", french: "adresse" },
    //       { german: "das Alter", french: "age" },
    //       { german: "heißen", french: "called" },
    //       { german: "der Personalausweis", french: "ID card" },
    //       { german: "der Name", french: "name" },
    //       { german: "der Vorname", french: "first name" },
    //     ])
    //   } 
    // } else if(props.knownLanguage === 1) {
    //   if(props.learningLanguage === 0) {
    //     setVocabularyList([
    //       { german: "l'enfant", french: "das Kind" },
    //       { german: "la femme", french: "die Frau" },
    //       { german: "la fille", french: "das Mädchen" },
    //       { german: "le garçon", french: "der Junge" },
    //       { german: "l'homme", french: "der Mann, der Mensch" },
    //       { german: "die Person", french: "la personne" },
    //       { german: "die Adresse, die Anschrift", french: "l'adresse" },
    //       { german: "das Alter", french: "l'âge" },
    //       { german: "heißen", french: "s'appeler" },
    //       { german: "der Personalausweis", french: "la carte d'identité" },
    //       { german: "der Name", french: "le nom" },
    //       { german: "der Vorname", french: "le prénom" },
    //     ])
    //   } else if(props.learningLanguage === 1) {
    //     setVocabularyList([
    //       { german: "das Kind", french: "child" },
    //       { german: "die Frau", french: "women" },
    //       { german: "das Mädchen", french: "girl" },
    //       { german: "der Junge", french: "boy" },
    //       { german: "der Mann, der Mensch", french: "man" },
    //       { german: "die Person", french: "la personne" },
    //       { german: "die Adresse, die Anschrift", french: "adresse" },
    //       { german: "das Alter", french: "age" },
    //       { german: "heißen", french: "called" },
    //       { german: "der Personalausweis", french: "ID card" },
    //       { german: "der Name", french: "name" },
    //       { german: "der Vorname", french: "first name" },
    //     ])
    //   } 
    // }

    const languageMappings = [
      // 0: German
      [
        { german: "das Kind", french: "l'enfant", english: "child" },
        { german: "die Frau", french: "la femme", english: "woman" },
        { german: "das Mädchen", french: "la fille", english: "girl" },
        { german: "der Junge", french: "le garçon", english: "boy" },
        { german: "der Mann, der Mensch", french: "l'homme", english: "man" },
        { german: "die Person", french: "la personne", english: "person" },
        { german: "die Adresse, die Anschrift", french: "l'adresse", english: "address" },
        { german: "das Alter", french: "l'âge", english: "age" },
        { german: "heißen", french: "s'appeler", english: "called" },
        { german: "der Personalausweis", french: "la carte d'identité", english: "ID card" },
        { german: "der Name", french: "le nom", english: "name" },
        { german: "der Vorname", french: "le prénom", english: "first name" },
      ],
      // 1: French
      [
        { french: "l'enfant", german: "das Kind", english: "child" },
        { french: "la femme", german: "die Frau", english: "woman" },
        { french: "la fille", german: "das Mädchen", english: "girl" },
        { french: "le garçon", german: "der Junge", english: "boy" },
        { french: "l'homme", german: "der Mann, der Mensch", english: "man" },
        { french: "la personne", german: "die Person", english: "person" },
        { french: "l'adresse", german: "die Adresse, die Anschrift", english: "address" },
        { french: "l'âge", german: "das Alter", english: "age" },
        { french: "s'appeler", german: "heißen", english: "called" },
        { french: "la carte d'identité", german: "der Personalausweis", english: "ID card" },
        { french: "le nom", german: "der Name", english: "name" },
        { french: "le prénom", german: "der Vorname", english: "first name" },
      ],
      // 2: English
      [
        { english: "child", german: "das Kind", french: "l'enfant" },
        { english: "woman", german: "die Frau", french: "la femme" },
        { english: "girl", german: "das Mädchen", french: "la fille" },
        { english: "boy", german: "der Junge", french: "le garçon" },
        { english: "man", german: "der Mann, der Mensch", french: "l'homme" },
        { english: "person", german: "die Person", french: "la personne" },
        { english: "address", german: "die Adresse, die Anschrift", french: "l'adresse" },
        { english: "age", german: "das Alter", french: "l'âge" },
        { english: "called", german: "heißen", french: "s'appeler" },
        { english: "ID card", german: "der Personalausweis", french: "la carte d'identité" },
        { english: "name", german: "der Name", french: "le nom" },
        { english: "first name", german: "der Vorname", french: "le prénom" },
      ],
    ];
    
    if (props.knownLanguage >= 0 && props.knownLanguage <= 2 && props.learningLanguage >= 0 && props.learningLanguage <= 2) {
      setVocabularyList(languageMappings[props.knownLanguage]);
    }

    const wordsFillSentence = ["homme", "femme", "garçon", "fille"];
    const answersFillSentence = ["homme", "femme", "garçon", "fille"];
    const sentencesFill = [
      "Nicola est programmeur et il a 27 ans. Il est un homme",
      "Maria est ingénieure et elle a 23 ans. Elle est une femme",
      "Josh et May sont lycéens et ont 16 ans. Il est un garçon et elle une fille"
    ];
    shuffleArray(wordsFillSentence);

      const answers = vocabularyList.map(word => word.french);
      const words = vocabularyList.map(word => word.french);
      const labelValues = vocabularyList.map(word => word.german);

      shuffleArray(words);
      console.log(words);
      // console.log(answers.length);

      const title = "Angaben zur Person";

      const translatedSentence = "I am a man and she is a woman";
      const answer = "Je suis un homme et elle est une famme";

      const wordsSentence = ["Je", "suis", "un", "homme", "et", "elle", "est", "une", "famme"];
      shuffleArray(wordsSentence);

      const wordsSentence2 = ["C'est", "une", "fille", "et", "c'est", "un", "garçon"];
      shuffleArray(wordsSentence2)

      return (
        <div className="parent_container">
            {/* <Navbar /> */}
            <VocabQuiz title={title} vocabularyList={vocabularyList} setVocabularyList={setVocabularyList}/>
            <div className="flashcard_container">
                {vocabularyList.map((word, index) => (
                <Flashcard key={index} knownLanguage={word.french} learningLanguage={word.german} knownLanguageID={props.knownLanguage} learningLanguageID={props.learningLanguage}/>
                ))}
            </div>
            <MultipleChoiceQuiz vocabularyList={vocabularyList}/>
            <DragAndDrop correctAnswers={answers} words={words} labelValues={labelValues}/>
            <DuolingoDragAndDrop correctAnswers={answers} words={wordsSentence} words2={wordsSentence2} labelValues={labelValues}/>
            <Sudoku1 />
            <FillSentence 
              sentences={sentencesFill}
              words={wordsFillSentence}
              correctAnswers={answersFillSentence}
            />
        </div>
      )
}

export default PersonalInfo_FR_DE;