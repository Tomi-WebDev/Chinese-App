 import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import Navbar from "../../components/Navbar/Navbar";
import Sudoku from "./Sudoku";

const Sudoku1 = () => {

    // const [games, setGames] = useState([]);
    // const {user} = useAuthContext();

    const unfilledGrid = [
        ["我", "", "你", "他", "", "好"],
        ["", "他", "", "", "", "很"],
        ["", "你", "很", "", "我", ""],
        ["", "她", "", "好", "", "你"],
        ["", "", "她", "", "他", ""],
        ["很", "我", "", "", "好", "她"]
    ];

    const correctAnswers = [
        ["我", "很", "你", "他", "她", "好"],
        ["她", "他", "好", "我", "你", "很"],
        ["好", "你", "很", "她", "我", "他"],
        ["他", "她", "我", "好", "很", "你"],
        ["你", "好", "她", "很", "他", "我"],
        ["很", "我", "他", "你", "好", "她"]
    ];

    const title = "Person Vocab 我";
    const info = "Below is a sudoku with basic hanzi characters";
    const reference = [
        { german: "我", pinyin: "wǒ", french: "I"},
        { german: "你", pinyin: "nǐ", french: "you"},        
        { german: "他", pinyin: "tā", french: "he"},
        { german: "她", pinyin: "tā", french: "she"},
        { german: "很", pinyin: "hěn", french: "very"},
        { german: "好", pinyin: "hǎo", french: "well"},
    ];
    const emptyCount = 18;

    return (
        <>
            <Sudoku 
                unfilledGrid={unfilledGrid} 
                correctAnswers={correctAnswers}
                title={title}
                info={info}
                reference={reference}
                emptyCount={emptyCount}
            />
        </>
    )
}

export default Sudoku1;