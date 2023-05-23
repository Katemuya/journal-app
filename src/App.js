import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import EntriesSection from "./components/EntriesSection/EntriesSection.js";
import { useState } from "react";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    newEntry.date = date;
    newEntry.id = uid();

    setEntries([newEntry, ...entries]);
    console.log(newEntry);
  }
  return (
    <>
      <Header></Header>
      <div class="content">
        <Form onAddEntry={handleAddEntry}></Form>
        <EntriesSection entries={entries}></EntriesSection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
