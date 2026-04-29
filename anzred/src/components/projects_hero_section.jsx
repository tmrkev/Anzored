import React, { useState } from "react";
import ProjectSecButton from "./Project_sec_buttons";
import CaseItem from "./Case__item";
import temporaryImage from '../img/temporary_image.png';


function ProjectSecButtonsRow({ activeFilter, onFilterChange }) {

    const projectSecButtonsData = [
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
            {projectSecButtonsData.map((buttonData) => (
                <ProjectSecButton
                    key={buttonData.id}
                    project_button_data={buttonData}
                    isActive={activeFilter === buttonData.text}
                    onClick={() => onFilterChange(buttonData.text)}
                />
            ))}
        </div>
    )

}

function CasesSection({ activeFilter }) {
    const casesData = [
        { id: 1, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 2, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Бизнес' },
        { id: 3, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Графика VFX' },
        { id: 4, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Графика VFX' },
        { id: 5, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Графика VFX' },
        { id: 6, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Медицина' },
        { id: 7, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Медицина' },
        { id: 8, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Мероприятия' },
        { id: 9, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Мероприятия' },
        { id: 10, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Мероприятия' },
        { id: 11, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Мероприятия' },
        { id: 12, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Мода' },
        { id: 13, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Образование' },
        { id: 14, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Общепит' },
        { id: 15, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Недвижимость' },
        { id: 16, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Недвижимость' },
        { id: 17, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Отели' },
        { id: 18, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Отели' },
        { id: 19, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Отели' },
        { id: 20, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Развлечение' },
        { id: 21, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Спорт' },
        { id: 22, image: temporaryImage, title: 'Реклама пельменей Сааеф', description: 'Юмор' },
    ];

    const filteredCases = activeFilter === 'Все проекты'
        ? casesData
        : casesData.filter(c => c.description === activeFilter);

    return (
        <div className="cases_list">
            {filteredCases.map((caseData) => (
                <CaseItem key={caseData.id} caseData={caseData} />
            ))}
        </div>
    )
}


function ProjectsHeroSection() {
    const [activeFilter, setActiveFilter] = useState('Бизнес');

    return (
        <section className="projects_hero_section">
            <div className="container">
                <div className="content">
                    <h2 style={{ marginTop: '48px' }} className="top_text_section4">Проекты</h2>
                    <div className="projects_sections">
                        <ProjectSecButtonsRow activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                        <div className="cases_setion">
                            <CasesSection activeFilter={activeFilter} />
                            <div className="button_all_projects" style={{ marginBottom: '150px' }}>
                                <a
                                    href="#"
                                    className="all_projects_text"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveFilter('Все проекты');
                                    }}
                                >
                                    Все проекты
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectsHeroSection;




