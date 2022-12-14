import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signinBg from '../../images/signin.svg';
import frame from '../../images/frame.svg';
import logoIcon from '../../images/icons/logo1.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useFormik } from "formik";
import * as Yup from "yup";
import { loginAPICall } from '../../services/auth/auth';
import { authChecker } from '../../shared/authChecker';



const initialState = {
    emailAddress: '',
    password: ''
}

const validate = values => {
    const errors = {};
    if (!values.emailAddress) {
        errors.emailAddress = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
        errors.emailAddress = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};

function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const search = useLocation().search;

    const handleSubmit = async (values) => {

        setIsLoading(true);
        const _response = await loginAPICall(values);
        setIsLoading(false);
        if (_response) {
            const _paramsRedirectUrl = new URLSearchParams(search).get(
                "redirectUrl"
            );
            navigate(_paramsRedirectUrl || "/");
        }
    }

    const formik = useFormik({
        initialValues: initialState,
        validate,
        onSubmit: values => {
            handleSubmit(values);
        },
    });


    return (
        <main className="bg-white">

            <div className="relative md:flex">

                <div className="hidden md:block  md:w-1/2" aria-hidden="true"
                    style={{ backgroundImage: `url(${signinBg})` }}

                >  </div>

                <div className="md:w-1/2"
                    style={{ backgroundImage: `url(${frame})` }}

                >
                    <div className="min-h-screen h-full flex flex-col after:flex-1">

                        <div className=" px-4 py-8">
                            <div className='flex w-full justify-center mt-10'>

                                <img src={logoIcon} />
                            </div>
                            <div className='flex h-[75vh] items-center  w-[90%] sm:w-[70%] lg:w-[55%]  mx-auto'>
                                <div className='w-full'>

                                    <form className='w-full'
                                        onSubmit={formik.handleSubmit}
                                    >
                                        <h1 className='text-white text-3xl'> Sign in</h1>
                                        <div className='mt-4'>
                                            <Input
                                                placeholder={"Email address"}
                                                label="Email address"
                                                name={"emailAddress"}
                                                error={formik.errors.emailAddress}
                                                touched={formik.touched.emailAddress}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                className={"!bg-inputBg mt-2 text-white"}
                                                labelClassName="text-labelColor !font-thin"
                                            />
                                        </div>
                                        <div className='mt-4'>
                                            <Input
                                                placeholder={"Password"}
                                                label="Password"
                                                type="password"
                                                name={"password"}
                                                error={formik.errors.password}
                                                touched={formik.touched.password}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                className={"!bg-inputBg mt-2 text-white"}
                                                labelClassName="!text-labelColor border-1 !font-thin"
                                            />
                                        </div>
                                        <p className='cursor-pointer text-secondary mt-2'>Forgot password </p>
                                        <Button
                                            isLoading={isLoading}
                                            isDisabled={isLoading}
                                            type="submit"
                                            title={"Continue"}
                                            style={"bg-secondary text-black mt-4 w-full"}
                                        />
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </main>
    );
}

export default Login;