/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon , UserIcon} from '@heroicons/react/outline'
import Cookies from 'universal-cookie'
import { NavLink, useNavigate } from 'react-router-dom';

const cookies = new Cookies();
const cooki = cookies.get('login');

const user = {
    name: 'hamza',
    email: 'hamza@gmail.com',
    imageUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
}
const navigation1 = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Favorites', href: '/favorite', current: false },
]

const navigation2 = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },

]
const userNavigation1 = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
]

const userNavigation2 = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const logout = () => {
        cookies.remove('login');
        window.location.href = '/';
    }
    return (
        <>
            <div className="min-h-full">
                <div className="bg-[#000003] pb-8">
                    <Disclosure as="nav" className="bg-[#000003]">
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <div className="border-b border-gray-700">
                                        <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                                            <div className="flex items-center">
                                                <div className="flex items-center pr-16">
                                                    <img
                                                        className="h-auto w-14"
                                                        src={process.env.PUBLIC_URL + '/pictures/logo.png'}
                                                        alt="Workflow"
                                                    />
                                                    <p className='pt-3 text-white'>TF_LEARN</p>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {(cooki ? navigation1 : navigation2).map((item) => (
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-[#000000] text-white'
                                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                                )}
                                                                aria-current={item.current ? 'page' : undefined}
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                    <Menu as="div" className="ml-3 relative">
                                                        <div>
                                                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                <span className="sr-only">Open user menu</span>
                                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="..." />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {(cooki ? userNavigation1 : userNavigation2).map((item) => (
                                                                    <Menu.Item key={item.name}>
                                                                        {({ active }) => (
                                                                            <NavLink
                                                                                to={item.href}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                                )}
                                                                            >
                                                                                {item.name}
                                                                            </NavLink>
                                                                        )}
                                                                        
                                                                    </Menu.Item>
                                                                ))}
                                                                {cooki ?<a onClick={()=>logout()} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                                                                            Logout
                                                                        </a>: ''}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <div className="-mr-2 flex md:hidden">
                                                {/* Mobile menu button */}
                                                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open main menu</span>
                                                    {open ? (
                                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </Disclosure.Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                                    <div className="px-2 py-3 space-y-1 sm:px-3">
                                        {(cooki ? navigation1 : navigation2).map((item) => (
                                            <NavLink
                                                key={item.name}
                                                as="a"
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block px-3 py-2 rounded-md text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                    <div className="pt-4 pb-3 border-t border-gray-700">
                                        <div className="flex items-center px-5">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                            </div>
                                            <div className="ml-3">
                                                {/* <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div> */}
                                            </div>
                                            <button
                                                type="button"
                                                className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="mt-3 px-2 space-y-1">
                                            {(cooki ? userNavigation1 : userNavigation2).map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    as="a"
                                                    to={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </>
    )
}
