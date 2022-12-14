import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../images/icons/logo1.svg';
import overiewIcon from '../images/icons/search.png';
import udexIcon from '../images/icons/playlist.png';
import adminIcon from '../images/icons/user.png';
import albumIcon from '../images/icons/album.png';
import songIcon from '../images/icons/songicon.svg';
import projectIcon from '../images/icons/project.png';
import overviewIcon from '../images/icons/overview.svg';
import artistIcon from '../images/icons/artisticon.svg';
import playlistIcon from '../images/icons/playlisticon.svg';
import SidebarLinkGroup from './SidebarLinkGroup';


const navbarItems = [
  {
    isGroup: false,
    name: 'Overview',
    path: '/',
    icon: overviewIcon
  },
  {
    isGroup: true,
    name: 'Playlists',
    path: '/playlist',
    icon: playlistIcon,
    childItem: [
      {
        name: 'Create playlists',
        path: '/playlist/newplaylist'
      },
      {
        name: 'Udux Playlists',
        path: '/playlist/uduxplaylists'
      },
      {
        name: 'User playlists',
        path: '/playlist/userPlaylists'
      }
    ]
  },

  {
    isGroup: false,
    name: 'Songs',
    path: '/songs',
    icon: songIcon
  },
  {
    isGroup: false,
    name: 'Projects',
    path: '/projects',
    icon: projectIcon
  },
  {
    isGroup: false,
    name: 'Albums',
    path: '/albums',
    icon: albumIcon
  },
  {
    isGroup: false,
    name: 'Artists',
    path: '/artistsList',
    icon: artistIcon
  },
  {
    isGroup: true,
    name: 'Admin',
    path: '/admin',
    icon: adminIcon,
    childItem: [
      {
        name: 'Overview',
        path: '/admin'
      },
      {
        name: 'Billing plans',
        path: '/admin/billingPlans'
      },
      {
        name: 'Subscriptions',
        path: '/admin/subscription'
      }
    ]
  },
]


function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);
  const [user, setUser] = useState(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  useEffect(() => {
    getUser();
  }, [])
  const getUser = async () => {
    let _user = await localStorage.getItem("user");
    _user = JSON.parse(_user);
    setUser(_user);
  }


  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const handleLogout = async () => {
    await localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-black p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        <div className="flex justify-between mb-5 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className='flex flex-1 justify-center'>
            <NavLink end to="/" className="block">

              <img src={logoIcon} className="w-[80px] h-[60px]" />
            </NavLink>
          </div>
        </div>

        <div className="space-y-8">
          <div>

            <ul className="mt-3">
              {
                navbarItems.map((navItem, index) => (
                  <div key={index}>
                    {
                      navItem.isGroup
                        ? <SidebarLinkGroup activecondition={pathname === navItem.path || pathname.includes(navItem.path)}>
                          {(handleClick, open) => {
                            return (
                              <React.Fragment>
                                <a
                                  href="#0"
                                  className={`block text-white hover:text-white truncate transition duration-150 ${(pathname === '/' || pathname.includes('dashboard')) && 'hover:text-white-200'
                                    }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                  }}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <img src={navItem.icon} style={{ height: '15px' }} />
                                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                        {navItem.name}
                                      </span>
                                    </div>
                                    {/* Icon */}
                                    <div className="flex shrink-0 ml-2">
                                      <svg
                                        className={`w-3 h-3 shrink-0 ml-1 fill-current text-white ${open && 'rotate-180'}`}
                                        viewBox="0 0 12 12"
                                      >
                                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                      </svg>
                                    </div>
                                  </div>
                                </a>
                                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                  <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                    {
                                      navItem.childItem.map((childItem, index) => (
                                        <li className="mb-1 last:mb-0" key={index}>
                                          <NavLink
                                            end
                                            to={childItem.path}
                                            className={({ isActive }) =>
                                              'block text-white  transition duration-150 truncate ' + (isActive ? '!text-secondary' : '')
                                            }
                                          >
                                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                              {childItem.name}
                                            </span>
                                          </NavLink>
                                        </li>
                                      ))
                                    }


                                  </ul>
                                </div>
                              </React.Fragment>
                            );
                          }}
                        </SidebarLinkGroup>
                        :
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  ${pathname === navItem.path && 'bg-black bg-opacity-50'}`}>
                          <NavLink
                            end
                            to={navItem.path}
                            className={({ isActive }) =>
                              'block text-white hover:text-white transition duration-150 truncate ' + (isActive ? '!text-secondary' : '')
                            }
                          >
                            <div className="flex items-center justify-between">
                              <div className="grow flex items-center">
                                <img src={navItem.icon} style={{ height: '15px' }} />
                                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                  {navItem.name}
                                </span>
                              </div>
                              {/* <div className="flex flex-shrink-0 ml-2">
                                <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                              </div> */}
                            </div>
                          </NavLink>
                        </li>
                    }
                  </div>
                ))
              }

            </ul>
          </div>
        </div>

        <div className="pt-3 justify-end mt-auto">
          <div className='pb-5 flex items-center'>
            <img src={user?.profilePicture.url} className="h-[50px] w-[50px] rounded-full" />
            <div className='flex flex-col ml-2'>
              <span className='text-sm text-white -mb-1'>{user?.fullName}</span>
              <span
                className='text-sm text-secondary cursor-pointer'
                onClick={handleLogout}
              >Sign out</span>
            </div>
          </div>

          <div className="px-3 py-2  hidden lg:inline-flex 2xl:hidden ">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
