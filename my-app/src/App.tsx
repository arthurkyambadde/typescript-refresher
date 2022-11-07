import "./App.css";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Counter from "./Components/state/Counter";
import LoggedIn from "./Components/state/LoggedIn";
import User from "./Components/state/User";
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

      {/* events as props */}
      <Button
        handleClick={(event) => {
          console.log("button has been clicked", event);
        }}
      />

      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />

      {/* styles props */}
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      {/* // use statehook */}

      <LoggedIn />

      {/* use state with future */}

      <User />

      {/* use reducer hook and usereducer strict */}
      <Counter />
    </div>
  );
}

export default App;
