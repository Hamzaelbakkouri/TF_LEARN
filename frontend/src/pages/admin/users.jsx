import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../../redux/Slices/Users";


export default function users() {
    // const dispatch = useDispatch();
    const people = [];

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [])
    return (
        <div className="w-full mt-20 md:pr-10 flex flex-wrap md:justify-end items-center">
            <div className="px-2 sm:px-6 lg:px-4 w-[80%]">
                <h2>USERS</h2>
                <hr />
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300 sm:flex-wrap">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                Name
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Email
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person) => (
                                            <tr key={person.email}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {person.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role === '0' ? 'admin' : "user"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
