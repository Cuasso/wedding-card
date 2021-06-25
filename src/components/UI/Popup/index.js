import { useState, useEffect } from 'react';
import classes from './popup.module.css'


const Modal = props => {

    return (
        <div className={classes.popup}>
            <div className={classes.box}>
                <span className={classes.closeIcon} onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    )
}


const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            console.log(isOpen)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset';
        }

    }, [isOpen])

    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <div>
            <input
                type="button"
                value="Click to Open Popup"
                onClick={togglePopup}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {
                isOpen && <Modal
                    content={<>
                        <b>Design your Popup</b>
                    </>}
                    handleClose={togglePopup}
                />
            }
        </div >
    )
}


export default Popup