import ServiceItem from "./Service__item";
function ServicesSection() {
    const servicesData = [
        {id:1, number:'01', description:'Корпоративные фильмы', image:'icons/arrow_looking_right.svg'},
        {id:2, number:'02', description:'Имиджевые ролики', image:'icons/arrow_looking_right.svg'},
        {id:3, number:'03', description:'Презентационные ролики', image:'icons/arrow_looking_right.svg'},
        {id:4, number:'04', description:'Рекламные ролики', image:'icons/arrow_looking_right.svg'},
        {id:5, number:'05', description:'Анимационные ролики', image:'icons/arrow_looking_right.svg'},
        {id:6, number:'06', description:'Предметная съемка', image:'icons/arrow_looking_right.svg'},
        {id:7, number:'07', description:'Онлайн-трансляции', image:'icons/arrow_looking_right.svg'},
        {id:8, number:'08', description:'Отчетные видеоролики', image:'icons/arrow_looking_right.svg'},
        {id:9, number:'09', description:'Представление площадки для предметной съемки', image:'icons/arrow_looking_right.svg'},
        {id:10, number:'10', description:'Покупка лицензионного программного обеспечения', image:'icons/arrow_looking_right.svg'},
        {id:11, number:'11', description:'Установка программного обеспечения', image:'icons/arrow_looking_right.svg'},       
    ];


    return (
        <div className="srvices_list">
            {servicesData.map ((ServiceItemData) => (
                <ServiceItem key={ServiceItemData.id} ServiceItemData={ServiceItemData} />

            ))}
        </div>
    )
}












function Section5() {
    return(
        <section className="Section__5">
            <div className="container">
                <div className="content">
                    <div className="top_text_section5_content">
                        <h2 className="top_text_section5">Услуги</h2>
                        <p className="section5_subtitle">Создаем магию на экране!</p>                        
                    </div>
                    <ServicesSection />
                </div>
            </div>
        </section>
    );
}

export default Section5;