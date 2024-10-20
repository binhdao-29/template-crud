import { Icon } from '@iconify/react';
import { useState } from 'react';
import CellRender from './components/cell-render';
import FormDetail from './components/form-detail';

export default function Template1() {
  const [openFormDetail, setOpenFormDetail] = useState(false);

  const handleCloseFromDetail = () => {
    setOpenFormDetail(false);
  };

  return (
    <div>
      <section className="bg-gray-5 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Icon
                        icon="material-symbols:search"
                        width="22"
                        height="22"
                        className="text-gray-500 "
                      />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenFormDetail(true)}
                  className="w-full md:w-auto flex gap-x-1 items-center justify-center cursor-pointer py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700"
                >
                  <Icon
                    icon="si:add-fill"
                    width="18"
                    height="18"
                    style={{ color: 'currentColor' }}
                  />
                  Add product
                </button>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="w-full md:w-auto flex gap-x-1 items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700"
                    type="button"
                  >
                    <Icon
                      icon="ion:chevron-down-outline"
                      width="18"
                      height="18"
                      style={{ color: 'currentColor' }}
                    />
                    Actions
                  </button>
                  <div
                    id="actionsDropdown"
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="actionsDropdownButton"
                    >
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">
                          Sort
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    className="w-full md:w-auto flex gap-x-1 items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                    type="button"
                  >
                    <Icon
                      icon="mdi:filter-outline"
                      width="18"
                      height="18"
                      style={{ color: 'currentColor' }}
                    />
                    Filter
                    <Icon
                      icon="ion:chevron-down-outline"
                      width="18"
                      height="18"
                      style={{ color: 'currentColor' }}
                    />
                  </button>
                  <div
                    id="filterDropdown"
                    className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow"
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900">Category</h6>
                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900">
                          PC (56)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="fitbit"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900">
                          Phone (56)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="dell"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900">
                          Tablet (56)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="asus"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900">
                          Gaming/Console (97)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="logitech"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label
                          htmlFor="logitech"
                          className="ml-2 text-sm font-medium text-gray-900"
                        >
                          Watch (97)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="msi"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label htmlFor="msi" className="ml-2 text-sm font-medium text-gray-900">
                          MSI (97)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="sony"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                        />
                        <label htmlFor="sony" className="ml-2 text-sm font-medium text-gray-900">
                          TV/Monitor (234)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      Product name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                  <CellRender />
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 ">
                Showing &nbsp;
                <span className="font-semibold text-gray-900">1-10</span>
                &nbsp; of &nbsp;
                <span className="font-semibold text-gray-900">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <div className="flex items-center justify-center cursor-pointer h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Previous</span>
                    <Icon
                      icon="majesticons:chevron-left"
                      width="22"
                      height="22"
                      style={{ color: 'currentcolor' }}
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center cursor-pointer text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    1
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center cursor-pointer text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    2
                  </div>
                </li>
                <li>
                  <div
                    aria-current="page"
                    className="flex items-center justify-center cursor-pointer text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                  >
                    3
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center cursor-pointer text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    ...
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center cursor-pointer text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    100
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center cursor-pointer h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Next</span>
                    <Icon
                      icon="majesticons:chevron-right"
                      width="22"
                      height="22"
                      style={{ color: 'currentcolor' }}
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {openFormDetail && <FormDetail onClose={handleCloseFromDetail} />}
    </div>
  );
}
