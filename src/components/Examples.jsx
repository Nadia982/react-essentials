import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "../components/Header/TabButton.jsx";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    function handleSelect(selectedButton) {
      //selectedButton should be one of: "components", "JSX", "props" or "state", depending on which button is selected
      setSelectedTopic(selectedButton);
    }
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }

  return (
    <section id="examples">
    <h2>Examples</h2>
    <menu>
                  
      <TabButton isSelected = {selectedTopic === "components"} onSelect={() => handleSelect("components")}>
        Components
      </TabButton>
      <TabButton isSelected = {selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton isSelected = {selectedTopic === "props"}  onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton isSelected = {selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
  {tabContent}
  </section>
  )
}

export default Examples