import { NavLink } from 'react-router-dom'
import { IconHome, IconMessage, IconTag, IconTicket, IconUsers } from './Icon'

const SideBar = () => {
    return (
        <nav className='px-[20px] bg-primary text-white fixed left-0 top-[60px] bottom-0'>
            <ul className='flex flex-col gap-10 py-6'>
                <li>
                    <NavLink to="/">
                        <IconHome />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" >
                        <IconMessage />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tickets" >
                        <IconTicket />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tag-manager" >
                        <IconTag />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" >
                        <IconUsers />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar