import './global.css';
import Header from './components/Header';
import CoursesHeroSection from './components/CoursesHeroSection';

function Courses() {
    return (
        <div className='page' >
            <div className='container' >
                <div className='content' >
                    <CoursesHeroSection style={{ margin: '0px' }} />
                </div>
            </div>
        </div>
    )
}

export default Courses;