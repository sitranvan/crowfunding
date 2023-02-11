import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../../components/Button/Button'
import ButtonGoogle from '../../components/ButtonGoogle'
import Checkbox from '../../components/Checkbox/Checkbox'
import FormGroup from '../../components/FormGroup'
import Input from '../../components/Input'
import InputPassword from '../../components/InputPassword'
import Label from '../../components/Label'
import AuthLayout from '../../layouts/AuthLayout'

const schema = yup
    .object()
    .shape({
        fullname: yup.string().required('Please enter your Full Name'),
        email: yup.string().required('Please enter your Email').email('Invalid email format'),
        password: yup.string().required('Please enter your Password').min(8, 'Password must be at least 8 characters'),
    })
    .required()

function SignUpPage() {
    const [checked, setChecked] = useState(false)
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    })

    // submit sign up form
    const handleSignUp = (data) => {
        return new Promise((resolver) => {
            setTimeout(() => {
                resolver()
                console.log(data)
            }, [2000])
        })
    }

    //  checked checkbox
    const handleChecked = () => {
        setChecked(!checked)
    }

    return (
        <AuthLayout heading='Sign Up'>
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mg-8'>
                Already have an account?{' '}
                <Link className='font-medium underline text-primary ' to='/sign-in'>
                    Sign in
                </Link>
            </p>
            <ButtonGoogle>Sign up with Google</ButtonGoogle>
            <p className='text-center text-xs font-normal lg:text-sm mb-4 lg:mb-8 text-text2 dark:text-white'>
                Or sign up with email
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FormGroup className='flex flex-col gap-y-3'>
                    <Label htmlFor='fullname'>Full Name *</Label>
                    <Input control={control} name='fullname' placeholder='Jhon Doe' error={errors.fullname?.message} />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-3'>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                        control={control}
                        name='email'
                        type='email'
                        placeholder='example@gmail.com'
                        error={errors.email?.message}
                    />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-3'>
                    <Label htmlFor='password'>Password *</Label>
                    <InputPassword control={control} error={errors.password?.message} />
                </FormGroup>
                <div className='flex items-start gap-x-5 mb-6'>
                    <Checkbox name='term' checked={checked} onClick={handleChecked}>
                        <p className='text-sm text-text4 flex-1 dark:text-text3'>
                            I agree to the <span className='text-secondary underline'>Terms of Use</span> and have read
                            and understood the <span className='text-secondary underline'>Privacy policy</span>
                        </p>
                    </Checkbox>
                </div>
                <Button disable={!checked} isLoading={isSubmitting} type='submit' className='bg-primary w-full'>
                    Crate my account
                </Button>
            </form>
        </AuthLayout>
    )
}

export default SignUpPage
