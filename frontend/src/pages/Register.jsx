import { LockClosedIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUser } from '../redux/Slices/register';
import { useNavigate } from 'react-router-dom';
import UserBar from '../components/UserBar';
import Footer from '../components/footer';

export default function Register() {
    const dispatch = useDispatch();

    const [fname, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [lname, setNom] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const navigate = useNavigate();
    const [error, setError] = useState();

    const form = new FormData();
    form.append('prenom', fname)
    form.append('nom', lname)
    form.append('email', email)
    form.append('password', password)
    form.append('confirmation', confirmation)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !lname || !password || !confirmation || !fname) {
            setError('Enter All The Fields')
            return
        }
        dispatch(registerUser(form));
        navigate('/login')
    };

    return (
        <>
            <UserBar />
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="http://cdn.onlinewebfonts.com/svg/img_88236.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">

                            <div>
                                <label className="sr-only">
                                    FirstName
                                </label>
                                <input
                                    value={fname}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    id="email-address"
                                    name="text"
                                    type="text"
                                    autoComplete="email"
                                    className="p-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="FirstName"
                                />
                            </div>
                            <div>
                                <label className="sr-only">
                                    LastName
                                </label>
                                <input
                                    value={lname}
                                    onChange={(e) => setNom(e.target.value)}
                                    id="email-address"
                                    name="text"
                                    type="text"
                                    autoComplete="email"
                                    className="p-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="LastName"
                                />
                            </div>
                            <div>
                                <label className="sr-only">
                                    Email address
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="p-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="p-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label className="sr-only">
                                    Confirmation
                                </label>
                                <input
                                    value={confirmation}
                                    onChange={(e) => setConfirmation(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="p-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Confirmation"
                                />
                            </div>
                        </div>
                        <small className='text-red-500'>
                            {error}
                        </small>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
