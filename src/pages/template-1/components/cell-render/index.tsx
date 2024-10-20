import { Icon } from '@iconify/react';

export default function CellRender() {
  return (
    <tr className="border-b">
      <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
        Apple iPad Air
      </th>
      <td className="px-4 py-3">Tablet</td>
      <td className="px-4 py-3">Apple</td>
      <td className="px-4 py-3 max-w-[12rem] truncate">
        What is a product description? A product description describes a product.
      </td>
      <td className="px-4 py-3">$1199</td>
      <td className="relative px-4 py-3 flex items-center justify-end">
        <button className="inline-flex items-center text-sm font-medium hover:bg-gray-100 p-1.5 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none">
          <Icon
            icon="solar:menu-dots-bold"
            width="22"
            height="22"
            style={{ color: 'currentcolor' }}
          />
        </button>
      </td>
    </tr>
  );
}
