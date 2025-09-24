// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }


import Header from "./components/Header/Header.js";
import CoreConcepts from "./components/CoreConcepts.js";
import Examples from "./components/Examples.js";

function App() {


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
