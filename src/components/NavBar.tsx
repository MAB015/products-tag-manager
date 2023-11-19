import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='w-full px-[20px] h-[60px] py-2 bg-primary text-white fixed left-0 right-0 top-0 z-9'>
            <ul className='flex justify-between items-center'>
                <li>
                    <NavLink to="/" >
                        <img src='./assets/wizybot-logo.png' alt='wizybot logo' width={140}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#" >
                        <div className='border-2 rounded-full p-2'>
                            SM
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar