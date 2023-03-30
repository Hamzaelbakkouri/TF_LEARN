import React from 'react'

const Statistique = () => {
    return (
        <div className="flex items-end w-full">
            
            <div className="">
                
            </div>
            <div className="ml-16 space-y-7">
                
                <div className="flex items-center">
                    
                    <div className="pt-5 pb-7 pl-1.5 pr-4 ml-auto rounded-lg shadow bg-white">
                        <div className="text-gray-900 leading-none">
                            TOTAL LANGUAGE
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center mt-2.5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0"
                            >
                                <path
                                    d="M19.9999 29.2667L26.7832 27.3833L27.6999 17.2167H15.6332L15.3332 13.8333H27.9999L28.3332 10.5167H11.6665L12.5999 20.5333H24.0832L23.6999 24.8333L19.9999 25.8333L16.2999 24.8333L16.0665 22.0667H12.7332L13.2165 27.3833L19.9999 29.2667ZM6.7832 5H33.2165L30.8332 32L19.9999 35L9.16654 32L6.7832 5Z"
                                    fill="#27DEC0"
                                />
                            </svg>
                        </div>
                        <div className="mt-6 ml-14 font-bold text-5xl leading-none">
                            23
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="pt-4 pb-7 pl-2.5 pr-5 rounded-lg shadow bg-white">
                    <div className="text-gray-900 leading-none">TOTAL SYNTAXES</div>
                    <div className="mt-3 ml-16">
                        <svg
                            width="36"
                            height="35"
                            viewBox="0 0 36 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.9 24.2083L28.8 17.5L21.9 10.7917L24 8.75L33 17.5L24 26.25L21.9 24.2083ZM14.1 24.2083L7.2 17.5L14.1 10.7917L12 8.75L3 17.5L12 26.25L14.1 24.2083Z"
                                fill="#1F78FF"
                            />
                        </svg>
                    </div>
                    <div className="mt-7 ml-14 font-bold text-5xl leading-none">
                        23
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistique