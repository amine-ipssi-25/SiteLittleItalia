import Header from "./components/header";
import Texte from "./components/Texte";
import Presentation from "./components/presentation";
import Menu from "./components/Menu";
import Footer from "./components/footer";
import Event from "./components/event";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Presentation></Presentation>
      <Menu></Menu>
      <Event></Event>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
