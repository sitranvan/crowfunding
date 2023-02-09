import { useState } from 'react'

function useToggleValue(initValue = false) {
    const [value, setValue] = useState(false)
    const handleToggleValue = () => {
        setValue(!value)
    }
    return {
        value,
        handleToggleValue,
    }
}

export default useToggleValue
