import React, { useEffect, useState } from 'react'
import UserBar from '../../components/UserBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExample } from '../../redux/Slices/getexample';
import { useNavigate } from 'react-router-dom';


const Syntaxe_example = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const id = localStorage.getItem('example_id');
    dispatch(fetchExample(id));
  }, [])

  const examples = useSelector((state) => state.examples);
  useEffect(() => {
    setData(examples.data)
  }, [examples])

  if (examples.isLoading) {
    return (
      <div>
        <UserBar />
        <div className="flex items-center justify-center h-screen space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      </div>
    )
  }

  if (examples.data != []) {
    return (
      <div>
        <UserBar />
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p
            className="text-2xl md:text-3xl font-light leading-normal"
          >Sorry we couldn't find this page.</p>
          <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <UserBar />
      <div>
        <button onClick={() => navigate('/all_syntaxes')} className="ml-5 inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Restore
        </button>
        {data.map((item) => {
          return (
            <div className='w-[80%]' key={item.created_at}>
              {item.role == 1 ? <h1 className=" sm:px-16 xl:px-48 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black  ml-5">{item.example}</h1> : ''}
              {item.role == 2 ? <p className="ml-5 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{item.example}</p> : ''}
              {item.role == 3 ?
                <div className='w-full flex justify-start md:ml-36'>
                  <div className="md:w-[40%] ml-16 sm:w-20 bg-black  pt-2 pb-11 pr-2 rounded-xl">
                    <div className="items-center flex ml-3.5">
                      <div className="text-teal-400 text-xs leading-loose mr-3">
                        editor
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-teal-900 border-slate-500 border h-10 -mr-2 sm:w-96" />
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="bg-teal-400 h-px w-16" />
                    </div>
                    <pre className="text-neutral-400 text-xs tracking-widest leading-loose ml-6 mt-9">
                      <code>
                        {item.example}
                      </code>
                    </pre>
                  </div>
                </div> : ''}

            </div>

          )
        })}
      </div>
    </div>
  )
}

export default Syntaxe_example