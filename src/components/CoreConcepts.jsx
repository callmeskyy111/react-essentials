import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.updated";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      {/* OUTPUTTING LIST-DATA DYNAMICALLY 📃*/}
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept {...concept} key={concept.title} />;
        })}
      </ul>
    </section>
  );
}

export default CoreConcepts;
