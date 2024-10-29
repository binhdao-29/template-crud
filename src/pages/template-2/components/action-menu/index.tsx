export default function ActionMenu() {
  return (
    <div className="flex items-center space-x-3 w-full md:w-auto">
      <button
        id="actionsDropdownButton"
        data-dropdown-toggle="actionsDropdown"
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        type="button"
      >
        Actions
        <svg
          className="-mr-1 ml-1.5 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      <div
        id="actionsDropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
      >
        <ul className="py-1 text-sm text-gray-700" aria-labelledby="actionsDropdownButton">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Mass Edit
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
            Delete all
          </a>
        </div>
      </div>
    </div>
  );
}
