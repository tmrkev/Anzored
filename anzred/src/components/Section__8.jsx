function Section8() {
    return (
        <section className="Section__8">
            <div className="container">
                <div className="content">
                    <div className="Order_window">
                        <div className="left_side_text">
                            <h3 className="left_side_text_inner_title">ЗАКАЗАТЬ<br />ПРОЕКТ</h3>
                            <h2 className="teft_side_text_inner_subtitle_DESK">
                            </h2>
                            <h2 className="teft_side_text_inner_subtitle">
                                У вас остались вопросы?<br />
                                Оставьте свой номер, и мы Вас<br />
                                проконсультируем.
                            </h2>
                        </div>
                        <div className="right_side_input_info">
                            <div className="EnterYourData">
                                <input className="reg_name" type="text" placeholder="Имя" />
                                <label className="phone_input_group">
                                    <input className="reg_phone" type="tel" placeholder="Введите номер" />
                                </label>
                                <input type="email" className="reg_email" placeholder="E-mail" />
                            </div>
                            <button type="button" className="send_button">Отправить</button>
                            <label className="consent_block">
                                <input type="checkbox" className="consent_checkbox" />
                                <span  className="consent_text" >Я согласен <a href="#" className="consent_link"> с обработкой своих персональных данных и договором публичной оферты.</a> </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section8;