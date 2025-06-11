import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"; // styles

const reactDesc = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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
