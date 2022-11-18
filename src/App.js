
import './App.css';
import About from "./pages/About";
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Video from './pages/Video';
import Music from './pages/Music';
import Footer from './pages/Footer';
import Testimonials from './pages/Testimonials';
import portfolioData from './data';
import Photos from './pages/Photos'
import { Component } from 'react';




import './App.css';
// import ButtonAppBar from './pages/'
// import TitlebarGridList from './pages/Cards'

// import MyButton from './components/Footer'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  
  render() {
  return (
    <div className="App">
      <Navbar portfolioData = {portfolioData}/>
      <About portfolioData = {portfolioData}/>
      <Contact portfolioData = {portfolioData}/>
      <Testimonials portfolioData = {portfolioData}/>
      <Photos portfolioData = {portfolioData}/>
      <Music portfolioData = {portfolioData}/>
      <Video portfolioData = {portfolioData}/>
      <Footer portfolioData = {portfolioData}/>

    </div>
  );
  }
}

export default App;
