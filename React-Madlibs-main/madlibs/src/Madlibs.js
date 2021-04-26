import React, { useState } from "react";
import Form from "./Form";
import Story from "./Story";
import TopicSelectionForm from "./TopicSelectionForm";

const Madlibs = () => {
  const initialState = { adj1: "", noun1: "", noun2: "" };
  const [selectionShows, setSelectionShows] = useState(true);
  const [storyShows, setStoryShows] = useState(false);
  const [words, setWords] = useState(initialState);
  const [topic, setTopic] = useState("");

  const addNewWords = ({ adj1, noun1, noun2 }) => {
    setWords({ adj1, noun1, noun2 });
    setStoryShows(true);
  };

  const restart = () => {
    setStoryShows(false);
    setSelectionShows(true);
  };

  const submitChoice = (selectedTopic) => {
    setTopic(selectedTopic);
    setSelectionShows(false);
  };

  return (
    <>
      {selectionShows && <TopicSelectionForm submitChoice={submitChoice} />}
      {!storyShows && !selectionShows && <Form addNewWords={addNewWords} />}
      {storyShows && (
        <Story
          topic={topic}
          restart={restart}
          adj1={words.adj1}
          noun1={words.noun1}
          noun2={words.noun2}
        />
      )}
    </>
  );
};

export default Madlibs;