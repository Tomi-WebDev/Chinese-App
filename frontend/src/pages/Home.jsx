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
    name: "Sentences",
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
  { name: "Урок 1", description: "一，二，三，人，大，小，口，日，目，白，妈妈，好，女，马，天，子，吗", path: "/lesson-1", accent: "coral" },
  { name: "Урок 2", description: "木，本，也，门，太，八，他，她，们，你，您，不，五，男，我", path: "/lesson-2", accent: "blue" },
  { name: "Урок 3", description: "六，七，十，九，妹妹，姐姐，四，和，有，忙，很，是，汉语，学，难，弟弟，哥哥，爸爸", path: "/lesson-3", accent: "green" },
  { name: "Урок 4", description: "俄语，去，法语，明天，见，英语，对，保加利亚语，阿拉伯语，西班牙语，德语，韩国语，日语，意大利语，邮局，寄，信，银行，取，钱", path: "/lesson-4", accent: "orange" },
  { name: "Урок 5", description: "今天，昨天，星期，几，这，那，这儿，那儿，哪儿，回，学校，学生，再见，对不起，没关系，天安门，北京", path: "/lesson-5", accent: "violet" },
  { name: "Урок 6", description: "工作，身体，老师，请，进，坐，喝，茶，谢谢，不客气", path: "/lesson-6", accent: "coral" },
  { name: "Урок 7", description: "中国，叫，什么，名字，姓，贵姓，请问，学习，认识，谁，高兴，高，贵，中文，书，的", path: "/lesson-7", accent: "blue" },
  { name: "Урок 8", description: "发音，杂志，美国，两，些，张东，个", path: "/lesson-8", accent: "green" },
  { name: "Урок 9", description: "中午，吃，馒头，米饭，要，酒，饺子，食堂，鸡蛋，汤，啤酒，包子，面条，玛丽", path: "/lesson-9", accent: "orange" },
  { name: "Урок 10", description: "买，卖，多少，多，少，块，元，毛，角，分，斤，公斤，水果，苹果，便宜，来，一点儿，别的，橘子，一共，给，找，怎么，吧，还", path: "/lesson-10", accent: "violet" },
  { name: "Урок 11", description: "下午，上午，图书馆，换，小姐，营业员，人民币，一百，一千，一万，美元，日元，欧元，韩元，等，一会儿，先生，数", path: "/lesson-11", accent: "gold" },
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