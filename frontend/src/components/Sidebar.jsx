import React from "react";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


export default function Sidebar() {
    return (
        <div className="w-64">
            <div>
                <div className="w-64 h-16 bg-black" />
                <img src={process.env.PUBLIC_URL + '/pictures/logo.png'} alt="..." />
                <div className="pt-7 pb-36 px-1.5 bg-black">
                    <div className="ml-6 text-white text-xs uppercase tracking-wide leading-relaxed">
                        DASHBOARD
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="flex items-center py-1 pl-2.5 pr-20 rounded-full bg-white">
                            <div className="p-1 rounded-full shadow-md bg-teal-400">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 19.5867V13.7223H14V19.5867H19V11.7675H22L12 2.97095L2 11.7675H5V19.5867H10Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="ml-auto whitespace-nowrap text-teal-400 text-sm text-center leading-normal">
                                <a className="text-gray-600 ml-4" href="">Dashboard{" "}</a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li className="mt-8 ml-14 text-white text-sm leading-normal">
                            <a className="text-white" href="">Users</a>
                        </li>
                        <li className="mt-8 ml-14 text-white text-sm leading-normal">
                            <a className="text-white" href="">Languages</a>
                        </li>
                        <li className="mt-7 ml-5 text-white text-xs uppercase tracking-wide leading-relaxed">
                            ADDING
                        </li>
                        <li className="mt-10 ml-14 text-white text-sm leading-normal">
                            <a className="text-white" href="">Add Syntaxes</a>
                        </li>
                        <li className="mt-6 ml-14 text-white text-sm leading-normal">
                            <a className="text-white" href="">Add language</a>
                        </li>
                        <li className="mt-14 ml-6 text-white text-xs uppercase tracking-wide leading-relaxed">
                            Update
                        </li>
                        <li className="mt-5 ml-14 text-white text-sm leading-normal">
                            <a className="text-white" href="">Update Syntaxes</a>
                        </li>
                        <li className="mt-6 ml-14 text-white text-sm leading-normal">
                            <a className="text-white" href="">Update languages</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-60 h-px bg-violet-50" />
            <div className='w-full flex justify-end'>
                <MDBDropdown>
                    <MDBDropdownToggle className='bg-white shadow-lg '>
                        <button className=" pt-5 w-10 h-10 rounded-2xl bg-cover bg-center bg-[url('https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg')]" />
                    </MDBDropdownToggle>
                    <div className='w-64'>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Action</MDBDropdownItem>
                            <MDBDropdownItem link>Another action</MDBDropdownItem>
                            <MDBDropdownItem link>Something else here</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </div>
                </MDBDropdown>
            </div >
        </div>
    );
}