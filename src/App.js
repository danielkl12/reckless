
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
  this.state = {
  isDesktop: false
};
this.updatePredicate = this.updatePredicate.bind(this);
}

componentDidMount = () => {
      this.updatePredicate();
window.addEventListener("resize", this.updatePredicate);
  }

componentWillUnmount() {
  window.removeEventListener("resize", this.updatePredicate);
  }

updatePredicate() {
  this.setState({ isDesktop: window.innerWidth > 900,});
  }
  
  render() {
    const isDesktop = this.state.isDesktop;
  return (
    <div>
    { isDesktop ? (
    <div className="App">
      <Navbar portfolioData = {portfolioData}/>
      <About portfolioData = {portfolioData}/>
      <Contact portfolioData = {portfolioData}/>
      <Testimonials portfolioData = {portfolioData}/>
      {/* <Gallery portfolioData = {portfolioData}/> */}
      <Photos portfolioData = {portfolioData}/>
      <Music portfolioData = {portfolioData}/>
      <Video portfolioData = {portfolioData}/>
      <Footer portfolioData = {portfolioData}/>
      </div>
    ) : (
      <div className="mobile">
      <Navbar portfolioData = {portfolioData}/>
      <About portfolioData = {portfolioData}/>
      <Contact portfolioData = {portfolioData}/>
      <Testimonials portfolioData = {portfolioData}/>
      <Music portfolioData = {portfolioData}/>
      {/* <Gallery portfolioData = {portfolioData}/> */}
      <Video portfolioData = {portfolioData}/>
      <Footer portfolioData = {portfolioData}/>

      </div>
    )}
    </div>
    
    
  );
  }
}

export default App;


<header id="home"/>
                