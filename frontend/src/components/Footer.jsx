import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer class="bg-[#000003] text-white rounded-lg shadow m-4 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center pr-6">
              <img
                className="h-auto w-14"
                src={process.env.PUBLIC_URL + '/pictures/logo.png'}
                alt="Workflow"
              />
              <p className='pt-3'>TF_LEARN</p>
            </div>
            <ul class="flex flex-wrap  items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  )
}

export default Footer
