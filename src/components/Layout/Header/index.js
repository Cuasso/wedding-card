import { useEffect, useState } from "react";
import ArrowDown from "../../UI/ArrowDown";

import classes from './header.module.css'
import background from '../../../assets/header-background.svg'

const Header = () => {

    const [offset, setOffset] = useState(0)
  
    useEffect(() => {
      const handlerScroll = () => setOffset(window.pageXOffset)
  
      window.addEventListener("scroll", handlerScroll)
  
      return () => {
        window.removeEventListener("scroll",handlerScroll)
      }
    },[offset])

    return (
        <div className={classes.header}>
            <img
                src={background}
                alt="test"
                className={classes.parallax}
                style={{
                    transform: `translateY(${offset * 0.5}px)`
                }}
            />
            <div className={classes.textWrapper}>
                <h1 className={classes.headline}>Lucho</h1>
                <h1 className={classes.subHeadline}>&</h1>                         
                <h1 className={classes.headline}>Joha</h1>
            </div>
            < ArrowDown />            
        </div>
    )
}

export default Header