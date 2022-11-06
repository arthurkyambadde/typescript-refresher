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
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
