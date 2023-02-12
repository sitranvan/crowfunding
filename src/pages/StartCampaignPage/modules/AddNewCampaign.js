import ImageUploader from 'quill-image-uploader'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Dropdown from '../../../components/Dropdown'
import FormGroup from '../../../components/FormGroup'
import FormRow from '../../../components/FormRow'
import Input from '../../../components/Input'
import Label from '../../../components/Label'
import Textarea from '../../../components/Textarea/Textarea'
import Button from '../../../components/Button'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
// import axios from 'axios'
Quill.register('modules/imageUploader', ImageUploader)

function AddNewCampaign() {
    const { handleSubmit, control } = useForm()
    const [content, setContent] = useState(null)
    const handleAddNewCampaign = (data) => {}

    const modules = useMemo(
        () => ({
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote'],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['link', 'image'],
            ],
            // imageUploader: {
            //     // imgbbAPI
            //     upload: async (file) => {
            //         console.log('upload: ~ file', file)
            //         const bodyFormData = new FormData()
            //         console.log('upload: ~ bodyFormData', bodyFormData)
            //         bodyFormData.append('image', file)
            //         const response = await axios({
            //             method: 'post',
            //             url: imgbbAPI,
            //             data: bodyFormData,
            //             headers: {
            //                 'Content-Type': 'multipart/form-data',
            //             },
            //         })
            //         return response.data.data.url
            //     },
            // },
        }),
        [],
    )
    return (
        <div className='bg-white rounded-xl py-10 px-[66px]'>
            <div className='text-center'>
                <h1 className='text-2xl py-4 px-14 bg-text4 text-text2 bg-opacity-10 font-bold rounded-xl inline-block mb-14 '>
                    Start a Campaign 🚀
                </h1>
            </div>
            <form onSubmit={handleSubmit(handleAddNewCampaign)}>
                <FormRow>
                    <FormGroup>
                        <Label>Campaign Title *</Label>
                        <Input control={control} name='title' placeholder='Write a title' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Select a category *</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder='Select the category'></Dropdown.Select>
                            <Dropdown.List>
                                <Dropdown.Option>Hello</Dropdown.Option>
                            </Dropdown.List>
                        </Dropdown>
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <Label>Short Description *</Label>
                    <Textarea control={control} name='short-desc' placeholder='Write a short description....' />
                </FormGroup>
                <FormGroup>
                    <Label>Story *</Label>
                    <ReactQuill
                        className='text-center'
                        placeholder='Write your story......'
                        modules={modules}
                        theme='snow'
                        value={content}
                        onChange={setContent}
                    />
                </FormGroup>
                <div className='py-8 px-12 flex items-center bg-secondary rounded-xl text-white font-bold text-xl gap-x-5 mb-14'>
                    <RiMoneyDollarBoxLine fontSize='28px' />
                    <span>You will get 90% of total raised</span>
                </div>
                <FormRow>
                    <FormGroup className='mt-5'>
                        <Label>Goal *</Label>
                        <Input control={control} name='goal' placeholder='$0.00 USD' />
                    </FormGroup>
                    <FormGroup className='mt-5'>
                        <Label>Raised Amount *</Label>
                        <Input control={control} name='amount' placeholder='$0.00 USD' />
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup className='mt-5'>
                        <Label>Amount Prefilled</Label>
                        <Input control={control} name='prefilled' placeholder='Amount Prefilled' />
                        <div className='text-text3 text-sm'>
                            It will help fill amount box by click, place each amount by comma, ex:{' '}
                            <p className='font-medium'>10,20,30,40</p>
                        </div>
                    </FormGroup>
                    <FormGroup className='mt-5'>
                        <Label>Video</Label>
                        <Input control={control} name='video' placeholder='Video' />
                        <p className='text-text3 text-sm'>Place Youtube or Vimeo Video URL</p>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup className='mt-5'>
                        <Label>Campaign End Method</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder='Select one'></Dropdown.Select>
                            <Dropdown.List>
                                <Dropdown.Option>Hello</Dropdown.Option>
                            </Dropdown.List>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup className='mt-5'>
                        <Label>Counrty</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder='Select a Counrty'></Dropdown.Select>
                            <Dropdown.List>
                                <Dropdown.Option>Hello</Dropdown.Option>
                            </Dropdown.List>
                        </Dropdown>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup className='mt-5'>
                        <Label>Start Date</Label>
                        <Input control={control} name='start-date' placeholder='Start Date' />
                    </FormGroup>
                    <FormGroup className='mt-5'>
                        <Label>End Date</Label>
                        <Input control={control} name='end-date' placeholder='End Date' />
                    </FormGroup>
                </FormRow>
                <div className='mt-10 text-center'>
                    <Button className='mx-auto text-white bg-primary px-10'>Submit new campaign </Button>
                </div>
            </form>
        </div>
    )
}

export default AddNewCampaign
