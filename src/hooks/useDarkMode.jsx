import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const body = document.body;
    const [darkMode, setDarkMode] = useLocalStorage('toggle');
    useEffect(() => {
        darkmode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')

    }, [darkMode])

    return [darkmode, setDarkMode]
}