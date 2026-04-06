import CaseItem from "./Case__item";
import temporaryImage from '../img/temporary_image.png';
function CasesSection() {
    const casesData = [
        {id:1, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:2, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:3, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:4, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:5, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:6, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:7, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:8, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
        {id:9, image: temporaryImage, title:'Реклама пельменей Сааеф', description:'Бизнес'},
    ];

    return (
        <div className="cases_list">
            {casesData.map ((caseData) => (
                <CaseItem key={caseData.id} caseData={caseData} />
            ))}
        </div>
    )
}




function Section4() {
    return (
        <section className="Section__4">
            <div className="container">
                <div className="content">
                    <h2 className="top_text_section4">Проекты</h2>
                    <div className="cases_section">
                        <CasesSection />
                        <div className="button_all_projects">
                            <a href="#" className="all_projects_text">Все проекты</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4;
