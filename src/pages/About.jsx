import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function About() {
    
    return (
      <div id="about">
        <Navbar />
        <Sidebar />
  
        <div className="intro">
            <h1>Hi, I am Nathi. 👋</h1>
            <h3>I've built this Kanban to help you keep track of your tasks.</h3>
            <p>In case you want to check out the code, feel free to have a look at my GitHub repository. It is supposed to help you keep track of your tasks. Feel free to add new tasks and manage them by state. Don't forget to tackle the most important ones first. For that, please take note of their priority label and due date. Have fun!</p>
            <button className="secondary-button"><a href="https://github.com/nathidaum/kanban-board-app">See code</a></button>
        </div>
  
        <Footer />
      </div>
    );
  }
  
  export default About;