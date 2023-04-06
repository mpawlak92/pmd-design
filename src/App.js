import Section from './components/Section/Section'
import Menu from './components/Menu/Menu'
function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Section id="#" name="heroImg" />
        <Section id="projects" name="projects" />
        <Section id="about" name="about" />
        <Section id="servicees" name="services" />
        <Section id="contact" name="contact" />
      </div>
    </>
  )
}

export default App
