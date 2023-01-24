import {useEffect, useState} from "react";

export const useDimension = () => {
    const [dimension, setDimension] = useState(0)

    const handleResize = () => {
        setDimension(window.innerWidth)

    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return dimension;
}