import { debounce } from 'lodash'
import { useState } from 'react'

function useOnChange(time = 0) {
    const [value, setValue] = useState(null)
    const handleOnChange = debounce((e) => {
        setValue(e.target.value)
    }, time)
    return [value, handleOnChange]
}

export default useOnChange
