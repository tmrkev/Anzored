import './global.css';
import Header from './components/Header';
import Modal_all_training_programs from './components/CoursesHeroSection';

function Courses () {
    return (
        <div className='page' >
            <div className='container' >
                <div className='content' >
                    <Modal_all_training_programs style={{ marginBottom: '0px' }} />
                </div>
            </div>
        </div>
    )
}

export default Courses;