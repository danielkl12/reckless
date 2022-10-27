
import './App.css';
import About from "./pages/About";
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Video from './pages/Video';
import Music from './pages/Music';
import Footer from './pages/Footer';

import portfolioData from './data';
import Photos from './pages/Photos'
import { Component, Tabs } from 'react';



import './App.css';
// import ButtonAppBar from './pages/'
// import TitlebarGridList from './pages/Cards'
import tileData from './tileData';
// import MyButton from './components/Footer'



class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window. innerWidth});
  };
  
  render() {
      const {width} = this.state;
      const isMobile = width <= 500;

  if(isMobile) {
    return(
    <Tabs>
      {/* <ButtonAppBar /> */}
        
        {/* <MyButton/> */}
        <Navbar portfolioData = {portfolioData}/>
      <About portfolioData = {portfolioData}/>
      <Contact portfolioData = {portfolioData}/>
      <Photos portfolioData = {portfolioData}/>
      {/* <TitlebarGridList tileData = {tileData}/> */}
      <Music portfolioData = {portfolioData}/>
      <Video portfolioData = {portfolioData}/>
      <Footer portfolioData = {portfolioData}/>
    </Tabs>

        )

    }else {
  return (
    



    <div className="App">
      {/* <ButtonAppBar /> */}
        
        {/* <MyButton/> */}
      <Navbar portfolioData = {portfolioData}/>
      <About portfolioData = {portfolioData}/>
      <Contact portfolioData = {portfolioData}/>
      <Photos portfolioData = {portfolioData}/>
      {/* <TitlebarGridList tileData = {tileData}/> */}
      <Music portfolioData = {portfolioData}/>
      <Video portfolioData = {portfolioData}/>
      <Footer portfolioData = {portfolioData}/>

    </div>
  );
  }
}
}

export default App;
