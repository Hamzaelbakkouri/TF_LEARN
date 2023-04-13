import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer className="bg-[#000003] text-white shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center pr-6">
              <img
                className="h-auto w-14"
                src={process.env.PUBLIC_URL + '/pictures/logo.png'}
                alt="Workflow"
              />
              <p className='pt-3'>TF_LEARN</p>
            </div>
            <ul className="flex flex-wrap no-underline items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 text-white md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" className="mr-4 text-white md:mr-6 ">Languages</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 TF_LEARN. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
