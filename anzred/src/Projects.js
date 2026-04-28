import './global.css';
import Header from './components/Header';
import projects_hero_section from './components/projects_hero_section';


function Projects () {
    return (
        <div className='page' >
            <div className='container' >
                <div className='content' >
                    <projects_hero_section/>
                </div>
            </div>
        </div>
    )
}

export default Projects;