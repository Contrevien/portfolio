import React, { useEffect, useRef, useState } from 'react';
import Balls from './Balls';

function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const LandingPage = () => {
    const [isShown, setIsShown] = useState(false);
    const mishraEnRef = useRef(null);
    const mishraJpRef = useRef(null);
    const akhandEnRef = useRef(null);
    const akhandJpRef = useRef(null);
    const waitBeforeShow = 800
    const forceUpdate = useForceUpdate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    useEffect(() => {
        window.addEventListener('resize', forceUpdate)
    }, [])

    setTimeout(() => {
        if (mishraEnRef.current && mishraEnRef.current.clientHeight > 0) {
            mishraEnRef.current.style.top = `${window.innerHeight/2 - mishraEnRef.current.clientHeight - window.innerHeight * 0.01}px`
            mishraEnRef.current.style.left = `${window.innerWidth/2 - mishraEnRef.current.clientWidth - window.innerWidth * 0.01}px`
            mishraJpRef.current.style.top = `${window.innerHeight/2 - mishraEnRef.current.clientHeight - window.innerHeight * 0.01}px`
            mishraJpRef.current.style.left = `${window.innerWidth/2 - mishraEnRef.current.clientWidth - window.innerWidth * 0.01}px`
        }
        if (akhandEnRef.current && akhandEnRef.current.clientHeight > 0) {
            akhandEnRef.current.style.bottom = `${window.innerHeight/2 - akhandEnRef.current.clientHeight - window.innerHeight * 0.01}px`
            akhandEnRef.current.style.right = `${window.innerWidth/2 - akhandEnRef.current.clientWidth - window.innerWidth * 0.01}px`
            akhandJpRef.current.style.bottom = `${window.innerHeight/2 - akhandEnRef.current.clientHeight - window.innerHeight * 0.01}px`
            akhandJpRef.current.style.right = `${window.innerWidth/2 - akhandEnRef.current.clientWidth - window.innerWidth * 0.01}px`
        }
    })

    return(
        <div className='landing-page-container'>
            <Balls />
            <div className='left-container' />
            <div className='right-container' />
            {isShown && <>
                <div className='mishra-en' ref={mishraEnRef}>
                    <span className='one-0'>Mis</span>
                    h
                    <span className='one-1'>ra</span>
                </div>
                <div className='akhand-en' ref={akhandEnRef}>
                    Akhand
                </div>
                <div className='mishra-jp' ref={mishraJpRef}>
                    <span className='three-0'>ミシ</span>
                    <span className='three-1'>ュ</span>
                    <span className='three-2'>ラ</span>
                </div>
                <div className='akhand-jp' ref={akhandJpRef}>
                    アカンド
                </div>
            </>}
        </div>
    );
};

export default LandingPage;
