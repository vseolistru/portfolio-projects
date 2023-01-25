import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import {tools} from "../../stub";
import SideBar from "../SideBar";
import PriceChecker from "../PriceChecker";
import {useDimension} from "../hook/WindowDimension";

const Tools = () => {

    const [hidden, setHidden] = useState('hide-content')
    const [hiddenOne, setHiddenOne] = useState('hide-content')
    const [hiddenTwo, setHiddenTwo] = useState('hide-content')
    const [hiddenFigma, setHiddenFigma] = useState('hide-content')

    const [hiddenBlock, setHiddenBlock] = useState('Показать скрытый блок')
    const [hiddenBlockTwo, setHiddenBlockTwo] = useState('Показать скрытый блок')
    const [hiddenBlockLast, setHiddenBlockLast] = useState('Показать скрытый блок')
    const [hiddenBlockFigma, setHiddenBlockFigma] = useState('Показать скрытый блок')

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

    return (
        <div>
            <Helmet>
                <title>Смежные Инструменты</title>
            </Helmet>
            <main >
                <div className="portfolio__body">
                    <div className="portfolio__content">
                        <div className='portfolio__content-item extend-content'>
                            <h2>{tools.title}</h2>
                            <h4>{tools.firstSmallTitle}</h4>
                            <p>{tools.descriptionVsCode}</p>
                            <h4 onClick={handleShowOne}>{tools.gitTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlock}</span>
                            </h4>
                            <div className={hidden}>
                                <p>{tools.gitDescription}</p>
                                <p>{tools.gitConfig}</p>
                            </div>
                            <h4 onClick={handleShowTwo}>{tools.dockerTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockTwo}
                            </span>
                            </h4>
                            <div className={hiddenOne}>
                                <p>{tools.dockerDescription}</p>
                            </div>
                            <h4 onClick={handleShowLast}>{tools.postmanTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockLast}</span>
                            </h4>
                            <div className={hiddenTwo}>
                                <p>{tools.postmanDescription}</p>
                            </div>
                            <h4 onClick={handleShowFigma}>{tools.figmaTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockFigma}</span>
                            </h4>
                            <div className={hiddenFigma}>
                                <p>{tools.figmaDescription}</p>
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

export default Tools;