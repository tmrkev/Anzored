function CaseItem({caseData}) {
    return (
        <div className="case_item">
            <img className="Case_image" src={caseData.image} alt="img/temporary_image.png" />
            <h3 className="Case_title">{caseData.title}</h3>
            <p className="Case_description">{caseData.description}</p>
        </div>
    );
}

export default CaseItem;
