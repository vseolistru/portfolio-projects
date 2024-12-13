import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import menu from './image/menu.svg'

const MobileNavigation = () => {

    const [mobileSideBar, setMobile] = useState('portfolio__navigation-mobile-item')
    const [mobileDisplay, setDisplay] = useState('mobile-display')
    const ref = useRef(null)

    //hide side bar by outside click
    useEffect(()=>{
        function handleClick (e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setMobile('mobile-display')
            }
        }
        document.addEventListener("onClick", handleClick)
        return ()=>{
            document.removeEventListener("onClick", handleClick)
        }
    },[ref])

    const handlerMenu = () => {
        if (mobileDisplay === 'mobile-display') {
            setDisplay('portfolio__navigation-mobile-item')

        }
        else {
            setDisplay('mobile-display')
        }

    }
    return (
        <div className='portfolio__navigation_mobile' ref={ref}>
            <img src={menu} onClick={handlerMenu} alt='mobile'/>
            <div className={mobileDisplay}>
                <Link to='/' onClick={handlerMenu}>Главная</Link>
                <Link to='/england_league' onClick={handlerMenu}>АПЛ</Link>
                <Link to='/spain_league' onClick={handlerMenu}>ЛаЛига</Link>
                <Link to='/germany_league' onClick={handlerMenu}>БундесЛига</Link>
                <Link to='/italy_league' onClick={handlerMenu}>СерияА</Link>
                <Link to='/france_league' onClick={handlerMenu}>Лига1Фр</Link>
                <Link to='/portugal_league' onClick={handlerMenu}>Примейра</Link>
                <Link to='/championship_league' onClick={handlerMenu}>Чемпионшип</Link>
                <Link to='/segundo_league' onClick={handlerMenu}>Сегунда</Link>
                <Link to='/germany_b_league' onClick={handlerMenu}>Бундес2</Link>
                <Link to='/italy_b_league' onClick={handlerMenu}>СерияБ</Link>
                <Link to='/holland_league' onClick={handlerMenu}>Холландия</Link>
                <Link to='/france_b_league' onClick={handlerMenu}>Лига2Фр</Link>
            </div>
        </div>
    );
};

export default MobileNavigation;