import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='portfolio__navigation'>
            <div className='portfolio__navigation-item'>
                <Link to='/'>Главная</Link>
                <Link to='/england_league'>АПЛ</Link>
                <Link to='/spain_league'>ЛаЛига</Link>
                <Link to='/germany_league'>БундесЛига</Link>
                <Link to='/italy_league'>СерияА</Link>
                <Link to='/france_league'>Лига1Фр</Link>
                <Link to='/portugal_league'>Примейра</Link>
                <Link to='/championship_league'>Чемпионшип</Link>
                <Link to='/segundo_league'>Сегунда</Link>
                <Link to='/germany_b_league'>Бундес2</Link>
                <Link to='/italy_b_league'>СерияБ</Link>
                <Link to='/france_b_league'>Лига2Фр</Link>
            </div>
        </div>
    );
};

export default Navigation;