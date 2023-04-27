/* This example requires Tailwind CSS v2.0+ */
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'
import Sidebar from '../../components/admin/Sidebar'
import { useEffect } from 'react'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const stats = [
  { id: 1, name: 'Languages', stat: '13', icon: UsersIcon },
  { id: 2, name: 'Syntaxes', stat: '3321', icon: MailOpenIcon },
  { id: 3, name: 'Likes', stat: '5', icon: CursorClickIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Statistique() {
  const Cookie = new Cookies();
  const cooki = Cookie.get('login');
  const navigate = useNavigate();

  useEffect(() => {
    cooki.user.role !== 0 ?
      // console.log(cooki.user)
      navigate('/')
      :
      navigate('/statistique');
  }, [cooki])

  return (
    <div>
      <Sidebar />
      <dl className="mt-5  flex justify-center gap-5 flex-wrap">
        {stats.map((item) => (
          <div
            key={item.id}
            className=" relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
