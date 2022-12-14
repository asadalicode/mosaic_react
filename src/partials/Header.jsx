import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import searchIcon from '../images/icons/searchIcon.svg';

const billingRoutes = ['/admin', '/admin/billingPlans', '/admin/subscription'];


function Header({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const navigate = useNavigate();

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, [])
  const getUser = async () => {
    let _user = await localStorage.getItem("user");
    _user = JSON.parse(_user);
    setUser(_user);
  }

  return (
    <header className="sticky top-0 bg-secondary border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">


          <div className="flex lg:hidden">

            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden mr-2"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>
          <div className='hidden lg:block'>
            <h5 className='text-sm font-bold text-slate-800 -mb-1'>Admin dashboard</h5>
            <span className='text-sm  text-slate-800'>Welcome, {user?.fullName}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div>

              <Input leftIcon={searchIcon} />
            </div>
            {
              billingRoutes.includes(location.pathname)
                ? <Button
                  title={"Add billing plan"}
                  handleClick={() => navigate('/admin/newbillingPlans')}
                />
                : <Button
                  title={"Add new playlist"}
                  handleClick={() => navigate('/playlist/newplaylist')}
                />
            }

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;