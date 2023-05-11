import { useEffect, useState } from 'react'

function useForceUpdate(){
    const [value, setValue] = useState(1);
    return ({
        value,
        updateValue: () => setValue(value => value + 1)
    });
}

const useForceUpdateHook = () => {
    const { value, updateValue } = useForceUpdate()
    useEffect(() => {
        window.addEventListener('resize', updateValue)
    }, [])

    return { value }
}

export default useForceUpdateHook