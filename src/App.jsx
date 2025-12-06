// Thats a React hook, they're regular functions that should only be called inside components
// or other hooks
// We import Fragment to use it as a root element for sibling elements withou needing to create unecessary HTML elements in our code.
import { useState, Fragment } from 'react'
import { EXAMPLES } from './data.js'
import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>

      <CoreConcepts/>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Coloca o onSelect para retornar essa arrow function que retorna a função com
            o parâmetro como VALOR, se não ele executaria a função sem clicar no botão. */}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
  
}

export default App;


