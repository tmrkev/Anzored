import QuestionItem from "./Question_item"


function QuestionsGrid() {
    const QuestionsData = [
        {
            id: 1,
            number: '1.',
            question: 'Сколько стоит обучение?',
            answer: 'Цена зависит от выбранного вами направления. Определить подходящий курс и узнать его стоимость можно здесь. ',
        },
        {
            id: 2,
            number: '2.',
            question: 'Сроки выполнения заказа?',
            answer: 'Это зависит от многих факторов: продолжительность съемок, хронометраж готового видео, сколько локаций использовано и многое другое. ',
        },
        {
            id: 3,
            number: '3.',
            question: 'Есть ли возможность вносить правки после завершения монтажа?',
            answer: 'Да, мы предоставляем возможность внести две правки бесплатно, а последующие за определённую плату.',
        },
        {
            id: 4,
            number: '4.',
            question: 'Как записаться на курс?',
            answer: 'Для этого необходимо перейти в раздел «Курсы» , выбрать направление и заполнить форму.',
        },
        {
            id: 5,
            number: '5.',
            question: 'Со скольки лет можно записаться на обучение?',
            answer: 'На обучение может прийти любой желающий в возрасте 14 лет и старше.',
        },
    ];

    return (
        <div className="QuestionsGrid">
            {QuestionsData.map((QuestionData) => (
                <QuestionItem key={QuestionData.id} QuestionData={QuestionData} />
            ))}
        </div>
    )
}




function Section7() {
    return (
        <section className="Section__7">
            <div className="container">
                <div className="content">
                    <h2 className="top_text_section4">Часто задаваемые вопросы</h2>
                    <QuestionsGrid />
                </div>
            </div>
        </section>
    )
}

export default Section7;