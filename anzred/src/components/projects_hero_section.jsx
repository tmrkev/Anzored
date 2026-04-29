import ProjectSecButton from "./Project_sec_buttons";
import CaseItem from "./Case__item";
import temporaryImage from '../img/temporary_image.png';


function ProjectSecButtonsRow() {

    const project_sec_buttonsData = [
        { id: 1, text: 'Бизнес' },
        { id: 2, text: 'Графика VFX' },
        { id: 3, text: 'Медицина' },
        { id: 4, text: 'Мероприятия' },
        { id: 5, text: 'Мода' },
        { id: 6, text: 'Образование' },
        { id: 7, text: 'Общепит' },
        { id: 8, text: 'Недвижимость' },
        { id: 9, text: 'Отели' },
        { id: 10, text: 'Развлечение' },
        { id: 11, text: 'Спорт' },
        { id: 12, text: 'Юмор' }
    ];

    return (
        <div className="project_sec_buttons_row">
            {project_sec_buttonsData.map((buttonData) => (
                <ProjectSecButton key={buttonData.id} project_button_data={buttonData} />
            ))}
        </div>
    )

}

function CasesSection() {
    const casesData = [
        { id: 1, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 2, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 3, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 4, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 5, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 6, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 7, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 8, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 9, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 10, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 11, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 12, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 13, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 14, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 15, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
    ];

    return (
        <div className="cases_list">
            {casesData.map((caseData) => (
                <CaseItem key={caseData.id} caseData={caseData} />
            ))}
        </div>
    )
}


function ProjectsHeroSection() {

    return (
        <section className="projects_hero_section">
            <div className="container">
                <div className="content">
                    <h2 style={{ marginTop: '48px' }} className="top_text_section4">Проекты</h2>
                    <div className="projects_sections">
                        <ProjectSecButtonsRow />
                        <div className="cases_setion">
                            <CasesSection />
                            <div className="button_all_projects" style={{ marginBottom: '150px' }}>
                                <a href="#" className="all_projects_text">Все проекты</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectsHeroSection;




