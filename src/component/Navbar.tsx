import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import geopostcodesLogoHeader from '../assets/images/Geopostcodes-logo-header.svg';
import user from '../assets/images/myph.jpg';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  onSelect: (selection: string) => void;
}

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Data Explorer', href: '#', current: false },
  { name: 'Map Explorer', href: '#', current: false },
  { name: 'Download Center', href: '#', current: false },
  { name: 'Knowledge Base', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}



export default function Navbar({ onSelect }: NavbarProps)  {
  return (
    <Disclosure as="nav" className="bg-blue-900  place-items-center">
      <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex flex-shrink-0 items-center"        onClick={() => onSelect("Center")}
>
              <img src={geopostcodesLogoHeader} alt="Logo"  />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-white border-b-2 border-blue-500'
    : 'text-gray-300 hover:text-white border-b-2 border-transparent',
  'rounded-md px-3 py-2 text-sm font-medium'
                    )}
          onClick={() => onSelect(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={user}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
						
							</div>
							<MenuItems
								transition
								className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
							>
								<MenuItem>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'
									>
										Your Profile
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'
									>
										Settings
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'
									>
										Sign out
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
					</div>
				</div>
			</div>

			<DisclosurePanel className='sm:hidden justify-items-center '>
				<div className='space-y-1 px-2 pb-3 pt-2'>
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as='a'
							href={item.href}
							aria-current={item.current ? 'page' : undefined}
							className={classNames(
								item.current
								 ? 'text-white  border-b-2 border-blue-500'
                  : 'text-gray-300  hover:text-white hover:border-b-2 ',
                'block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:shadow-outline-blue'

							)}
							  onClick={() => onSelect(item.name)}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}
