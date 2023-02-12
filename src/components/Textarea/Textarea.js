import React from 'react'
import { useController } from 'react-hook-form'

function Textarea({ control, name, placeholder = '', ...props }) {
    const { field } = useController({
        control,
        name,
        defaultValue: '',
    })
    return (
        <textarea
            className='w-full py-4 px-6 border  rounded-xl text-sm  text-text1 dark:text-white placeholder:text-text4 dark:placeholder:text-text2 dark:bg-transparent min-h-[140px] resize-none outline-none'
            placeholder={placeholder}
            {...field}
            {...props}
        />
    )
}

export default Textarea
