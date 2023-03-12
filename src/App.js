import Menu from './components/Menu/Menu'
import Section from './components/Section/Section'
function App() {
  return (
    <div className="App">
      <Menu />
      <Section id="#" name="heroImg" />
      <Section id="projects" color="red" />
      <Section id="about" />
      <Section id="contact" color="red" />
    </div>
  )
}

export default App
