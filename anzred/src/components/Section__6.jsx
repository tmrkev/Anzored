import CardMember from "./Card_member";
import Member_image from '../img/Member_image.svg';

function Card_members_roster() {
    const CardsData = [
        { id: 1, image: Member_image, personne: 'Анзор Умаров', position: 'Генеральный директор', },
        { id: 2, image: Member_image, personne: 'Ваха Осмаев', position: 'Главный оператор', },
        { id: 3, image: Member_image, personne: 'Умар Байсагуров', position: 'Менеджер студии “Anzored”', },
        { id: 4, image: Member_image, personne: 'Ислам Нанаев', position: 'Режиссер монтажа', }
    ];


    return (
        <div className="Members_list">
            {CardsData.map((CardMemberData) => (
                <CardMember key={CardMemberData.id} CardMemberData={CardMemberData} />
            ))}
        </div>
    )
}


function Section6() {
    return (
        <section className="Section__6">
            <div className="container">
                <div className="content">
                    <div className="top_text_section6_content">
                        <h2 className="top_text_section6">
                            Команда
                        </h2>
                        <div className="arrows_container_section6">
                            <img src="/icons/left.svg" alt="" className="arrow-left" />
                            <img src="/icons/right.svg" alt="" className="arrow-right" />
                        </div>
                    </div>
                    <div className="Members_section">
                        <Card_members_roster/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section6;