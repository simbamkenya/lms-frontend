import React from 'react'

function Sidebar() {
  return (
<div className="flex flex-col w-56 bg-gray-400  overflow-hidden">
            <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">LMS</h1>
            </div>
            <ul className="flex flex-col py-4">
            <li>
                <a href="/dashboard/inventory" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="home"></box-icon></span>
                <span className="text-sm font-medium">Inventory</span>
                </a>
            </li>
            <li>
                <a href="/dashboard/renting" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="music"></box-icon></span>
                <span className="text-sm font-medium">Renting</span>
                </a>
            </li>
            <li>
                <a href="/dashboard/users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="hot"></box-icon></span>
                <span className="text-sm font-medium">Members</span>
                </a>
            </li>
            <li>
                <a href="/dashboard/reports" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="shopping-bag"></box-icon></span>
                <span className="text-sm font-medium">Report</span>
                </a>
            </li>
            </ul>
        </div>
  )
}

export default Sidebar