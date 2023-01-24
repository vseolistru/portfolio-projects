import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='portfolio__navigation'>
            <div className='portfolio__navigation-item'>
                <Link to='/'>Главная</Link>
                <Link to='/testing'>Тестирование</Link>
                <Link to='/development'>Разработка</Link>
                <Link to='/tools'>Инструменты</Link>
                {/*<Link to='/contact'>Контакты</Link>*/}

            </div>
        </div>
    );
};

export default Navigation;