import reactDOM from 'react-dom';
import ButtonLink from '../ButtonLink'

import { useState, useEffect } from 'react';
import classes from './popup.module.css'

const Modal = props => {

    return (
        reactDOM.createPortal(
            <div className={classes.popup}>
                <div className={classes.box}>
                    <span className={classes.closeIcon} onClick={props.handleClose}>x</span>
                    <div className={classes.content}>
                        {props.content}
                    </div>
                </div>
            </div>
            , document.getElementById("overlay")
        )
    )
}

const Popup = props => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset';
        }

    }, [isOpen])

    const togglePopup = () => setIsOpen(!isOpen);

    return (

        <div>
            <ButtonLink
                type="button"
                text={props.text}
                onClick={togglePopup}
                style={props.style}
                secondary={props.secondary}
            />
            {
                isOpen && <Modal
                    content={props.children}
                    handleClose={togglePopup}
                />
            }
        </div>
    )
}


export default Popup