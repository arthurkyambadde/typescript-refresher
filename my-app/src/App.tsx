import "./App.css";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";

function App() {
  const personName = {
    first: "Jimmy",
    last: "Ssonko",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      {/* variable prop */}
      <Greet name="Arthur" messageCount={20} isLoggedIn={false} />

      {/* object prop */}
      <Person name={personName} />

      {/* Array prop */}
      <PersonList names={nameList} />

      <Status status="loading" />
      {/* child props */}

      <Heading>Placeholder text</Heading>

      {/* passing a component as a prop */}
      <Oscar>
        <Heading>Oscar goes to dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
