import CoreConcept from "../components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/>)}
          {/* {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} title={item.title} description={item.description} image={item.image}/>)} */}
         </ul>
        </section>
  )
}

export default CoreConcepts