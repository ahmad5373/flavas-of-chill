import React, { useState } from 'react'
import Header from '../layouts/partials/header'
import { Link } from 'react-router-dom'
import AddMusic from '../components/AddMusic';

export default function Music() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header header={"Manage Music"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2">
            <div className="max-w-xs w-full">
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search music..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              <button className="px-5 py-2 border text-xs rounded-md font-medium bg-gray-150 text-white" onClick={e => setIsOpen(true)}>Add Music</button>

              <button className=" px-5 py-2 border text-xs rounded-md font-medium bg-gray-150 text-white">Download.csv</button>
              {/* <Filterdropdown /> */}
            </div>
          </div>
          <div className="my-3">
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      artist
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Music url
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((x, i) => (
                    <tr className="bg-white border-b hover:bg-gray-150/30">
                      <td className="px-6 py-4">
                      Airplane Ambience
                      </td>
                      <td className="px-6 py-4">
                      DeeJay
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                      https://soundcloud.com/tatsunoshin_ofc/rose-bruno-mars-apt-tatsunoshin-remix
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        08/08/24 - 2:30 PM
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <Link className="font-medium text-gray-150 bg-gray-150 px-3 py-0.5 rounded-md hover:text-gray-250 bg-opacity-10">view</Link>
                        <Link className="font-medium text-green-500 bg-green-500 px-3 py-0.5 rounded-md hover:text-green-500 bg-opacity-10">Edit</Link>
                        {/* <a href="#" className="font-medium text-gray-250 hover:text-gray-150 hover:underline">Block</a> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddMusic isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
