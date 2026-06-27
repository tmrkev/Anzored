import React, { useState } from 'react';

const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);



    const handleMinChange = (event) => {
        const value = Math.min(Number(event.target.value), maxVal - 1);
        setMinVal(value);
        onChange({ min: value, max: maxVal });
    }

    const handleMaxChange = (event) => {
        const value = Math.max(Number(event.target.value), minVal + 1);
        setMaxVal(value);
        onChange({ min: minVal, max: value });
    }

    const percent1 = ((minVal - min) / (max - min)) * 100;
    const percent2 = ((maxVal - min) / (max - min)) * 100;

    return (
        <div className='multi-range-slider-container'>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={handleMinChange}
                className='thumb thumb--left'
                style={{ zindex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={handleMaxChange}
                className='thumb thumb--right'
            />

            <div className='slider'>
                <div className='slider__track'></div>
                <div
                    className='slider__range'
                    style={{ left: `${percent1}%`, width: `${percent2 - percent1}%` }}
                />

            </div>
        </div>


    );
};


const CoursesFilter = () => {
    const [leadringType, setLarningType] = useState('online')
    const [difficulty, setDifficulty] = useState('base')
    const [duration, setDuration] = useState([1, 24])

    return (
        <div className='courses-filter'>
            <div className='filter-section'>
                <div className='filter-title'>Тип обучения на платформе</div>
                <div className="radio-group">
                    <label className="radio-label">
                        <input
                            type="radio"
                            name='learningType'
                            value='online'
                            checked={leadringType === 'online'}
                            onChange={() => setLarningType('online')}
                        />
                        <span className='radio-custom'></span>
                        Онлайн
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name='learningType'
                            value='offline'
                            checked={leadringType === 'offline'}
                            onChange={() => setLarningType('offline')}
                        />
                        <span className='radio-custom'></span>
                        Офлайн
                    </label>
                </div>
            </div>
            <div className='filter-section'>
                <div className='filter-title'>Уровень сложности</div>
                <div className="radio-group">
                    <label className='radio-label'>
                        <input
                            type="radio"
                            name='difficulty'
                            value='base'
                            checked={difficulty === 'base'}
                            onChange={() => setDifficulty('base')}
                        />
                        <span className="radio-custom"></span>
                        Базовый
                    </label>
                    <label className='radio-label'>
                        <input
                            type="radio"
                            name='difficulty'
                            value='bpro'
                            checked={difficulty === 'pro'}
                            onChange={() => setDifficulty('pro')}
                        />
                        <span className="radio-custom"></span>
                        pro
                    </label>
                </div>
            </div>

            <div className='filter-divider'></div>

            <div className="filter-section">
                <div className="filter-title">Длительность</div>
                <div className="duration-text">От {duration[0]} до {duration[1]} месяцев</div>
                <div className="range-slider-wrapper">
                    <MultiRangeSlider min={1} max={24} onChange={setDuration} />
                </div>
            </div>
        </div>
    )

}

export default CoursesFilter;