import React from 'react';

export default function TimeUnit({ value, label }) {
    const formattedValue = String(value).padStart(2, '0');
    return (
        <div className="time-unit">
            <span>{formattedValue}</span>
            <small>{label}</small>
        </div>
    );
}
