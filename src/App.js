import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <FlashCard />
    </div>
  );
}
const DataContainer = [
  { id: 1, question: "What Language is React based on?", awnser: "JavaScript" },
  {
    id: 2,
    question: "What are the bulding blocks of React apps?",
    answer: "Componenets",
  },
  {
    id: 3,
    question:
      "Whats the name of the syntax we use to describe a UI in React app?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an element that is completely sunchronised with state?",
    answer: "Controlled element",
  },
];
function FlashCard() {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleClick(id) {
    setSelectedItem(id !== selectedItem ? id : null);
  }
  return (
    <div className="flashcard">
      {DataContainer.map((items) => (
        <div
          key={items.id}
          onClick={() => handleClick(items.id)}
          className={items.id === selectedItem ? "selected" : ""}
        >
          <p>{items.id === selectedItem ? items.answer : items.question}</p>
        </div>
      ))}
    </div>
  );
}
