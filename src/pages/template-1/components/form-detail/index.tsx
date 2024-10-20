import { Icon } from '@iconify/react';

interface Props {
  onClose: () => void;
}

export default function FormDetail({ onClose }: Props) {
  return (
    <div className="fixed top-0 right-0 left-0 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full after:bg-gray-800 after:w-full after:h-full after:absolute after:inset-0 after:opacity-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-4 w-full max-w-2xl max-h-full border border-gray-200 shadow-sm bg-white">
        <div className="relative p-4 bg-white rounded-lg shadowm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900">Add Product</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClose}
            >
              <Icon
                icon="iconamoon:close-bold"
                width="24"
                height="24"
                style={{ color: 'currentColor' }}
              />
            </button>
          </div>
          <form>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                />
              </div>
              <div>
                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Product brand"
                />
              </div>
              <div>
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="$2999"
                />
              </div>
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
          </form>
          <div className="flex justify-end gap-x-5 mt-10">
            <button
              type="submit"
              className="w-full md:w-auto flex gap-x-1 items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            >
              <Icon
                icon="mingcute:save-line"
                width="18"
                height="18"
                style={{ color: 'currentcolor' }}
              />
              Save
            </button>
            <button
              type="button"
              className="text-red-600 inline-flex gap-x-1 items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Icon
                icon="fluent:delete-16-filled"
                width="16"
                height="16"
                style={{ color: 'currentColor' }}
              />
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
