import React from 'react';
import {news, titleSideBar} from "../stub";
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <h2>{titleSideBar.title}</h2>
            {news.map(item => (
                <div key={item.title} className='portfolio__sidebar-item'>
                    <h4>{item.title}</h4>
                    <Link to={item.link}>{item.content}</Link>

                    <hr/>
                </div>
            ))}
        </>
    );
};

export default SideBar;