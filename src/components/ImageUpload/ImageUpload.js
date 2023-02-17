import React, { useRef, useState } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { toast } from 'react-toastify'
import uploadApi from '../../services/uploadApi'
function ImageUpload({ onChange = () => {}, name = '' }) {
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState('')
    const fileRef = useRef(null) // tạo một biến tham chiếu để lưu đường dẫn của file
    const handleUploadImage = async (e) => {
        setIsLoading(true) // Bắt đầu loading khi bắt đầu upload ảnh
        try {
            const file = e.target.files
            if (!file) return
            const bodyFormData = new FormData()
            bodyFormData.append('image', file[0])
            const response = await uploadApi.upload(bodyFormData)
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
            setImage(imageData.url)
            onChange(name, imageObj)
        } catch (error) {
            toast.error('Upload image failed!')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <label
            className={`w-full h-[250px]   ${
                !image ? 'border-[2px] border-gray-200 border-dashed' : 'border border-[#60F581]'
            } rounded-xl  cursor-pointer flex items-center justify-center`}
        >
            <input
                type='file'
                onChange={(e) => {
                    if (e.target.files.length > 0) {
                        // lưu đường dẫn của file vào biến tham chiếu
                        fileRef.current = URL.createObjectURL(e.target.files[0])
                    }
                    handleUploadImage(e)
                }}
                className='hidden'
            />
            {!image && !isLoading ? (
                <div className='flex flex-col justify-center items-center gap-y-2'>
                    <img src='/upload.png' alt='' className='w-20' />
                    <span className='text-text2 font-medium text-sm'>Upload</span>
                </div>
            ) : (
                <div className='w-full h-full flex items-center justify-center'>
                    <PacmanLoader loading={isLoading} color='#60F581' />
                    {!isLoading && (
                        <img src={image} alt='image_upload' className='w-full h-full object-cover rounded-xl ' />
                    )}
                </div>
            )}
        </label>
    )
}

export default ImageUpload
