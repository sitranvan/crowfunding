import ImageUploader from 'quill-image-uploader'
import React, { useEffect, useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../../components/Button'
import Dropdown from '../../../components/Dropdown'
import FormGroup from '../../../components/FormGroup'
import FormRow from '../../../components/FormRow'
import ImageUpload from '../../../components/ImageUpload'
import Input from '../../../components/Input'
import Label from '../../../components/Label'
import Textarea from '../../../components/Textarea/Textarea'
import useOnChange from '../../../hooks/useOnChange'
import campaignApi from '../../../services/campaignApi'
import countryApi from '../../../services/countryApi'
import uploadApi from '../../../services/uploadApi'
// import axios from 'axios'
Quill.register('modules/imageUploader', ImageUploader)

const categories = ['architecture', 'Education']

function AddNewCampaign() {
    const { handleSubmit, control, setValue, watch } = useForm()
    const navigate = useNavigate()
    const [content, setContent] = useState(null)
    const [filterCountry, setFilterCountry] = useOnChange(200)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [countries, setCountries] = useState([])
    const getDropdowLabel = (name, defaultLabel) => {
        const value = watch(name) || defaultLabel
        return value
    }

    const handleAddNewCampaign = async (data) => {
        try {
            await campaignApi.addCampaign({ ...data, content, startDate, endDate })
            toast.success('Create campaign successfully!')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

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
            imageUploader: {
                // imgbbAPI
                upload: async (file) => {
                    const bodyFormData = new FormData()
                    bodyFormData.append('image', file)
                    const response = await uploadApi.upload(bodyFormData)
                    return response.data.data.url
                },
            },
        }),
        [],
    )

    const handleSelectDropdown = (name, value) => {
        setValue(name, value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!filterCountry) return
                const response = await countryApi.searchName(filterCountry)
                setCountries(response.data)
            } catch (error) {
                toast.error(error)
            }
        }
        fetchData()
    }, [filterCountry])

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
                            <Dropdown.Select
                                placeholder={getDropdowLabel('category', 'Select the category')}
                            ></Dropdown.Select>
                            <Dropdown.List>
                                {categories.map((category) => (
                                    <Dropdown.Option
                                        key={category}
                                        onClick={() => handleSelectDropdown('category', category)}
                                    >
                                        <span className='capitalize'>{category}</span>
                                    </Dropdown.Option>
                                ))}
                            </Dropdown.List>
                        </Dropdown>
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <Label>Short Description *</Label>
                    <Textarea control={control} name='short-desc' placeholder='Write a short description....' />
                </FormGroup>
                <FormRow>
                    <FormGroup>
                        <Label>Image</Label>
                        <ImageUpload onChange={setValue} name='upload_image' />
                    </FormGroup>
                </FormRow>
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
                            <Dropdown.Select placeholder={getDropdowLabel('methob', 'Select one')}></Dropdown.Select>
                            <Dropdown.List>
                                <Dropdown.Option>Methob</Dropdown.Option>
                            </Dropdown.List>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup className='mt-5'>
                        <Label>Counrty</Label>
                        <Dropdown>
                            <Dropdown.Select
                                placeholder={getDropdowLabel('country', 'Select a Counrty')}
                            ></Dropdown.Select>
                            <Dropdown.List>
                                <Dropdown.Search placeholder='Search country' onChange={setFilterCountry} />
                                {countries.length > 0 &&
                                    countries.map((country) => (
                                        <Dropdown.Option
                                            key={country.name}
                                            onClick={() => handleSelectDropdown('country', country?.name)}
                                        >
                                            {country?.name}
                                        </Dropdown.Option>
                                    ))}
                            </Dropdown.List>
                        </Dropdown>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup className='mt-5'>
                        <Label>Start Date</Label>
                        <DatePicker
                            dateFormat='dd/MM/yyyy'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </FormGroup>
                    <FormGroup className='mt-5'>
                        <Label>End Date</Label>
                        <DatePicker dateFormat='dd/MM/yyyy' selected={endDate} onChange={(date) => setEndDate(date)} />
                    </FormGroup>
                </FormRow>
                <div className='mt-10 text-center'>
                    <Button type='submit' className='mx-auto text-white bg-primary px-10'>
                        Submit new campaign{' '}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddNewCampaign
