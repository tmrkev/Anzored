function ProjectSecButton({ project_button_data, isActive, onClick }) {
    return (
        <a 
            href="#" 
            className={`proj_sec_button ${isActive ? 'active' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                if (onClick) onClick();
            }}
        >
           {project_button_data.text}
        </a>
    )
}

export default ProjectSecButton;