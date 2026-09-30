import React, { useState } from "react";
import "./ReadingSentences.css";

const exampleSentences = [
  {
    chinese: "我爱妈妈。",
    pinyin: "Wǒ ài māma.",
    translation: "Аз обичам мама.",
  },
  {
    chinese: "我爱喝茶。",
    pinyin: "Wǒ ài hē chá.",
    translation: "Аз обичам да пия чай.",
  },
  {
    chinese: "他爱看电影。",
    pinyin: "Tā ài kàn diànyǐng.",
    translation: "Той обича да гледа филми.",
  },
  {
    chinese: "他今年八岁。",
    pinyin: "Tā jīnnián bā suì.",
    translation: "Той е на осем години тази година.",
  },
  {
    chinese: "我们八点上班。",
    pinyin: "Wǒmen bā diǎn shàngbān.",
    translation: "Ние започваме работа от осем.",
  },
  {
    chinese: "我有八本书。",
    pinyin: "Wǒ yǒu bā běn shū.",
    translation: "Аз имам осем книги.",
  },
];

const ReadingSentence = ({ sentence, showPinyin }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isRevealed = isHovered || isFocused || isPinned;

  return (
    <li className="reading_sentence">
      <p className="reading_sentence_chinese" lang="zh">{sentence.chinese}</p>
      {showPinyin && <p className="reading_sentence_pinyin">{sentence.pinyin}</p>}
      <div className="reading_sentence_translation_wrap">
        <p className="reading_sentence_translation">{sentence.translation}</p>
        <button
          className={`reading_translation_cover ${isRevealed ? "is-revealed" : ""}`}
          type="button"
          aria-label={isPinned ? "Скрий превода" : "Покажи превода"}
          aria-expanded={isRevealed}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onClick={() => setIsPinned((pinned) => !pinned)}
        >
          Покажи превода
        </button>
      </div>
    </li>
  );
};

const ReadingSentences = ({ showPinyin }) => (
  <main className="reading_sentences">
    <h1>Изречения - Четене</h1>
    <ol className="reading_sentence_list">
      {exampleSentences.map((sentence) => (
        <ReadingSentence key={sentence.chinese} sentence={sentence} showPinyin={showPinyin} />
      ))}
    </ol>
  </main>
);

export default ReadingSentences;