import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
/* import "./HomeAlt.css"; */

const exercises = [
  {
    name: "Vocabulary Test - HSK 1",
    description: "Now complete!",
    accent: "coral",
  },
  {
    name: "Flashcards - HSK 1",
    description: "Review the words at your own pace.",
    accent: "blue",
  },
  {
    name: "Sentences HSK - Listening",
    description: "Practice useful sentences with audio.",
    accent: "gold",
  },
  {
    name: "Изречения - Четене HSK1",
    description: "6/900",
    accent: "green",
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
  { name: "Урок 1", description: "你好", path: "/lesson-1", accent: "coral" },
  { name: "Урок 2", description: "汉语不太难", path: "/lesson-2", accent: "blue" },
  { name: "Урок 3", description: "明天见", path: "/lesson-3", accent: "green" },
  { name: "Урок 4", description: "你去哪儿", path: "/lesson-4", accent: "orange" },
  { name: "Урок 5", description: "这是王老师", path: "/lesson-5", accent: "violet" },
  { name: "Урок 6", description: "我学习汉语", path: "/lesson-6", accent: "coral" },
  { name: "Урок 7", description: "你吃什么", path: "/lesson-7", accent: "blue" },
  { name: "Урок 8", description: "苹果一斤多少钱", path: "/lesson-8", accent: "green" },
  { name: "Урок 9", description: "我换人民币", path: "/lesson-9", accent: "orange" },
  { name: "Урок 10", description: "他住哪儿", path: "/lesson-10", accent: "violet" },
  { name: "Урок 11", description: "我们都是留学生", path: "/lesson-11", accent: "gold" },
  { name: "Урок 12", description: "你在哪儿学习汉语?", path: "/lesson-12", accent: "coral" },
  { name: "Урок 13", description: "这是不是中药.", path: "/lesson-13", accent: "gold" },
  { name: "Урок 14", description: "你的车是新的还是旧的", path: "/lesson-14", accent: "violet" },
  { name: "Урок 15", description: "你家有四口人", path: "/lesson-15", accent: "green" },
  { name: "Урок 16", description: "你常去图书馆吗", path: "/lesson-16", accent: "blue" },
  { name: "Урок 17", description: "他在做什么呢", path: "/lesson-17", accent: "orange" },
  { name: "Урок 18", description: "我去超市买东西", path: "/lesson-18", accent: "coral" },
  { name: "1-ви Урок (Нов Учебник)", description: "现在，跟，一起，咱们，走，常（常）。。。", path: "/latest-lesson", accent: "orange" },
  { name: "Тест 1", description: "Уроци 1 до 18", path: "/test-1", accent: "green" },
  { name: "Изречения 1", description: "Изреченията (недовършен)", path: "/sentences-1", accent: "blue" },
  { name: "Екстра 1", description: "Предмети, Плодове, Части на тялото", path: "/extra-1", accent: "violet" },
];

const elonLessons = [
  {
    name: "Lesson 1",
    description: "Start with the first Elon lesson.",
    path: "/elon-lesson-1",
    accent: "blue",
  },
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
  { kicker: "Elon", title: "Choose an Elon lesson", lessons: elonLessons },
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