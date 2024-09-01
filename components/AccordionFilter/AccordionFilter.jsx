'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionFilter = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mb-4 max-lg:hidden">
            <button
                className="flex justify-between items-center w-full py-2 px-4 bg-primary-gray hover:bg-gray-300 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && <div className="mt-2">{children}</div>}
        </div>
    );
};

export default AccordionFilter;