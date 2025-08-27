import componentsImg from "../assets/components.png";
import Header from "../components/Header/Header.js";

export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
