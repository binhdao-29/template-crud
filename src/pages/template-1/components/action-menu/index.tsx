import { Icon } from '@iconify/react';

export default function ActionMenu() {
  return (
    <div className="absolute top-12 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
      <ul className="py-1 text-sm" aria-labelledby="apple-ipad-air-dropdown-button">
        <li>
          <button className="flex gap-x-2 w-full items-center py-2 px-4 hover:bg-gray-100  text-gray-700 ">
            <Icon icon="akar-icons:edit" width="18" height="18" style={{ color: 'currentcolor' }} />
            Edit
          </button>
        </li>
        <li>
          <button className="flex gap-x-2 w-full items-center py-2 px-4 hover:bg-gray-100  text-gray-700 ">
            <Icon icon="mdi:eye" width="18" height="18" style={{ color: '' }} />
            Preview
          </button>
        </li>
        <li>
          <button className="flex gap-x-2 w-full items-center py-2 px-4 hover:bg-gray-100 text-red-500">
            <Icon
              icon="fluent:delete-16-filled"
              width="18"
              height="18"
              style={{ color: 'currentColor' }}
            />
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
