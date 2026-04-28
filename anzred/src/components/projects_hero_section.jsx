import project_sec_buttons from "./prpject_sec_buttons";



function project_sec_buttons_row () {

    const project_sec_buttonsData = [
        {id:1,text:'Бизнес'},
        {id:2,text:'Графика VFX'},
        {id:3,text:'Медицина'},
        {id:4,text:'Мероприятия'},
        {id:5,text:'Мода'},
        {id:6,text:'Образование'},
        {id:7,text:'Общепит'},
        {id:8,text:'Недвижимость'},
        {id:9,text:'Отели'},
        {id:10,text:'Развлечение'},
        {id:11,text:'Спорт'},
        {id:12,text:'Юмор'},
    ];

    return (
        <div className="project_sec_buttons_row">
            {project_sec_buttonsData.map((project_sec_buttonsData) => (
                <project_sec_buttons key={project_sec_buttonsData.id} project_sec_buttonsData={project_sec_buttonsData} />
            ))}
        </div>
    )

}




function projects_hero_section() {

    return (
        <section className="projects_hero_section">
            <div className="container">
                <div className="content">
                    <h2 className="top_text_section4">Проекты</h2>
                    <div className="projects_sections">
                        {}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default projects_hero_section;




