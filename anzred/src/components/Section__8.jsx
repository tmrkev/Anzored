function Section8() {
    return (
        <section className="Section__7">
            <div className="container">
                <div className="content">
                    <div className="Order_window">
                        <div className="left_side_text">
                            <h3 className="left_side_text_inner_title">ЗАКАЗАТЬ
                            <br />
                            ПРОЕКТ</h3>
                            <h2 className="teft_side_text_inner_subtitle">У вас есть какие-либо вопросы? <br />
                            Оставьте свой номер телефона, и мы <br />
                            вас проконсультируем.</h2>
                        </div>
                        <div className="right_side_input_info">
                            <input className="reg_name" type="text" placeholder="Имя" />
                            <input className="reg_phone" type="tel" placeholder="Номер телефона" />
                            <input type="email" className="reg_email" placeholder="E-mail"/>
                            <div className="button_and_policy">
                            <a href="#" className="send_button">Отправить</a>                                
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section8;