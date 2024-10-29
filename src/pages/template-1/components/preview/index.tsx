import { Icon } from '@iconify/react';

export default function Preview() {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  after:bg-gray-800 after:w-full after:h-full after:absolute after:inset-0 after:opacity-50">
      <div className="relative p-4 w-full max-w-xl max-h-full z-[1000]">
        <div className="relative p-4 bg-white rounded-lg shadowm:p-5">
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 md:text-xl">
              <h3 className="font-semibold ">Apple iMac 27”</h3>
              <p className="font-bold">$2999</p>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex "
              >
                <Icon
                  icon="iconamoon:close-bold"
                  width="24"
                  height="24"
                  style={{ color: 'currentColor' }}
                />
              </button>
            </div>
          </div>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900">Details</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up
              to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory,
              256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900">Category</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">Electronics/PC</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
