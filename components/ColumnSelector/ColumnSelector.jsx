'use client'

import React, { useEffect, useState } from 'react';

const ColumnSelector = ({ columnCount, setColumnCount }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const columnOptions = isMobile ? [1, 2] : [2, 3, 4];

    return (
        <div className="flex items-center justify-end mb-4">
            <span className="mr-2 text-sm font-medium">Columnas:</span>
            <div className="flex space-x-2">
                {columnOptions.map((count) => (
                    <button
                        key={count}
                        className={`px-3 py-1 text-sm font-medium rounded ${columnCount === count
                                ? 'bg-primary-violet text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        onClick={() => setColumnCount(count)}
                    >
                        {count}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColumnSelector;