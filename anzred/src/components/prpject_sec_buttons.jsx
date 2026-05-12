function ProjectSecButton({ project_button_data, isActive, onClick }) {
    return (
        <div
            className={`proj_sec_button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <h2 className="proj_sec_text_inner">{project_button_data.text}</h2>
        </div>
    )
}

export default ProjectSecButton;