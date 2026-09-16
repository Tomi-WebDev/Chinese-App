import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const exercises = [
  {
    name: "Test",
    description: "Check your vocabulary and build recall.",
    accent: "coral",
  },
  {
    name: "Flashcards",
    description: "Review words at your own pace.",
    accent: "blue",
  },
  {
    name: "Sentences",
    description: "Practice useful sentences with audio.",
    accent: "gold",
  },
  {
    name: "Phrases",
    description: "Train short phrases for everyday use.",
    accent: "green",
  },
  {
    name: "Sudoku",
    description: "Put your Chinese reading skills to work.",
    accent: "violet",
  },
  {
    name: "Basket",
    description: "Pick the right Hanzi and keep moving.",
    accent: "orange",
  },
];

const lessons = [
  { name: "Lesson 1", description: "Add the vocabulary for your first lesson.", path: "/lesson-1", accent: "coral" },
  { name: "Lesson 2", description: "Build the next set of words to practise.", path: "/lesson-2", accent: "blue" },
  { name: "Lesson 3", description: "Keep growing your vocabulary list.", path: "/lesson-3", accent: "green" },
];

const Home = () => {
  return (
    <main className="home_page">
      <section className="home_intro">
        <p className="home_kicker">Vocab Coach</p>
        <h1>What would you like to practice?</h1>
        <p className="home_subtitle">
          Choose an exercise and continue with your Chinese journey.
        </p>
      </section>

      <section className="exercise_grid" aria-label="Exercises">
        {exercises.map((exercise, index) => (
          <Link
            className={`exercise_card exercise_card_${exercise.accent}`}
            to={`/italian?exercise=${encodeURIComponent(exercise.name)}`}
            key={exercise.name}
          >
            <span className="exercise_number">0{index + 1}</span>
            <span className="exercise_name">{exercise.name}</span>
            <span className="exercise_description">{exercise.description}</span>
            <span className="exercise_arrow" aria-hidden="true">-&gt;</span>
          </Link>
        ))}
      </section>

      <section className="home_lessons">
        <div className="home_section_heading">
          <p className="home_kicker">Your lessons</p>
          <h2>Choose a lesson</h2>
        </div>
        <div className="exercise_grid" aria-label="Lessons">
          {lessons.map((lesson, index) => (
            <Link
              className={`exercise_card exercise_card_${lesson.accent}`}
              to={lesson.path}
              key={lesson.name}
            >
              <span className="exercise_number">0{index + 1}</span>
              <span className="exercise_name">{lesson.name}</span>
              <span className="exercise_description">{lesson.description}</span>
              <span className="exercise_arrow" aria-hidden="true">-&gt;</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;