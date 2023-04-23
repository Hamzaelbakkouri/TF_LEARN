
import { LockClosedIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/footer';
import { setEmail, setPassword, loginUser, loginUserSuccess, loginAdminSuccess } from '../redux/Slices/login';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import UserBar from '../components/UserBar';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const cooki = cookies.get('login');
    const toast = useRef(null);

    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            dispatch(loginUser());
        } catch (error) {
            showError('not working');
        }
    };
    const userdata = useSelector((state) => state.user);
    useEffect(() => {
        if (userdata.isLoggedIn) {
            navigate('/statistique');
        }
    })

    return (
        <>
            <UserBar />
            <Toast ref={toast} />
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="http://cdn.onlinewebfonts.com/svg/img_88236.png"
                            alt="..."
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Login to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin} method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onChange={(e) => dispatch(setEmail(e.target.value))}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="p-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={(e) => dispatch(setPassword(e.target.value))}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="p-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
