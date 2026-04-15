import { useState } from "react";

function QuestionItem({ QuestionData }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="Question_item">
            <div className="Question_item_position" onClick={() => setOpen((prev) => !prev)}>
                <div className="Question_item_text_content">
                    <div className="number">{QuestionData.number}</div>
                    <div className="question">{QuestionData.question}</div>
                </div>
                <img
                    className={`Question_item_arrow ${open ? "open" : ""}`}
                    src="/icons/arrow_down.svg"
                    alt=""
                />
            </div>
            {open && <div className="Question_item_answer">{QuestionData.answer}</div>}
            <hr className="line_up" />
        </div>
    );
}

export default QuestionItem;
