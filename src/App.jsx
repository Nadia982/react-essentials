import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/Header/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  //5 MIN 26 SECONDS
  // const stateArray = useState("Please click a button"). The line two lines below is a destructured version of this line.
  // the names "selectedTopic, setSelectedTopic" could be any names, but the names below reflect standard naming convention for useState.
  // the second element in the array that we get back from useState will always be a function provided by React that can be used to update this state.
  // the function in the second element of the array returned by useState will also tel React that the component function must be executed again.
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    //selectedButton should be one of: "components", "JSX", "props" or "state", depending on which button is selected
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Shorter, alternative prop syntax below */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
