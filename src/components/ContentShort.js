import React from 'react';
import {skillsCut, themes} from "../stub";

const ContentShort = () => {
    return (
        <>
            <div className='portfolio__double-block'>
                <div className='portfolio__content-short'>
                    <h2>{skillsCut.title}</h2>
                    <div className='portfolio__content_short_skills'>
                       <div>
                           <ul>
                               <li>{skillsCut.colOne}</li>
                               <li>{skillsCut.colTwo}</li>
                               <li>{skillsCut.colThree}</li>
                               <li>{skillsCut.colFour}</li>
                               <li>{skillsCut.colFive}</li>
                               <li>{skillsCut.colSix}</li>

                           </ul>
                       </div>
                        <div>
                            <ul>
                                <li>{skillsCut.colSeven}</li>
                                <li>{skillsCut.colEight}</li>
                                <li>{skillsCut.colNine}</li>
                                <li>{skillsCut.colTen}</li>
                                <li>{skillsCut.colEleven}</li>
                                <li>{skillsCut.colTwelve}</li>
                                <li>{skillsCut.colThree}</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="portfolio__announce">
                    <h5>{'Portfolio-projects'}</h5>
                    {themes.map((item, idx) =>
                        <p key={idx}><a href={item.link}>{item.title}</a></p>
                    )}

                </div>
            </div>
        </>
    );
};

export default ContentShort;