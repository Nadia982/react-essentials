import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  // const stateArray = useState("Please click a button"). The line two lines below is a destructured version of this line.
  // the names "selectedTopic, setSelectedTopic" could be any names, but the names below reflect standard naming convention for useState.
  // the second element in the array that we get back from useState will always be a function provided by React that can be used to update this state.
  // the function in the second element of the array returned by useState will also tel React that the component function must be executed again.

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
