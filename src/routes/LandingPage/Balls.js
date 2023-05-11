import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import useForceUpdateHook from '../../hooks/useForceUpdate'
import { getScreenSize } from '../../utils/utils'

const BALLS_RADII = {
    'xl': [200, 200, 100, 100, 100, 100, 100, 60, 60, 60, 60, 60, 40, 40, 40, 40, 40, 16, 16, 16, 16, 16, 16, 16, 16],
    'lg': [100, 60, 60, 60, 60, 60, 40, 40, 40, 40, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10],
    'md': [100, 60, 60, 60, 60, 60, 40, 40, 40, 40, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10],
    'sm': [75, 40, 40, 40, 20, 20, 20, 20, 20, 8 ,8, 8, 8, 8, 8, 8],
}

const BALLS_X = {
    'xl': [22, 40, 27, 10, 54, 17, 2, 3, 5, 13, 23, 41, 5, 23, 10, 60, 34, 25, 16, 5, 3, 50, 36, 29, 7],
    'lg': [40, 27, 10, 54, 17, 2, 23, 5, 13, 23, 41, 5, 23, 10, 60, 34, 25, 16, 5, 3, 50, 36],
    'md': [40, 5, 57, 70, 7, 2, 23, 5, 13, 23, 41, 5, 23, 70, 60, 34, 25, 16, 5, 83, 50, 36],
    'sm': [32, 5, 57, 70, 7, 2, 23, 5, 83, 23, 41, 5, 23, 70, 60, 34, 25, 12],
}

const BALLS_Y = {
    'xl': [31, 12, 72, 87, 7, 52, 12, 29, 64, 21, 3, 33, 53, 65, 81, 12, 55, 12, 72, 91, 43, 35, 63, 85, 21],
    'lg': [15, 72, 87, 7, 52, 12, 29, 64, 21, 3, 33, 53, 65, 81, 12, 55, 12, 72, 91, 43, 35],
    'md': [12, 75, 25, 3, 35, 12, 29, 64, 21, 3, 33, 53, 65, 20, 12, 55, 12, 60, 3, 10, 5, 12],
    'sm': [12, 19, 25, 3, 35, 12, 25, 64, 21, 3, 33, 53, 40, 20, 12, 55, 12],
}

const BALLS_COLORS = [
    '#F4C82E', '#174E62', '#26C485', '#993955',
    '#F4C82E', '#174E62', '#26C485', '#993955',
    '#F4C82E', '#174E62', '#26C485', '#993955',
    '#F4C82E', '#174E62', '#26C485', '#993955',
    '#F4C82E', '#174E62', '#26C485', '#993955',
    '#F4C82E', '#174E62', '#26C485', '#993955',
]

const BALLS_SHADOWS = {
    200: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03), 6px 23px 25px rgba(0,0,0,0.05), 7px 27px 20px rgba(0,0,0,0.07)',
    100: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03), 6px 23px 25px rgba(0,0,0,0.05), 7px 27px 20px rgba(0,0,0,0.07)',
    75: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03), 6px 23px 25px rgba(0,0,0,0.05), 7px 27px 20px rgba(0,0,0,0.07)',
    60: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03), 6px 23px 25px rgba(0,0,0,0.05)',
    40: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03), 6px 23px 25px rgba(0,0,0,0.05)',
    16: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03)',
    20: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03)',
    10: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03)',
    8: '10px 30px 40px rgba(0,0,0,0.1), 5px 20px 20px rgba(0,0,0,0.03)',
}

const Ball = ({x, y, r, c, s, slide}) => (
    <div className={classNames('ball', {
        'balls-initial': !slide,
    })} style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${r}px`,
        height: `${r}px`,
        backgroundColor: c,
        boxShadow: s,
    }} />
)

const Balls = () => {
    const [slide, setSlide] = useState(false)
    const [balls, setBalls] = useState([])

    useEffect(() => {
        setBalls(radiiSet.map((r, i) => ({
            x: window.innerWidth * (BALLS_X[getScreenSize()][i]/100),
            y: window.innerHeight * (BALLS_Y[getScreenSize()][i]/100),
            c: BALLS_COLORS[i],
            r: r,
            s: BALLS_SHADOWS[r],
        })))

        setTimeout(() => {
            setSlide(true)
        }, 330)
    }, [])

    const radiiSet = BALLS_RADII[getScreenSize()]

    return (
        balls.map((b) => <Ball {...b} slide={slide} key={`${b.x}${b.y}`} />)
    )
}

export default Balls