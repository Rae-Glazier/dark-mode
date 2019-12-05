import { useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');

    useEffect( () => {
        
        const className = 'dark-mode';
        const element = window.document.body;

        if (darkMode) {
            element.classList.add(className);
        } else {
            element.classList.add(className);
        }
    }, [darkMode] );

    return [darkMode, setDarkMode];
};