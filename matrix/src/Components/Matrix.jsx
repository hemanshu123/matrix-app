import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
    const initialColors = Array(9).fill('white');
    const [colors, setColors] = useState(initialColors);
    const [clickSequence, setClickSequence] = useState([]);

    const handleClick = (index) => {
        if (colors[index] === 'white') {
            const newColors = [...colors];
            newColors[index] = 'green';
            setColors(newColors);
            setClickSequence([...clickSequence, index]);
        } else if (index === 8) {
            changeToOrange();
        }
    };

    const changeToOrange = () => {
        let sequenceIndex = 0;
        const interval = setInterval(() => {
            if (sequenceIndex < clickSequence.length) {
                const newColors = [...colors];
                newColors[clickSequence[sequenceIndex]] = 'orange';
                setColors(newColors);
                sequenceIndex++;
            } else {
                clearInterval(interval);
            }
        }, 500);
    };

    return (
        <div className="matrix">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="box"
                    style={{ backgroundColor: color }}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Matrix;
