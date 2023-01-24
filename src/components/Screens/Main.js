import React, {useEffect, useRef} from 'react';
import ContentStart from "../ContentStart";
import ContentShort from "../ContentShort";
import ChatForm from "../ChatForm";
import SideBar from "../SideBar";
import PriceChecker from "../PriceChecker";

const Main = () => {




    return (
        <main >
            <div className="portfolio__body">
                <div className="portfolio__content">
                    <ContentStart/>
                    {/*control*/}
                    <ContentShort/>
                    <ChatForm/>
                </div>

                {/*  sidebar  */}
                <div className='portfolio__sidebar'>
                    <SideBar/>
                    <PriceChecker/>
                </div>
            </div>
        </main>
    );
};

export default Main;