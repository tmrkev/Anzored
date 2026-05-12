import './global.css';
import ProjectsHeroSection from './components/projectsHeroSection';


function Projects() {
    return (
        <div className='page' >
            <div className='container' >
                <div className='content' >
                    <ProjectsHeroSection />
                </div>
            </div>
        </div>
    )
}

export default Projects;