import axios from 'axios'
import React from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { toast } from 'react-toastify'
function ImageUpload({ onChange = () => {}, name = '' }) {
    const handleUploadImage = async (e) => {
        const file = e.target.files
        if (!file) return
        const bodyFormData = new FormData()
        bodyFormData.append('image', file[0])
        const response = await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload?key=f3253304c6ee42d470e02995cc86f48c',
            data: bodyFormData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        const imageData = response.data.data
        if (!imageData) {
            toast.error('Can not upload image!')
            return
        }
        const imageObj = {
            medium: imageData.medium.url,
            thumb: imageData.thumb.url,
            url: imageData.url,
        }
        onChange(name, imageObj)
    }

    return (
        <label className=' w-full h-[200px]  border-[2px] border-gray-200 border-dashed rounded-xl cursor-pointer flex items-center justify-center'>
            <input type='file' onChange={handleUploadImage} className='hidden' />
            <BsCloudUpload fontSize='40px' color='#8f8f8f' />
        </label>
    )
}

export default ImageUpload
