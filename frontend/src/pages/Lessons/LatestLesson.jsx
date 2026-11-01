import React from "react";
import First100Words from "../Italian/First100Words";
import { latestLessonVocabulary } from "./lessonData";

const LatestLesson = () => <First100Words lessonVocabulary={latestLessonVocabulary} />;

export default LatestLesson;