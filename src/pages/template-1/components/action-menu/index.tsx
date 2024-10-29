import { Icon } from '@iconify/react';
import Preview from '../preview';
import { useState } from 'react';
import ConfirmModal from '../confirm-modal';

export default function ActionMenu() {
  const [openPreviewMenu, setOpenPreviewMenu] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  return (
    <div className="absolute top-12 right-0 z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow-md">
      <ul className="py-1 text-sm">
        <li>
          <button className="flex gap-x-2 w-full items-center py-2 px-4 hover:bg-gray-100  text-gray-700">
            <Icon icon="akar-icons:edit" width="18" height="18" style={{ color: 'currentcolor' }} />
            Edit
          </button>
        </li>
        <li>
          <button
            className="flex gap-x-2 w-full items-center py-2 px-4 hover:bg-gray-100  text-gray-700"
            onClick={() => setOpenPreviewMenu(true)}
          >
            <Icon icon="mdi:eye" width="18" height="18" style={{ color: 'currentcolor' }} />
            Preview
          </button>
        </li>
        <li>
          <button
            className="flex gap-x-2 w-full items-center py-2 px-4 hover:bg-gray-100 text-red-500"
            onClick={() => setOpenConfirmModal(true)}
          >
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
      {openPreviewMenu && <Preview />}
      {openConfirmModal && <ConfirmModal />}
    </div>
  );
}
