import './global.css';
import CoursesHeroSection from './components/CoursesHeroSection';
import CoursesFilter from './components/CoursesFilter.jsx';

function Courses() {
    return (
        <div className='page' >
            <div className='container' >
                <div className='content' >
                    <CoursesHeroSection style={{ margin: '0px' }} />
                    <div className="courses-layout">
                        <CoursesFilter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;