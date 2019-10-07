import React, { useState } from 'react';


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored jso or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue];
}