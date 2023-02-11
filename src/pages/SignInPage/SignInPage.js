import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Button from '../../components/Button/Button'
import ButtonGoogle from '../../components/ButtonGoogle'
import FormGroup from '../../components/FormGroup'
import Input from '../../components/Input'
import InputPassword from '../../components/InputPassword'
import Label from '../../components/Label'
import AuthLayout from '../../layouts/AuthLayout'

const schema = yup
    .object()
    .shape({
        email: yup.string().required('Please enter your Email').email('Invalid email format'),
        password: yup.string().required('Please enter your Password').min(8, 'Password must be at least 8 characters'),
    })
    .required()
function SignInPage() {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting, errors },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    })
    const handleSignIn = (data) => {
        return new Promise((resolver) => {
            setTimeout(() => {
                resolver()
                console.log(data)
            }, [2000])
        })
    }

    return (
        <AuthLayout heading='Wecome Back!'>
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mg-8'>
                Dont have an acount?{' '}
                <Link className='font-medium underline text-primary ' to='/sign-up'>
                    Sign up
                </Link>
            </p>
            <ButtonGoogle>Sign in with Google</ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
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
                <FormGroup>
                    <div className='text-right'>
                        <span className='inline-block text-sm font-medium text-primary'>Forgot password</span>
                    </div>
                </FormGroup>
                <Button isLoading={isSubmitting} type='submit' className='bg-primary w-full'>
                    Crate my account
                </Button>
            </form>
        </AuthLayout>
    )
}

export default SignInPage
