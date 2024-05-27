//import react from 'react'
import "./proj.css"
function Projects(){
    return(
        <section>
            <div class="container">
            <header><h1>Projects</h1></header>
            <div class="project-container">
            
            <div class='project'><h2>Employee Management</h2>
            <img src="https://dev-portfolio-template.netlify.app/static/media/one.a3146128.svg" alt="Employee Management" className="img"></img>
            </div>
            <div class='project'><h2>RailWay Tracking</h2>
            <img src="	https://dev-portfolio-template.netlify.app/static/media/two.721a0672.svg" alt="Railway Tracking" className="img"></img>
            </div>
            <div class='project'><h2>Weather App</h2>
            <img src="	https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg" alt="Weather App" className="img"></img>
            </div>
            </div>
            </div>
        </section>
    );
}
export default Projects;