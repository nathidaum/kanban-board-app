import "../pages/pages.css";

function About() {
    
    return (
      <div id="about">
        <div className="intro">
            <h1>Hi, I am Nathi. 👋</h1>
            <h3>I've built this Kanban to help you keep track of your tasks.</h3>
            <p>Feel free to add new tasks and manage them by state. Don't forget to tackle the most important ones first. For that, please take note of their priority label and due date. Have fun!</p>
            <button><a href="https://github.com/nathidaum/kanban-board-app">See code</a></button>
        </div>
      </div>
    );
  }
  
  export default About;