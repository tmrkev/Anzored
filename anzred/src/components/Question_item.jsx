function QuestionItem({ QuestionData }) {
    return (
        <div className="Question_item">
            <div className="Question_item_text_content">
                <div className="number">{QuestionData.number}</div>
                <div className="question">{QuestionData.question}</div>                
            </div>
            <img src={QuestionData.image} alt="{QuestionData.image}" />
        </div>
        <hr className="line_up" />
    )
}

export default QuestionItem;