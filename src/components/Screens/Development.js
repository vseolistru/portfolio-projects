import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import {development, testing} from "../../stub";
import SideBar from "../SideBar";
import PriceChecker from "../PriceChecker";
import {useDimension} from "../hook/WindowDimension";

const Development = () => {

    const [hidden, setHidden] = useState('hide-content')
    const [hiddenOne, setHiddenOne] = useState('hide-content')
    const [hiddenTwo, setHiddenTwo] = useState('hide-content')
    const [hiddenDeploy, setHiddenDeploy] = useState('hide-content')

    const [hiddenBlock, setHiddenBlock] = useState('Показать скрытый блок')
    const [hiddenBlockTwo, setHiddenBlockTwo] = useState('Показать скрытый блок')
    const [hiddenBlockLast, setHiddenBlockLast] = useState('Показать скрытый блок')
    const [hiddenBlockDeploy, setHiddenBlockDeploy] = useState('Показать скрытый блок')

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
    const handleShowDeploy = () => {
        if (hiddenDeploy === 'hide-content') {
            setHiddenDeploy('show-content1')
            setHiddenBlockDeploy('Закрыть')
        }
        else {
            setHiddenDeploy('hide-content')
            setHiddenBlockDeploy('Показать скрытый блок')
        }
    }


    return (
        <div>
            <Helmet>
                <title>Инструменты Разработки</title>
            </Helmet>
            <main >
                <div className="portfolio__body">
                    <div className="portfolio__content">
                        <div className='portfolio__content-item extend-content'>
                            <h2>{development.title}</h2>
                            <p>{development.intro}</p>
                            <h4 onClick={handleShowOne}>{development.backEndTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlock}</span>
                            </h4>
                            <div className={hidden}>
                                <p>{development.backIntro}</p>
                                <p>{development.backScript}</p>
                                <p>{development.backSession}</p>
                                <p>{development.backImg}</p>
                            </div>

                            <h4 onClick={handleShowTwo}>{development.storageDataTitle}
                                    <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockTwo}</span>
                            </h4>
                            <div className={hiddenOne}>
                                  <p>{development.storageData}</p>
                            </div>

                            <h4 onClick={handleShowLast}>{development.frontEndTitle}
                                    <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockLast}</span>
                            </h4>
                            <div className={hiddenTwo}>
                                 <p>{development.frontEndPart}</p>
                             </div>
                            <h4 onClick={handleShowDeploy}>{development.deployTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockDeploy}</span>
                            </h4>
                            <div className={hiddenDeploy}>
                                <p>{development.deploy}</p>
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

export default Development;