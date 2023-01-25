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
        document.addEventListener("mousedown", handleClick)
        return ()=>{
            document.removeEventListener("mousedown", handleClick)
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
                <Link to='/'>Главная</Link>
                <Link to='/testing'>Тестирование</Link>
                <Link to='/development'>Разработка</Link>
                <Link to='/tools'>Инструменты</Link>
                {/*<Link to='/contact'>Контакты</Link>*/}

            </div>
        </div>
    );
};

export default MobileNavigation;