import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import EntriesSection from "./components/EntriesSection/EntriesSection.js";

import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    isFavorite: false,
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    isFavorite: false,
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    isFavorite: false,
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    isFavorite: false,
    notes: "My React-ion when I learned about React: 😍",
  },
];

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    newEntry.date = date;
    newEntry.id = uid();
    newEntry.isFavorite = false;

    setEntries([newEntry, ...entries]);
    console.log(newEntry);
  }

  function handleToggleFavorite(id) {
    console.log("Handle toggle favorite " + id);
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }
  return (
    <>
      <Header></Header>
      <div class="content">
        <Form onAddEntry={handleAddEntry}></Form>
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        ></EntriesSection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
