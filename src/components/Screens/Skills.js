import React, { useState} from 'react';
import {skills} from "../../stub";
import {Helmet} from "react-helmet-async";
import SideBar from "../SideBar";
import PriceChecker from "../PriceChecker";
import {useDimension} from "../hook/WindowDimension";

const Skills = () => {


    const [hidden, setHidden] = useState('hide-content')
    const [hiddenOne, setHiddenOne] = useState('hide-content')
    const [hiddenTwo, setHiddenTwo] = useState('hide-content')
    const [hiddenFigma, setHiddenFigma] = useState('hide-content')
    const [hiddenSix, setHiddenSix] = useState('hide-content')
    const [hiddenSeven, setHiddenSeven] = useState('hide-content')

    const [hiddenBlock, setHiddenBlock] = useState('Показать скрытый блок')
    const [hiddenBlockTwo, setHiddenBlockTwo] = useState('Показать скрытый блок')
    const [hiddenBlockLast, setHiddenBlockLast] = useState('Показать скрытый блок')
    const [hiddenBlockFigma, setHiddenBlockFigma] = useState('Показать скрытый блок')
    const [hiddenBlockSix, setHiddenBlockSix] = useState('Показать скрытый блок')
    const [hiddenBlockSeven, setHiddenBlockSeven] = useState('Показать скрытый блок')

    const dimension = useDimension()

    const handleShowOne = () => {
        if (hidden === 'hide-content') {
            setHidden('show-content1')
            setHiddenBlock('Закрыть')
        }
        else {
            setHidden('hide-content')
            setHiddenBlock('Показать скрытый блок')
        }
    }

    const handleShowTwo = () => {
        if (hiddenOne === 'hide-content') {
            setHiddenOne('show-content1')
            setHiddenBlockTwo('Закрыть')
        }
        else {
            setHiddenOne('hide-content')
            setHiddenBlockTwo('Показать скрытый блок')
        }
    }
    const handleShowLast = () => {
        if (hiddenTwo === 'hide-content') {
            setHiddenTwo('show-content1')
            setHiddenBlockLast('Закрыть')
        }
        else {
            setHiddenTwo('hide-content')
            setHiddenBlockLast('Показать скрытый блок')
        }
    }

    const handleShowFigma = () => {
        if (hiddenFigma === 'hide-content') {
            setHiddenFigma('show-content1')
            setHiddenBlockFigma('Закрыть')
        }
        else {
            setHiddenFigma('hide-content')
            setHiddenBlockFigma('Показать скрытый блок')
        }
    }
    const handleShowSix = () => {
        if (hiddenSix === 'hide-content') {
            setHiddenSix('show-content1')
            setHiddenBlockSix('Закрыть')
        }
        else {
            setHiddenSix('hide-content')
            setHiddenBlockSix('Показать скрытый блок')
        }
    }
    const handleShowSeven = () => {
        if (hiddenSeven === 'hide-content') {
            setHiddenSeven('show-content1')
            setHiddenBlockSeven('Закрыть')
        }
        else {
            setHiddenSeven('hide-content')
            setHiddenBlockSeven('Показать скрытый блок')
        }
    }


    console.log(dimension)
    return (
        <div>
            <Helmet>
                <title>Смежные Инструменты</title>
            </Helmet>
            <main >
                <div className="portfolio__body">
                    <div className="portfolio__content">
                        <div className='portfolio__content-item extend-content'>

                            <h4>{skills.seventhTitle}</h4>
                            <p>{skills.seventhDate}</p>
                            <h4 onClick={handleShowOne}>{skills.seventhPositions}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlock}</span>
                            </h4>
                            <div className={hidden}>
                                <p>{skills.seventhDescription}</p>
                            </div>
                            <hr/>
                            {/*_______2_______________________________________*/}
                            <h4>{skills.sixthTitle}</h4>
                            <p>{skills.sixthData}</p>
                            <h4 onClick={handleShowTwo}>{skills.sixthPosition}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockTwo}
                            </span>
                            </h4>
                            <div className={hiddenOne}>
                                <p>{skills.sixthDescription}</p>
                            </div>
                            <hr/>
                            {/*__________3________________________________________*/}
                            <h4>{skills.fifthTitle}</h4>
                            <p>{skills.fifthDate}</p>
                            <h4 onClick={handleShowLast}>{skills.fifthPosition}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockLast}</span>
                            </h4>
                            <div className={hiddenTwo}>
                                <p>{skills.fifthDescription}</p>
                            </div>
                            <hr/>
                            {/*____________4___________________________________________*/}
                            <h4>{skills.thirdTitle}</h4>
                            <p>{skills.thirdDate}</p>
                            <h4 onClick={handleShowFigma}>{skills.thirdPosition}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockFigma}</span>
                            </h4>
                            <div className={hiddenFigma}>
                                <p>{skills.thirdDescription}</p>
                            </div>
                            <hr/>
                           {/* ______________5____________________________________*/}
                            <h4>{skills.secondTitle}</h4>
                            <p>{skills.secondDate}</p>
                            <h4 onClick={handleShowSix}>{skills.secondPosition}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockSix}</span>
                            </h4>
                            <div className={hiddenSix}>
                                <p>{skills.secondDescription}</p>
                            </div>
                            <hr/>
                           {/* ____________6_____________________________________*/}
                            <h4>{skills.firstTitle}</h4>
                            <p>{skills.firstDate}</p>
                            <h4 onClick={handleShowSeven}>{skills.firstPosition}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockSeven}</span>
                            </h4>
                            <div className={hiddenSeven}>
                                <p>{skills.firstDescription}</p>
                            </div>
                        </div>
                    </div>

                    {/*  sidebar  */}
                    {dimension < 1030 ? null :
                    <div className='portfolio__sidebar'>
                        <SideBar/>
                        <PriceChecker/>
                    </div>
                    }
                </div>
            </main>
        </div>
    );
};

export default Skills;