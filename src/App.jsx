import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
//import { CORE_CONCEPTS } from "./data";
import { CORE_CONCEPTS, EXAMPLES } from "./data.updated";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedBtn) {
    // selectedBtn => 'components' / 'jsx'/ 'props' / 'state'
    // if(){} check
    console.log(`selectedTopic: ${selectedTopic} ✅`);
    setSelectedTopic(selectedBtn);
  }

  console.log(`App Component rendering.. ☑️`);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* OUTPUTTING LIST-DATA DYNAMICALLY */}
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return <CoreConcept {...concept} key={concept.title} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* CHILDREN PROPS. */}
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
          </menu>
          {/* DYNAMIC CONTENT */}
          {/* RENDERING CONDITIONALLY */}
          {!selectedTopic ? (
            <h1>👨🏻‍💻 PLEASE SELECT A TOPIC ⚛️</h1>
          ) : (
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
