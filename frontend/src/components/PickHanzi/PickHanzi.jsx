import React, { useCallback, useEffect, useState } from 'react';
import './PickHanzi.css';

const ROUNDS = [
  { hanzi: ['我', '喜', '欢', '你'], pinyin: 'wǒ xǐ huān nǐ', meaning: 'I like you' },
  { hanzi: ['你', '好', '吗'], pinyin: 'nǐ hǎo ma', meaning: 'How are you?' },
  { hanzi: ['我', '爱', '吃', '饭'], pinyin: 'wǒ ài chī fàn', meaning: 'I love eating' },
];
const DISTRACTORS = ['大', '人', '天', '小', '口', '日', '马', '好', '吃'];
const SPAWN_POOL = [...new Set(ROUNDS.flatMap((round) => round.hanzi).concat(DISTRACTORS))];
const MIN_PIECE_DISTANCE = 11;

const createPiece = (hanzi, id, stagger = false) => {
  const duration = 2.4 + Math.random() * 0.8;

  return {
  id,
  hanzi,
  left: 8 + Math.random() * 84,
    duration,
    delay: stagger ? -(Math.random() * duration) : 0,
  };
};

const getOpenPosition = (existingPieces) => {
  const candidates = Array.from({ length: 18 }, (_, index) => 8 + index * 5);
  const openCandidates = candidates.filter((candidate) => (
    existingPieces.every((piece) => Math.abs(piece.left - candidate) >= MIN_PIECE_DISTANCE)
  ));
  return openCandidates.length
    ? openCandidates[Math.floor(Math.random() * openCandidates.length)]
    : null;
};

const createSpawnedPiece = (hanzi, existingPieces, stagger = false) => ({
  ...createPiece(hanzi, `${Date.now()}-${Math.random()}`, stagger),
  left: getOpenPosition(existingPieces),
});

const PickHanzi = () => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [caught, setCaught] = useState([]);
  const [pieces, setPieces] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const round = ROUNDS[roundIndex];

  const startRound = useCallback((index = roundIndex) => {
    const nextRound = ROUNDS[index];
    const nextPieces = [];
    nextRound.hanzi.forEach((hanzi, pieceIndex) => {
      const piece = createSpawnedPiece(hanzi, nextPieces, true);
      if (piece.left !== null) nextPieces.push({ ...piece, id: `${index}-${pieceIndex}` });
    });
    const shuffledDistractors = [...DISTRACTORS].sort(() => Math.random() - 0.5);
    shuffledDistractors.slice(0, 4).forEach((hanzi, pieceIndex) => {
      const piece = createSpawnedPiece(hanzi, nextPieces, true);
      if (piece.left !== null) nextPieces.push({ ...piece, id: `${index}-d${pieceIndex}` });
    });
    setCaught([]);
    setPieces(nextPieces);
  }, [roundIndex]);

  useEffect(() => {
    startRound();
  }, [startRound]);

  useEffect(() => {
    const spawnTimer = setInterval(() => {
      setPieces((currentPieces) => {
        const hanzi = SPAWN_POOL[Math.floor(Math.random() * SPAWN_POOL.length)];
        const piece = createSpawnedPiece(hanzi, currentPieces);
        return piece.left === null ? currentPieces : [...currentPieces, piece];
      });
    }, 200);

    return () => clearInterval(spawnTimer);
  }, []);

  const catchPiece = (piece) => {
    if (gameOver || caught.length >= round.hanzi.length) return;
    setPieces((currentPieces) => currentPieces.filter((currentPiece) => currentPiece.id !== piece.id));
    if (piece.hanzi === round.hanzi[caught.length]) {
      const nextCaught = [...caught, piece.hanzi];
      setCaught(nextCaught);
      setScore((currentScore) => currentScore + 10);
      if (nextCaught.length === round.hanzi.length) {
        setTimeout(() => setRoundIndex((currentIndex) => (currentIndex + 1) % ROUNDS.length), 550);
      }
      return;
    }
    setLives((currentLives) => {
      const nextLives = currentLives - 1;
      if (nextLives <= 0) setGameOver(true);
      return nextLives;
    });
  };

  const restart = () => {
    setRoundIndex(0);
    setScore(0);
    setLives(3);
    setGameOver(false);
  };

  return (
    <main className="basket_game" aria-label="Basket Hanzi game">
      <header className="basket_header">
        <div>
          <p className="basket_kicker">Character catcher</p>
          <h1>Basket</h1>
          <p className="basket_instruction">Catch the Hanzi in order to build the sentence.</p>
        </div>
        <div className="basket_stats" aria-label="Game statistics">
          <span><strong>{score}</strong> points</span>
          <span><strong>{'●'.repeat(lives)}{'○'.repeat(3 - lives)}</strong> lives</span>
        </div>
      </header>

      <section className="basket_round" aria-live="polite">
        <div className="basket_prompt">
          <span>Build this sentence</span>
          {/* <strong>{round.pinyin}</strong> */}
          <strong>{round.meaning}</strong>
        </div>
        <div className="basket_slots" aria-label={`Collected ${caught.length} of ${round.hanzi.length} characters`}>
          {round.hanzi.map((hanzi, index) => (
            <span className={caught[index] ? 'basket_slot is-filled' : 'basket_slot'} key={`${roundIndex}-${index}`}>
              {caught[index] || '?'}
            </span>
          ))}
        </div>
      </section>

      <section className="basket_field" aria-label="Falling Hanzi">
        {pieces.map((piece) => (
          <button
            className="basket_piece"
            key={piece.id}
            style={{
              '--piece-left': `${piece.left}%`,
              '--piece-duration': `${piece.duration}s`,
              '--piece-delay': `${piece.delay}s`,
            }}
            onClick={() => catchPiece(piece)}
            onAnimationEnd={() => setPieces((currentPieces) => currentPieces.filter((currentPiece) => currentPiece.id !== piece.id))}
            type="button"
            aria-label={`Catch ${piece.hanzi}`}
          >
            {piece.hanzi}
          </button>
        ))}
        <div className="basket_visual" aria-hidden="true"><span>篮</span></div>
        {gameOver && (
          <div className="basket_overlay">
            <p className="basket_kicker">Round over</p>
            <h2>Keep practicing</h2>
            <p>Your score: {score}</p>
            <button className="basket_restart" type="button" onClick={restart}>Play again</button>
          </div>
        )}
      </section>
    </main>
  );
};

export default PickHanzi;
