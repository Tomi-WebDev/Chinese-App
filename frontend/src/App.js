import './App.css';
import First100Words from './pages/Italian/First100Words';
import IrregularVerbsGerman from './pages/German/IrregularVerbsPast.jsx';
import Footer from './components/UI/Footer/Footer.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
// import RussianDay3 from './pages/Russian/RussianDay3.jsx';
// import RussianDay4 from './pages/Russian/RussianDay4.jsx';
import EverydayPhrases from './pages/French/EverydayPhrases.jsx';
import Welkom from './pages/Welkom.jsx';
import Home from './pages/Home.jsx';
import Lesson1 from './pages/Lessons/Lesson1.jsx';
import Lesson2 from './pages/Lessons/Lesson2.jsx';
import Lesson3 from './pages/Lessons/Lesson3.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';

import React, {useState} from "react";

function App() {

  // const [selectedComponent, setSelectedComponent] = useState(null);

  // const selectTheme = (componentName) => {
  //   setSelectedComponent(componentName);
  // };

  // const renderSelectedComponent = () => {
  //   switch (selectedComponent) {
  //     case 'First 100 Italian Words':
  //       return <First100Words />
  //     case 'Welkom':
  //       return <Welkom />;
  //     // case 'Körperteile':
  //     //   return <Körperteile />;
  //     // case 'Monate':
  //     //   return <Monate />;
  //     // case 'Week':
  //     //   return <Week />;
  //     // case 'Seasons':
  //     //   return <Seasons firstLanguage={firstLanguage} secondLanguage={secondLanguage}/>;
  //     // case 'FoodsOne':
  //     //   return <FoodsOne />;
  //     // case 'RussianDay1':
  //     //   return <RussianDay1 />
  //     default:
  //       return null;
  //   }
  // };

// export default Navbar;


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/russian" element={<RussianDay3 />} /> */}
          {/* <Route path="/russian4" element={<RussianDay4 />} /> */}
          <Route path='/' element={<Home />}/>
          <Route path='/italian' element={<First100Words />}/>
          <Route path='/lesson-1' element={<Lesson1 />}/>
          <Route path='/lesson-2' element={<Lesson2 />}/>
          <Route path='/lesson-3' element={<Lesson3 />}/>
          {/* <Route path='/' element={<EverydayPhrases />}/> */}
          {/* <Route path='/' element={<IrregularVerbsGerman />}/> */}
          {/* <Route path='/hoofdstuk_1' element={<Welkom />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{/* <Navbar />
      <First100Words /> */}
      {/* <Navbar /> */}
      {/* <div className="navbar">
            <div className="title">
                <h1>Vocab Coach</h1>
            </div>
            <div className="native_language">
                <img src={germanFlag} alt="" onClick={(event) => handleFirstLanguageChange('de', event)}/>
                <img src={frenchFlag} alt="" onClick={(event) => handleFirstLanguageChange('fr', event)}/>
                <img src={britishFlag} alt="" onClick={(event) => handleFirstLanguageChange('en', event)}/>
            </div>
            <div className="native_language">
                <img src={germanFlag} alt="" onClick={(event) => handleSecondLanguageChange('de', event)}/>
                <img src={frenchFlag} alt="" onClick={(event) => handleSecondLanguageChange('fr', event)}/>
                <img src={britishFlag} alt="" onClick={(event) => handleSecondLanguageChange('en', event)}/>
            </div>
        </div> */}
      {/* <div className='themes'> */}
        {/* <button onClick={() => selectTheme('First 100 Italian Words')}>First 100 Italian Words</button> */}
        {/* <button onClick={() => selectTheme('AngabenZurPerson')}>Personal Information</button>
        <button onClick={() => selectTheme('Körperteile')}>Body Parts</button>
        <button onClick={() => selectTheme('Monate')}>Months</button>
        <button onClick={() => selectTheme('Week')}>Days of the Week</button>
        <button onClick={() => selectTheme('Seasons')}>Seasons</button>
        <button onClick={() => selectTheme('FoodsOne')}>Foods One</button>
        <button onClick={() => selectTheme('RussianDay1')}>Russian First Day</button> */}
      {/* </div> */}
      {/* <VerbPracticeEtre /> */}
      {/* {renderSelectedComponent()} */}




  // const Navbar = () => {

    // const [firstLanguage, setFirstLanguage] = useState('de');
    // const [secondLanguage, setSecondLanguage] = useState('fr');

    // const handleFirstLanguageChange = (language, event) => {

    //   const firstLanguageButtons = document.querySelectorAll('.native_language img');
    //   firstLanguageButtons.forEach(button => {
    //     button.classList.remove('selected');
    //   });

    //   // Add the 'selected' class to the clicked button
    //   event.target.classList.add('selected');

    //   setFirstLanguage(language);
    // }

    // const handleSecondLanguageChange = (language, event) => {

    //   const secondLanguageButtons = document.querySelectorAll('.native_language:last-child img');
    //   secondLanguageButtons.forEach(button => {
    //     button.classList.remove('selected');
    //   });

    //   // Add the 'selected' class to the clicked button
    //   event.target.classList.add('selected');

    //   setSecondLanguage(language);
    // }

    // return (
        
    // )
  // }