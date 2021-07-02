import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import Indicators from './Indicators'

import classes from './carousel.module.css'

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
        }, 2000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    const updateIndex = newIndex => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0
        }

        setActiveIndex(newIndex)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    return (
        <div
            {...handlers}
            className={classes.carousel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className={classes.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: "100%" })
                    })
                }
            </div>
            <Indicators
                left={() => { updateIndex(activeIndex - 1) }}
                right={() => { updateIndex(activeIndex + 1) }}
            />
        </div>
    )
}

export default Carousel