import detectBrowserLanguage from 'detect-browser-language';

// i18n
import { useTranslation } from 'react-i18next';

const ComponentLocation = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {detectBrowserLanguage()}
            <h1>{t('description.part1')}</h1>
            <button type="button" onClick={() => changeLanguage('es')}>Click ES</button>
            <button type="button" onClick={() => changeLanguage('en')}>Click EN</button>
        </>);
};

export default ComponentLocation;