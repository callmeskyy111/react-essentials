import reactImg from "./assets/react-core-concepts.png";
import compImg from "./assets/components.png";

const reactDesc = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const desc = reactDesc[getRandomInt(2)]; // Dynamically outputting the var./txt.

  return (
    <header>
      <img src={reactImg} alt="Stylized-Atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building-block"
              image={compImg}
            />
            <CoreConcept title="Props" description="" image=""/>
            <CoreConcept title="" description="" image=""/>
            <CoreConcept title="" description="" image=""/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
