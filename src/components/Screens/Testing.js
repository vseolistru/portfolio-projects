import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import SideBar from "../SideBar";
import PriceChecker from "../PriceChecker";
import {testing} from "../../stub";
import {useDimension} from "../hook/WindowDimension";


const Testing = () => {

    const [hidden, setHidden] = useState('hide-content')
    const [hiddenOne, setHiddenOne] = useState('hide-content')
    const [hiddenTwo, setHiddenTwo] = useState('hide-content')


    const [hiddenBlock, setHiddenBlock] = useState('Показать скрытый блок')
    const [hiddenBlockTwo, setHiddenBlockTwo] = useState('Показать скрытый блок')
    const [hiddenBlockLast, setHiddenBlockLast] = useState('Показать скрытый блок')

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


    return (
        <div>
            <Helmet>
                <title>Инструменты тестирования</title>
            </Helmet>
            <main >
                <div className="portfolio__body">
                    <div className="portfolio__content">
                        <div className='portfolio__content-item extend-content'>
                            <h2>{testing.title}</h2>
                            <p>{testing.content}</p>
                            <p>{testing.unit}</p>
                            <h4 onClick={handleShowOne}>{testing.nextTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlock}</span>
                            </h4>
                            <div className={hidden}>
                                <p>{testing.smoke}</p>
                                <p>{testing.integration}</p>
                                <p>{testing.extend}</p>
                                <p>{testing.regression}</p>
                                <p>{testing.documentation}</p>
                            </div>
                            <h4 onClick={handleShowTwo}>{testing.toolsManualTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockTwo}
                            </span>
                            </h4>

                            <div className={hiddenOne}>
                                <p>{testing.uiTesting}</p>
                                <p>{testing.backTesting}</p>
                                <p>{testing.testingDb}</p>
                            </div>

                            <h4 onClick={handleShowLast}>{testing.autoTitle}
                                <span style={{fontWeight:500, opacity: 0.4, marginLeft:30}}>{hiddenBlockLast}</span>
                            </h4>
                            <div className={hiddenTwo}>
                                <p>{testing.autoToolsCypress}</p>
                                <p>{testing.autoToolsPlaywright}</p>
                                <p>{testing.backendTools}</p>
                                <p>{testing.TestingDocumentation}</p>
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

export default Testing;