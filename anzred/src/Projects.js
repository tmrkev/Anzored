import './global.css';
import Header from './components/Header';
import ProjectsHeroSection from './components/Projects_hero_section';


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