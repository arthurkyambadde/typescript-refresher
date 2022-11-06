import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";

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
    </div>
  );
}

export default App;
