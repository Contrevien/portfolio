import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { getScreenSize } from '../../utils/utils'

const BOX_SIZES = {
    'xl': [200, 200, 100, 100, 100, 100, 100, 60, 60, 60, 60, 60, 40, 40, 40, 40, 40, 16, 16, 16, 16, 16, 16, 16, 16],
    'lg': [150, 60, 60, 60, 60, 60, 40, 40, 40, 40, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10],
    'md': [150, 100, 100, 60, 60, 60, 40, 40, 40, 40, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10],
    'sm': [100, 60, 60, 60, 30, 30, 30, 30, 30, 30 ,15, 15, 15, 15, 15, 15],
}

const BOX_X = {
    'xl': [22, 40, 27, 10, 54, 17, 2, 3, 5, 13, 23, 41, 5, 23, 10, 60, 34, 25, 16, 5, 3, 50, 36, 29, 7],
    'lg': [40, 27, 10, 54, 17, 2, 23, 5, 13, 23, 41, 5, 23, 10, 50, 34, 25, 16, 5, 3, 45, 36],
    'md': [40, 5, 57, 70, 7, 2, 23, 5, 13, 23, 41, 5, 23, 70, 60, 34, 35, 16, 5, 83, 50, 36],
    'sm': [40, 5, 57, 70, 7, 2, 23, 5, 83, 23, 41, 5, 23, 70, 60, 34, 25, 12],
}

const BOX_Y = {
    'xl': [31, 12, 72, 87, 7, 52, 12, 29, 64, 21, 3, 33, 53, 60, 75, 12, 55, 12, 72, 91, 43, 35, 63, 85, 21],
    'lg': [20, 72, 87, 7, 52, 12, 29, 64, 21, 3, 33, 53, 55, 75, 12, 55, 12, 72, 91, 43, 25, 91],
    'md': [20, 75, 25, 3, 35, 12, 29, 64, 21, 3, 33, 53, 55, 20, 12, 42, 25, 60, 3, 10, 5, 12],
    'sm': [15, 19, 25, 3, 35, 6, 25, 64, 15, 50, 33, 53, 37, 20, 12, 42, 12],
}

const RedButton = () => <div className='red-button-container'>
    <div className='red-button-press' />
</div>

const Box = ({x, y, r, neonLight}) => {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 100)
    }, [])

    return <div className={classNames('box', {
        'boxes-initial': !animate,
    })} style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${r}px`,
        height: `${r}px`,
    }}>
        {neonLight && <>
            {/* <div className='neon-light' /> */}
            <RedButton />
        </>}
    </div>
}

const Boxes = () => {
    const [appear, setAppear] = useState(false)
    const [boxes, setBoxes] = useState([])

    useEffect(() => {
        setBoxes(radiiSet.map((r, i) => ({
            x: window.innerWidth * ((95-BOX_X[getScreenSize()][i])/100),
            y: window.innerHeight * ((95-BOX_Y[getScreenSize()][i])/100),
            r: r,
        })))

        setTimeout(() => {
            setAppear(true)
        }, 1200)
    }, [])

    const radiiSet = BOX_SIZES[getScreenSize()]

    return (
        appear && boxes.map((b, i) => <Box {...b} key={`${b.x}${b.y}`} neonLight={i === 0} />)
    )
}

export default Boxes