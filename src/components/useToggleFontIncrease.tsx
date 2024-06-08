import React, { useState, useCallback, useEffect } from 'react';

export const useToggleFontIncrease = () => {
    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

    const toggleFontIncrease = useCallback(() => {
        setIsFontUpEnabled(prevState => !prevState);
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontUpEnabled');
        if (storedValue) {
            setIsFontUpEnabled(storedValue === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isFontUpEnabled', String(isFontUpEnabled));
    }, [isFontUpEnabled]);

    return { isFontUpEnabled, toggleFontIncrease };
};

