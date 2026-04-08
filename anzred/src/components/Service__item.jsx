import { useState } from 'react';

function ServiceItem({ ServiceItemData }) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500); // Длительность анимации
    };

    return (
        <div className="Service_item">
            <hr className="line_up" />
            <div className="service_item_content">
                <div className="service_item_text_content">
                    <h2 className="service_number">{ServiceItemData.number}</h2>
                    <h3 className="service_description">{ServiceItemData.description}</h3>
                </div>
                <img
                    src={ServiceItemData.image}
                    alt=""
                    className={`Service_image ${isAnimating ? 'animate' : ''}`}
                    onClick={handleClick}
                />
            </div>
            <hr className="line_up" />
        </div>
    );
}

export default ServiceItem;