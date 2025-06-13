import { useState } from "react";
import { EXAMPLES } from "../data.updated";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedBtn) {
    // selectedBtn => 'components' / 'jsx'/ 'props' / 'state'
    // if(){} check
    console.log(`selectedTopic: ${selectedTopic} ✅`);
    setSelectedTopic(selectedBtn);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttonsContainer="menu" // Setting Component-Types dynamically
        // <menu></menu>
        buttons={
          <>
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}>
              Components
            </TabButton>
            {/* EVENTS */}
            <TabButton
              onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}>
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}>
              Props.
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}>
              State
            </TabButton>
          </>
        }>
        {/* DYNAMIC CONTENT ✨*/}
        {/* RENDERING CONDITIONALLY ⁉️*/}
        {!selectedTopic ? (
          <h1>
            <i>👨🏻‍💻 PLEASE SELECT A TOPIC ⚛️</i>
          </h1>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}

export default Examples;
