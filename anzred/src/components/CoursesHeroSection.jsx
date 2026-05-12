import React, { useState } from "react";
import ProjectSecButton from "./Project_sec_buttons";

function ProjectSecButtonsRow({ activeFilter, onFilterChange }) {

    const project_sec_buttonsData = [
        { id: 1, text: 'Монтажное мастерство' },
        { id: 2, text: 'Операторское мастерство' },
        { id: 3, text: 'Графический дизайн' },
        { id: 4, text: '3D моделирование и анимация' },
        { id: 5, text: 'Фотограф' },
        { id: 6, text: 'Мобильная съёмка и монтаж' }
    ];

    return (
        <div className="project_sec_buttons_row">
            {project_sec_buttonsData.map((buttonData) => (
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

function Modal_all_training_programs () {
    const [activeFilter, setActiveFilter] = useState('Монтажное мастерство');

    return (
        <div className="modal_all_training_programs">
            <div className="modal_content">
                <div className="modal_title">
                    Все программы обучения
                </div>
                <div className="programs_list">
                    <ProjectSecButtonsRow activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                </div>
            </div>
        </div>
    )
}



export default Modal_all_training_programs;