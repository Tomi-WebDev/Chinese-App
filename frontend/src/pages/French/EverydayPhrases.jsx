import React, { useState } from "react";
import FillSentenceInput from "../../components/FillSentenceInput";
import InputAnswer from "../../components/InputAnswer";

const EverydayPhrases = () => {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

    const [vocabularyList, setVocabularyList] = useState([
        { german: "à bientôt", french: "see you soon" },
        { german: "à demain", french: "see you tomorrow" },
        { german: "à droite", french: "turn right" },
        { german: "à gauche", french: "turn left" },
        { german: "à tout à l'heure", french: "see you later" },
        { german: "au revoir", french: "bye" },
        { german: "avec plaisir", french: "my pleasure" },
        { german: "bon appétit", french: "enjoy your meal" },
        { german: "bonjour", french: "hello" },
        { german: "bonne journée", french: "have a nice day" },
        { german: "bonne nuit", french: "good night" },
        { german: "bonne soirée", french: "have a nice evening" },
        { german: "coucou", french: "hi" },
        { german: "de rien", french: "you're welcome" },
        { german: "désolé(e)/pardon", french: "sorry" },
        { german: "enchanté(e)", french: "nice to meet you" },
        { german: "excusez-moi", french: "excuse me" },
        { german: "merci (beaucoup)", french: "thank you (very much)" },
        { german: "s'il te/vous plaît", french: "please" },
        { german: "salut", french: "hi/bye" },
        { german: "tout droit", french: "straight ahead" }
      ]);
  
        const answers = vocabularyList.map(word => word.french);
        const words = vocabularyList.map(word => word.french);
        const labelValues = vocabularyList.map(word => word.german);
        shuffleArray(words);

        const [vocabularyList2, setVocabularyList2] = useState([
            { german: "avoir chaud", french: "to be hot" },
            { german: "avoir faim", french: "to be hungry" },
            { german: "avoir froid", french: "to be cold" },
            { german: "avoir soif", french: "to be thirsty" },
            { german: "boire", french: "to drink" },
            { german: "manger", french: "to eat" },
            { german: "commander", french: "to order" },
            { german: "comprendre", french: "to understand" },
            { german: "coûter", french: "to cost" },
            { german: "faire", french: "to do" },
            { german: "habiter", french: "to live" },
            { german: "payer", french: "to pay" },
            { german: "pouvoir", french: "to can" },
            { german: "prendre", french: "to take" },
            { german: "répéter", french: "to repeat" },
            { german: "s'appeler", french: "to be called" },
            { german: "venir de", french: "to come from" },
        ]);

        const answers2 = vocabularyList2.map(word => word.french);
        const words2 = vocabularyList2.map(word => word.french);
        const labelValues2 = vocabularyList2.map(word => word.german);
        shuffleArray(words2);

        const [vocabularyList3, setVocabularyList3] = useState([
            { german: "l'addition (f)", french: "bill/check" },
            { german: "l'aéroport (m)", french: "airport" },
            { german: "l'avion (m)", french: "plane" },
            { german: "la bière", french: "beer" },
            { german: "le billet (train/plane)", french: "ticket" },
            { german: "la boulangerie", french: "bakery" },
            { german: "le bus", french: "bus" },
            { german: "le café", french: "coffee" },
            { german: "la carafe", french: "pitcher" },
            { german: "la carte", french: "card" },
            { german: "le déjeuner", french: "lunch" },
            { german: "le dîner", french: "dinner" },
            { german: "les espèces (f)", french: "cash" },
            { german: "la gare", french: "train station" },
            { german: "l'hôpital (m)", french: "hospital" },
            { german: "le médecin", french: "doctor/physician" },
            { german: "le menu", french: "menu" },
            { german: "le métro", french: "subway" },
            { german: "le petit-déjeuner", french: "breakfast" },
            { german: "la pharmacie", french: "pharmacy" },
            { german: "la station de métro", french: "metro station" },
            { german: "le supermarché", french: "supermarket" },
            { german: "le taxi", french: "cab" },
            { german: "le ticket (metro/bus)", french: "ticket" },
            { german: "les toilettes (f)", french: "toilet" },
            { german: "le train", french: "train" },
            { german: "le verre", french: "glass" },
            { german: "la vie", french: "life" },
            { german: "le vin", french: "wine" },
          ]);

        const answers3 = vocabularyList3.map(word => word.french);
        const words3 = vocabularyList3.map(word => word.french);
        const labelValues3 = vocabularyList3.map(word => word.german);
        shuffleArray(words3);

        const [vocabularyList4, setVocabularyList4] = useState([
            { german: "à partir de", french: "starting from" },
            { german: "bien", french: "good" },
            { german: "dans", french: "in" },
            { german: "lentement", french: "slowly" },
            { german: "où", french: "where" },
            { german: "quoi", french: "what" },
            { german: "un peu", french: "a little" },
          ]);

        const answers4 = vocabularyList4.map(word => word.french);
        const words4 = vocabularyList4.map(word => word.french);
        const labelValues4 = vocabularyList4.map(word => word.german);
        shuffleArray(words4);

        const [vocabularyList5, setVocabularyList5] = useState([
            { german: "see you soon", french: "à bientôt" },
            { german: "see you tomorrow", french: "à demain" },
            { german: "turn right", french: "à droite" },
            { german: "turn left", french: "à gauche" },
            { german: "see you later", french: "à tout à l'heure" },
            { german: "bye", french: "au revoir" },
            { german: "my pleasure", french: "avec plaisir" },
            { german: "enjoy your meal", french: "bon appétit" },
            { german: "hello", french: "bonjour" },
            { german: "have a nice day", french: "bonne journée" },
            { german: "good night", french: "bonne nuit" },
            { german: "have a nice evening", french: "bonne soirée" },
            { german: "hi", french: "coucou" },
            { german: "you're welcome", french: "de rien" },
            { german: "sorry", french: "désolé/pardon" },
            { german: "nice to meet you", french: "enchanté" },
            { german: "excuse me", french: "excusez-moi" },
            { german: "thank you (very much)", french: "merci (beaucoup)" },
            { german: "please (ifml/fml)", french: "s'il te/vous plaît" },
            { german: "hi/bye", french: "salut" },
            { german: "straight ahead", french: "tout droit" },
          ]);
          
          const answers5 = vocabularyList5.map(word => word.french);
          const words5 = vocabularyList5.map(word => word.french);
          const labelValues5 = vocabularyList5.map(word => word.german);
          shuffleArray(words5);
          
          const [vocabularyList6, setVocabularyList6] = useState([
            { german: "to be hot", french: "avoir chaud" },
            { german: "to be hungry", french: "avoir faim" },
            { german: "to be cold", french: "avoir froid" },
            { german: "to be thirsty", french: "avoir soif" },
            { german: "to drink", french: "boire" },
            { german: "to eat", french: "manger" },
            { german: "to order", french: "commander" },
            { german: "to understand", french: "comprendre" },
            { german: "to cost", french: "coûter" },
            { german: "to do", french: "faire" },
            { german: "to live", french: "habiter" },
            { german: "to pay", french: "payer" },
            { german: "to can", french: "pouvoir" },
            { german: "to take", french: "prendre" },
            { german: "to repeat", french: "répéter" },
            { german: "to be called", french: "s'appeler" },
            { german: "to come from", french: "venir de" },
          ]);
          
          const answers6 = vocabularyList6.map(word => word.french);
          const words6 = vocabularyList6.map(word => word.french);
          const labelValues6 = vocabularyList6.map(word => word.german);
          shuffleArray(words6);
          
          const [vocabularyList7, setVocabularyList7] = useState([
            { german: "bill/check", french: "l'addition (f)" },
            { german: "airport", french: "l'aéroport (m)" },
            { german: "plane", french: "l'avion (m)" },
            { german: "beer", french: "la bière" },
            { german: "ticket", french: "le billet (train/plane)" },
            { german: "bakery", french: "la boulangerie" },
            { german: "bus", french: "le bus" },
            { german: "coffee", french: "le café" },
            { german: "pitcher", french: "la carafe" },
            { german: "card", french: "la carte" },
            { german: "lunch", french: "le déjeuner" },
            { german: "dinner", french: "le dîner" },
            { german: "cash", french: "les espèces (f)" },
            { german: "train station", french: "la gare" },
            { german: "doctor/physician", french: "le médecin" },
            { german: "menu", french: "le menu" },
            { german: "subway", french: "le métro" },
            { german: "breakfast", french: "le petit-déjeuner" },
            { german: "pharmacy", french: "la pharmacie" },
            { german: "metro station", french: "la station de métro" },
            { german: "supermarket", french: "le supermarché" },
            { german: "cab", french: "le taxi" },
            { german: "ticket", french: "le ticket (metro/bus)" },
            { german: "toilet", french: "les toilettes (f)" },
            { german: "train", french: "le train" },
            { german: "glass", french: "le verre" },
            { german: "life", french: "la vie" },
            { german: "wine", french: "le vin" },
          ]);
          
          const answers7 = vocabularyList7.map(word => word.french);
          const words7 = vocabularyList7.map(word => word.french);
          const labelValues7 = vocabularyList7.map(word => word.german);
          shuffleArray(words7);
          
          const [vocabularyList8, setVocabularyList8] = useState([
            { german: "starting from", french: "à partir de" },
            { german: "good", french: "bien" },
            { german: "in", french: "dans" },
            { german: "slowly", french: "lentement" },
            { german: "where", french: "où" },
            { german: "what", french: "quoi" },
            { german: "a little", french: "un peu" },
          ]);
          
          const answers8 = vocabularyList8.map(word => word.french);
          const words8 = vocabularyList8.map(word => word.french);
          const labelValues8 = vocabularyList8.map(word => word.german);
          shuffleArray(words8);

          const sentenceLabels = [
            "Greetings",
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
        
        const correctAnswers2 =  [
            "Bonjour les amis ! Bienvenue dans ce nouvel épisode.",
            "Aujourd’hui, on s’inspire de nos amis des chaînes",
            "les cent mots, expressions et phrases les plus basiques",
            "que tous les étudiants en français doivent connaître.",
            "C’est parti ! - On y va !",
            "Salutations",
            "Bonjour",
            "Bonsoir",
            "Salut",
            "Coucou",
            "Ça va ?",
            "Tu vas bien ?",
            "Vous allez bien ?",
            "À bientôt",
            "À tout à l’heure",
            "Au revoir",
            "Bonne journée",
            "Bonne soirée",
            "Bonne nuit",
            "Salut ! Tu vas bien ?",
            "Coucou ! Ça va et toi ?",
            "Très bien, merci.",
            "Enchanté(e).",
            "Bonjour, je suis Judith. Comment tu t’appelles ?",
            "Je m’appelle Hélène.",
            "Enchantée.",
            "Faire connaissance",
            "Tu viens d’où ?",
            "Vous venez d’où ?",
            "Je viens de Paris.",
            "Je suis français(e).",
            "Tu habites où ?",
            "Vous habitez où ?",
            "J’habite à Paris.",
            "Tu fais quoi dans la vie ?",
            "Qu’est-ce que vous faites dans la vie ?",
            "Je suis médecin.",
            "Je travaille dans un hôpital.",
            "Hélène, qu’est-ce qu’on pourrait proposer aux débutants",
            "qui nous regardent et qui cherchent à utiliser nos vidéos",
            "pour progresser ? - Alors, c’est très simple, si vous voulez",
            "progresser en français en utilisant nos vidéos, on vous propose",
            "d’utiliser aussi toutes les ressources exclusives qu’on prépare",
            "pour nos membres, par exemple des exercices qu’on fait",
            "chaque semaine et qui sont reliés à chacune de nos vidéos.",
            "En tant que membre, vous pouvez donc faire ces exercices",
            "et ainsi mémoriser et mettre en pratique le contenu de nos vidéos.",
            "Et comment on accède à tout ça ? - C’est très simple, vous cliquez",
            "sur le lien easy-french.org/membership.",
            "Communication",
            "Tu parles anglais ?",
            "Vous parlez anglais ?",
            "Tu parles français ?",
            "Vous parlez français ?",
            "Je parle anglais.",
            "Je parle un peu français.",
            "Je ne parle pas bien français.",
            "Je ne comprends pas.",
            "Je n’ai pas compris.",
            "Tu peux répéter plus lentement, s’il te plaît ?",
            "Vous pouvez répéter plus lentement, s’il vous plaît ?",
            "Comment ça s’appelle en français ?",
            "Tu parles français ?",
            "Je n’ai pas compris. Tu peux répéter plus lentement, s’il te plaît ?",
            "Tu parles français ?",
            "Je parle un peu français.",
            "Sensations",
            "J’ai faim.",
            "Tu as faim ?",
            "Vous avez faim ?",
            "J’ai soif.",
            "Tu as soif ?",
            "Vous avez soif ?",
            "J’ai froid.",
            "Tu as froid ?",
            "Vous avez froid ?",
            "J’ai chaud.",
            "Tu as chaud ?",
            "Vous avez chaud ?",
            "Je suis fatigué(e).",
            "Tu es fatigué(e) ?",
            "Vous êtes fatigué(e) ?",
            "Besoins basiques",
            "Où sont les toilettes ?",
            "Où est la station de métro ?",
            "Où est le supermarché ?",
            "Où est la boulangerie ?",
            "Où est la pharmacie ?",
            "Combien ça coûte ?",
            "Je peux payer en espèces ?",
            "Je peux payer par carte ?",
            "Combien coûte un pain au chocolat, s’il vous plaît ?",
            "1,70 euros.",
            "Alors, deux pains au chocolat, s’il vous plaît.",
            "Je peux payer par carte ?",
            "Non, seulement en espèces.",
            "Vous pouvez payer par carte à partir de 5 euros.",
            "Alors, trois pains au chocolat, s’il vous plaît.",
            "Au restaurant",
            "Le petit-déjeuner",
            "Le déjeuner",
            "Le dîner",
            "Je peux avoir un menu, s’il vous plaît ?",
            "Vous êtes prête à commander ?",
            "Oui, je vais prendre une salade césar, s’il vous plaît.",
            "Vous prendrez quelque chose à boire ?",
            "Un verre de vin blanc et une carafe d’eau, s’il vous plaît.",
            "Directions et transports",
            "À droite",
            "À gauche",
            "Tout droit",
            "Le taxi",
            "Le métro",
            "Le bus",
            "Le train",
            "L’avion",
            "Le ticket",
            "Le billet",
            "L’aéroport",
            "La gare",
            "Merci beaucoup les amis d’avoir regardé notre épisode.",
            "On espère que ça vous a plu. Ecrivez-nous en commentaire",
            "le mot ou la phrase que vous utilisez le plus souvent.",
            "Abonnez-vous à notre chaîne, likez la vidéo, et à très bientôt !"
        ]
        ;
          

    return (
        <div className="everyday_phrases_container">
            <div className="header">French-English</div>
            <InputAnswer correctAnswers={answers} words={words} labelValues={labelValues}/>
            <InputAnswer correctAnswers={answers2} words={words2} labelValues={labelValues2}/>
            <InputAnswer correctAnswers={answers3} words={words3} labelValues={labelValues3}/>
            <InputAnswer correctAnswers={answers4} words={words4} labelValues={labelValues4}/>
            <div className="header">English-French</div>
            <InputAnswer correctAnswers={answers5} words={words5} labelValues={labelValues5}/>
            <InputAnswer correctAnswers={answers6} words={words6} labelValues={labelValues6}/>
            <InputAnswer correctAnswers={answers7} words={words7} labelValues={labelValues7}/>
            <InputAnswer correctAnswers={answers8} words={words8} labelValues={labelValues8}/>
        </div>
    )
}

export default EverydayPhrases;