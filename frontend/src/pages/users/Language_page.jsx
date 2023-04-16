import React from 'react'

const Language_page = () => {
  return (
    <div className='w-full flex flex-wrap justify-evenly'>

      <div className='flex flex-col justify-center'>
        <div className='w-80 '>
          <a
            href="#"
            className="relative block overflow-hidden rounded-xl bg-[url(https://user-images.githubusercontent.com/65357821/82758846-0394c180-9e0f-11ea-8b02-51f885eff3f5.png)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
              <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                <h3 className="text-xl font-bold sm:text-2xl">Rome</h3>
                <p className="text-sm">Italy</p>
              </div>
            </div>
          </a>
        </div>
        <form className="w-full max-w-xl bg-white rounded-lg -ml-3">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
          </div>
          <div className="w-full md:w-full flex items-start  px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
            </div>
            <div className="-mr-1">
              <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Language_page
