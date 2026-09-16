import React, { useState } from "react";
import "./Verb.css";
import FillSentenceInput from "../components/FillSentenceInput";
import SentenceInput from "../components/SentenceInput";
import SentenceMultipleChoice from "../components/MultipleChoice/SentenceMultipleChoice";

const VerbPracticeEtre = () => {

    const questions = [
        {
        id: 1,
        text: "Je ______ en pleine forme aujourd'hui.",
        options: [
            { id: 'a', text: 'es' },
            { id: 'b', text: 'suis', isCorrect: true },
            { id: 'c', text: 'sommes' },
        ],
        },
        {
            id: 2,
            text: "Il ______ en pleine forme aujourd'hui.",
            options: [
            { id: 'a', text: 'suis' },
            { id: 'b', text: 'sommes' },
            { id: 'c', text: 'est', isCorrect: true },
            ],
        },
        {
            id: 3,
            text: "Nous ______ en pleine forme aujourd'hui.",
            options: [
            { id: 'a', text: 'sommes', isCorrect: true },
            { id: 'b', text: 'suis' },
            { id: 'c', text: 'sont' },
            ],
        },
        {
            id: 4,
            text: "Tu ______ en pleine forme aujourd'hui.",
            options: [
            { id: 'a', text: 'est' },
            { id: 'b', text: 'es', isCorrect: true },
            { id: 'c', text: 'suis' },
            ],
        },
        {
            id: 5,
            text: "Vous ______ en pleine forme aujourd'hui.",
            options: [
                { id: 'a', text: 'sommes' },
                { id: 'b', text: 'êtes', isCorrect: true },
                { id: 'c', text: 'est' },
            ],
        },
        {
            id: 6,
            text: "Elles ______ en pleine forme aujourd'hui.",
            options: [
                { id: 'a', text: 'est' },
                { id: 'b', text: 'sont', isCorrect: true },
                { id: 'c', text: ' suis' },
            ],
        },
        {
            id: 7,
            text: "Elle ______ en pleine forme aujourd'hui.",
            options: [
            { id: 'a', text: 'sont' },
            { id: 'b', text: 'sommes' },
            { id: 'c', text: 'est', isCorrect: true },
            ],
        },
        {
            id: 8,
            text: "On ______ en pleine forme aujourd'hui.",
            options: [
                { id: 'a', text: 'es' },
                { id: 'b', text: 'est', isCorrect: true },
                { id: 'c', text: 'êtes' },
            ],
        },
    ];

    const dialogueEN = [
        "Hi! How are you?",
        "Hi! I\'m good and you?",
        "Fine, thanks",
        "See you later!",
        "Salut!"
    ];

    const dialogue2 = [
        "Bonjour, je suis Judith. Comment tu t’appelles ?",
        "Hello, I’m Judith. What’s your name?",
        "Je m’appelle Hélène.",
        "My name is Hélène.",
        "Enchantée.",
        "Nice to meet you.",
    ];

    const dialogue3 = [
        "Combien coûte un pain au chocolat, s’il vous plaît ?",
        "How much does a pain au chocolat cost, please?",
        "1,70 euros.",
        "1.70 euros.",
        "Alors, deux pains au chocolat, s’il vous plaît.",
        "Then two pain au chocolat, please.",
        "Je peux payer par carte ?",
        "Can I pay by card?",
        "Non, seulement en espèces.",
        "No, only cash.",
        "Vous pouvez payer par carte à partir de 5 euros.",
        "You can pay by card from 5 euros.",
        "Alors, trois pains au chocolat, s’il vous plaît.",
        "Then three pains au chocolat, please.",
    ];

    const sentenceLabels = [
        "Hello/Good morning/Good afternoon",
        "Good evening",
        "Hi/Bye",
        "Hi",
        "How are you?",
        "How are you? (informal)",
        "How are you? (formal)",
        "See you soon",
        "See you later",
        "Goodbye",
        "Have a nice day",
        "Have a nice evening",
        "Good night",
        "Please (informal)",
        "Please (formal)",
        "Thank you",
        "Merci beaucoup",
        "Thank you very much",
        "You're welcome",
        "My pleasure",
        "Sorry",
        "Sorry (pardon)",
        "Excuse me",
        "I’m Hélène.",
        "My name is Judith.",
        "What’s your name? (informal)",
        "What’s your name? (formal)",
        "Nice to meet you.",
        "Faire connaissance",
        "Getting to know each other",
        "Where are you from? (informal)",
        "Where are you from? (formal)",
        "I’m from Paris.",
        "I’m French.",
        "Where do you live? (informal)",
        "Where do you live? (formal)",
        "I live in Paris.",
        "What do you do for a living? (informal)",
        "What do you do for a living? (formal)",
        "I’m a doctor.",
        "I work in a hospital.",
        "Do you speak English? (informal)",
        "Do you speak English? (formal)",
        "Do you speak French? (informal)",
        "Do you speak French? (formal)",
        "I speak English.",
        "I speak a little French.",
        "I don’t speak French well.",
        "I don’t understand.",
        "I didn’t get that.",
        "Can you repeat more slowly, please? (informal)",
        "Can you repeat more slowly, please? (formal)",
        "What’s it called in French?",
        "Do you speak French?",
        "I didn’t get that. Can you repeat it more slowly, please?",
        "Do you speak French?",
        "I speak a little French.",
        "I’m hungry.",
        "Are you hungry? (informal)",
        "Are you hungry? (formal)",
        "I’m thirsty.",
        "Are you thirsty? (informal)",
        "Are you thirsty? (formal)",
        "I’m cold.",
        "Are you cold? (informal)",
        "Are you cold? (formal)",
        "I’m hot.",
        "Are you hot? (informal)",
        "Are you hot? (formal)",
        "I’m tired.",
        "Are you tired? (informal)",
        "Are you tired? (formal)",
        "Where is the toilet?",
        "Where is the metro station?",
        "Where’s the supermarket?",
        "Where’s the bakery?",
        "Where’s the pharmacy?",
        "How much does it cost?",
        "Can I pay in cash?",
        "Can I pay by card?",
        "Breakfast",
        "Lunch",
        "Dinner",
        "May I have a menu, please?",
        "Are you ready to order?",
        "Yes, I’ll have a Caesar salad, please.",
        "Would you like something to drink?",
        "A glass of white wine and a pitcher of water, please.",
        "Turn right",
        "Turn left",
        "Straight ahead",
        "Cab",
        "Subway",
        "Bus",
        "Train",
        "Plane",
        "(Metro/bus) ticket",
        "(Train/plane) ticket",
        "Airport",
        "Train station",
    ];
    
    const correctAnswers2 = [
        "Elles sont japonaises.",
        "Il est danseur.",
        "Vous êtes en vacances.",
        "Je suis très beau.",
        "Tu es heureuse.",
        "Nous sommes en Italie.",
        "Elles sont d'accord.",
        "Il est très content de son contrat.",
    ];

    const wordsFillSentence = ["est", "sont", "es", "est", "suis", "sommes", "est", "êtes"];
    const answersFillSentence = ["es", "est", "suis", "sommes", "êtes", "est", "sont", "est"];
    const sentencesFill = [
      "Tu es toujours d’accord avec elle.",
      "Elle est tout le temps de bonne humeur.",
      "Je suis très heureuse pour l’achat de notre maison.",
      "Nous sommes à l’heure.",
      "Vous êtes toujours chez elle.",
      "Il est de passage à Paris.",
      "Ils sont vraiment adorables.",
      "On est toujours ensemble."
    ];

    // const wordsFillSentence2 = ["est", "sont", "es", "est", "suis", "sommes", "est", "êtes"];
    // const answersFillSentence2 = ["suis", "suis", "suis", "sommes", "êtes", "est", "sont", "est"];
    // const sentencesFill2 = [
    //   "Je suis grand.",
    //   "Tu es petit.",
    //   "Il est ",
    //   "Je suis très heureuse pour l’achat de notre maison.",
    //   "Nous sommes à l’heure.",
    //   "Vous êtes toujours chez elle.",
    //   "Il est de passage à Paris.",
    //   "Ils sont vraiment adorables.",
    //   "On est toujours ensemble."
    // ];

  return (
    <div className="verb_practice">
        {/* <div className="verb_fill_blanks">
            <FillSentenceInput
                sentences={sentencesFill}
                words={wordsFillSentence}
                correctAnswers={answersFillSentence}
            />
        </div> */}
       <div className="verb_multiple_container">
            <SentenceMultipleChoice questions={questions}/>
        </div>
        <div className="verb_translate">
            <SentenceInput sentenceLabels={sentenceLabels} correctAnswers={correctAnswers}/>
            </div>
        <div className="verb_fill_blanks">
            <FillSentenceInput
                sentences={sentencesFill}
                words={wordsFillSentence}
                correctAnswers={answersFillSentence}
            />
        </div>
        <div className="verb_rewrite_sentence">
            <SentenceInput sentenceLabels={sentenceLabels2} correctAnswers={correctAnswers2}/>
        </div>
    </div>
  );
};

export default VerbPracticeEtre;