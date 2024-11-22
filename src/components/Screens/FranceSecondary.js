import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import SideBar from "../SideBar";
import PriceChecker from "../PriceChecker";
import InfoRender from "./InfoRender";
import {useDimension} from "../hook/WindowDimension";



const FranceSecondary = ({data}) => {
    const league_data = data.data
    const [hidden, setHidden] = useState('hide-content')
    const [hiddenOne, setHiddenOne] = useState('hide-content')
    const [hiddenTwo, setHiddenTwo] = useState('hide-content')
    const [hiddenTree, setHiddenTree] = useState('hide-content')
    const [hiddenFour, setHiddenFour] = useState('hide-content')
    const [hiddenFive, setHiddenFive] = useState('hide-content')
    const [hiddenSix, setHiddenSix] = useState('hide-content')
    const [hiddenSeven, setHiddenSeven] = useState('hide-content')
    const [hiddenEight, setHiddenEight] = useState('hide-content')
    const [hiddenNine, setHiddenNine] = useState('hide-content')


    const dimension = useDimension()
    const handleShowOne = (idx) => {
        // event
        if (hidden === 'hide-content' && idx === 0) {
            setHidden('show-content')
        }
        else
            setHidden('hide-content')
        // event
        if (hiddenOne === 'hide-content' && idx === 1) {
            setHiddenOne('show-content')
        }
        else
            setHiddenOne('hide-content')
        // event
        if (hiddenTwo === 'hide-content' && idx === 2) {
            setHiddenTwo('show-content')
        }
        else
            setHiddenTwo('hide-content')
        // event
        if (hiddenTree === 'hide-content' && idx === 3) {
            setHiddenTree('show-content')
        }
        else
            setHiddenTree('hide-content')
        // event
        if (hiddenFour === 'hide-content' && idx === 4) {
            setHiddenFour('show-content')
        }
        else
            setHiddenFour('hide-content')
        // event
        if (hiddenFive === 'hide-content' && idx === 5) {
            setHiddenFive('show-content')
        }
        else
            setHiddenFive('hide-content')
        // event
        if (hiddenSix === 'hide-content' && idx === 6) {
            setHiddenSix('show-content')
        }
        else
            setHiddenSix('hide-content')
        // event
        if (hiddenSeven === 'hide-content' && idx === 7) {
            setHiddenSeven('show-content')
        }
        else
            setHiddenSeven('hide-content')
        // event
        if (hiddenEight === 'hide-content' && idx === 8) {
            setHiddenEight('show-content')
        }
        else
            setHiddenEight('hide-content')
        // event
        if (hiddenNine === 'hide-content' && idx === 9) {
            setHiddenNine('show-content')
        }
        else
            setHiddenNine('hide-content')
    }

    return (
        <div>
            <Helmet>
                <title>My tools</title>
            </Helmet>
            <main >
                <div className="portfolio__body">
                    <div className="portfolio__content">
                        <div className='portfolio__content-item extend-content'>
                            {/*выносим в отдельный компонент*/}
                            <div>{league_data.map((item, idx) =>
                                <div className='portfolio__content_game_present'
                                     key={idx}>
                                    <h4 onClick={()=> handleShowOne(idx)}>
                                    {item.game.game}
                                    </h4>
                                    {
                                        idx===0 ?
                                        <div className={hidden}>
                                            <div>
                                                <InfoRender events={item}/>
                                            </div>
                                        </div>
                                        : null
                                    }
                                    {
                                        idx===1 ?
                                            <div className={hiddenOne}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div>
                                            : null
                                    }
                                    {
                                        idx === 2 ?
                                            <div className={hiddenTwo}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div>
                                            : null
                                    }
                                    {
                                        idx === 3 ?
                                            <div className={hiddenTree}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div>
                                            : null
                                    }
                                    {
                                        idx === 4 ?
                                            <div className={hiddenFour}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div> : null
                                    }
                                    {
                                        idx === 5 ?
                                            <div className={hiddenFive}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div> : null
                                    }
                                    {
                                        idx === 6 ?
                                            <div className={hiddenSix}>
                                            <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div> : null
                                    }
                                    {
                                        idx === 7 ?
                                            <div className={hiddenSeven}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div> : null
                                    }
                                    {
                                        idx === 8 ?
                                            <div className={hiddenEight}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div> : null
                                    }
                                    {
                                        idx === 9 ?
                                            <div className={hiddenNine}>
                                                <div>
                                                    <InfoRender events={item}/>
                                                </div>
                                            </div> : null
                                    }
                                </div>)}
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

export default FranceSecondary;