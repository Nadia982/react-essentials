import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core", "Essential"];

function getRandomInt() {
  return Math.floor(Math.random() * reactDescriptions.length);
}

export default function Header() {
    const description = reactDescriptions[getRandomInt()];
    return (
      <header>
        <img src={reactImg} alt="stylised atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
  
