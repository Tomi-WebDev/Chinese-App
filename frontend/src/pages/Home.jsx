import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
/* import "./HomeAlt.css"; */

const exercises = [
  {
    name: "HSK 1",
    description: "Initials A - C as of 17.09",
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
  /*{
    name: "Phrases",
    description: "Train short phrases for everyday use.",
    accent: "green",
  },*/
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
  { name: "Урок 1", description: "一，二，三，人，大，天，小，口，日，目，白，马，吗，女，妈妈，子，好", path: "/lesson-1", accent: "coral" },
  { name: "Урок 2", description: "木，本，也，门，们，他，她，你，您，我，五，八，不，太，男", path: "/lesson-2", accent: "blue" },
  { name: "Урок 3", description: "Keep growing your vocabulary list.", path: "/lesson-3", accent: "green" },
  { name: "Урок 4", description: "俄语，法语，英语，德语，意大利语，西班牙语，保加利亚语，日语，韩国语，明天，阿拉伯语，去，见，对，邮局，寄，信，银行，取，钱", path: "/lesson-4", accent: "orange" },
  { name: "Урок 5", description: "今天，昨天，星期，几，这，那，这儿，那儿，哪儿，回，学校，再见，对不起，没关系，天安门，北京", path: "/lesson-5", accent: "violet" },
];

const hanyuJiaochengLessons = [
  {
    name: "Lesson 1",
    description: "Start with the first Hanyu Jiaocheng lesson.",
    path: "/hanyu-jiaocheng-lesson-1",
    accent: "gold",
  },
];

const hsk1Lessons = [
  {
    name: "Lesson 1",
    description: "Begin the first HSK 1 lesson.",
    path: "/hsk1-lesson-1",
    accent: "violet",
  },
];

const lessonSections = [
  { kicker: "Уводен Курс", title: "Избери Урок", lessons },
  { kicker: "Hanyu Jiaocheng", title: "Choose a Hanyu Jiaocheng lesson", lessons: hanyuJiaochengLessons },
  { kicker: "HSK 1", title: "Choose an HSK 1 lesson", lessons: hsk1Lessons },
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

      {lessonSections.map((section, sectionIndex) => (
        <section className="home_lessons" key={`${section.kicker}-${sectionIndex}`}>
          <div className="home_section_heading">
            <p className="home_kicker">{section.kicker}</p>
            <h2>{section.title}</h2>
          </div>
          <div className="exercise_grid" aria-label={section.title}>
            {section.lessons.map((lesson, index) => (
              <Link
                className={`exercise_card exercise_card_${lesson.accent}`}
                to={lesson.path}
                key={`${section.kicker}-${lesson.name}-${index}`}
              >
                <span className="exercise_number">0{index + 1}</span>
                <span className="exercise_name">{lesson.name}</span>
                <span className="exercise_description">{lesson.description}</span>
                <span className="exercise_arrow" aria-hidden="true">-&gt;</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;