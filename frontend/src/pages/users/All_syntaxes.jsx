import { useEffect, useState } from "react";
import UserBar from "../../components/UserBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchSyntaxe_byid } from "../../redux/Slices/getSyntaxes";

const syntaxes = ['hamza', 'hamza', 'hamza'];
const chunkSize = 50;
const syntaxChunks = [];

for (let i = 0; i < syntaxes.length; i += chunkSize) {
    syntaxChunks.push(syntaxes.slice(i, i + chunkSize));
}

function SyntaxList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSyntaxe_byid());
    }, [])
    const data = useSelector((state) => state.syntaxes);
    useEffect(() => {
        console.log(data);
    }, [data])

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <UserBar />
            <div className="bg-white p-8 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Syntax List</h1>

                    <table className="w-full ">
                        <thead>
                            <tr>
                                <th className="border rounded-md border-gray-400 px-4 py-2">Num</th>
                                <th className="border rounded-md border-gray-400 px-4 py-2">Syntaxes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {syntaxes.map((syntax, index) => (
                                <tr key={index} className="border border-gray-400">
                                    <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-400 px-4 py-2">{syntax}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-center mt-8">
                        {syntaxChunks.map((chunk, index) => (
                            <button
                                key={index}
                                className={`${index === currentPage
                                    ? "rounded-md bg-blue-400 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                    } font-bold py-2 px-4 focus:outline-none mx-1`}
                                onClick={() => handlePageChange(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SyntaxList;