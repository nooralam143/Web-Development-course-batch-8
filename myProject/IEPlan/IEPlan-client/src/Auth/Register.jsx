import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Datepicker, Label, TextInput } from 'flowbite-react';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from './../Hook/useAxiosPublic';
import { Helmet } from "react-helmet-async";
import SocialLogin from "./SocialLogin/SocialLogin";


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser, user } = useContext(AuthContext);
    const location = useLocation();
    const teem = [];
    const navigate = useNavigate();
    const SignUpDate = new Date();
    const options = { timeZone: 'Asia/Dhaka' };
    const signUpDateString = SignUpDate.toLocaleString('en-US', options);
    if (user) {
        navigate(location?.state?.from || '/');
    }
    const handalRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const dateOfBirth = form.get('dateOfBirth');
        const password = form.get('password');
        console.log(name, photo, email, dateOfBirth, password);
        const userInfo = {
            name,
            email,
            photo,
            dateOfBirth,
            teem,
            signUpDateString
        }
        // Registration validation start
        if (password.length < 6) {
            setRegisterError('password should have 6 characters')
            return;
        }
        if (!/[A-Z]/.test(password)) { // Check for the absence of a capital letter
            setRegisterError('Password should have a capital letter');
            return;
        }
        if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password)) {
            setRegisterError('Password should have at least one special character');
            return;
        }
        // Registration validation End
        setRegisterError('');
        setSuccess('');
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User created successfully');
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                    dateOfBirth: dateOfBirth,
                })
                axiosPublic.post('/users', userInfo)
                console.log('profile updted')
                    .then(() => {
                        navigate(location?.state?.from || '/');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                setRegisterError(error.message);
            })


    }

    return (
        <>
        <Helmet>
                <title>IEPlan | Sign Up</title>
            </Helmet>
            <Card className="max-w-sm mx-auto mt-10 mb-10">
                <form className="flex flex-col gap-4" onSubmit={handalRegister}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Full Name" />
                        </div>
                        <TextInput id="name" name="name" type="text" placeholder="Your Full Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Photo URL" />
                        </div>
                        <TextInput id="photo" name="photo" type="text" placeholder="Photo URL" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                        </div>
                        <TextInput id="email1" name="email" type="email" autoComplete="email" placeholder="name@email.com" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dateOfBirth" value="Date of Birth" />
                        </div>
                        <Datepicker name="dateOfBirth" required />
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>
                        <TextInput id="password1" name="password" autoComplete="password" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="accept" defaultChecked />
                        <Label htmlFor="accept" className="flex">
                            I agree with the&nbsp;
                            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </a>
                        </Label>
                    </div>
                    <Button className="text-[#91C840]" type="submit">SignUp</Button>
                </form>
                {
                    registerError && <p className="text-center text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-center text-green-700">{success}</p>
                }
                <div className="text-center pb-2 ">
                    <Link to="/login">
                        have a account ? <span className="text-blue-600">Login Here</span>
                    </Link>
                </div>
                <div className="flex flex-row text-blue-600 font-bold justify-center items-center text-center pb-8 ">
                </div>
                <SocialLogin></SocialLogin>
            </Card>
        </>
    );
}

export default Register;