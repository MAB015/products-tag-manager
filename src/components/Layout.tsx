import NavBar from './NavBar'
import SideBar from './SideBar'
import { FC, PropsWithChildren } from 'react'

export const Layout: FC <PropsWithChildren> = ({ children  }) => {
    return (
        <div className='flex flex-col w-full h-full bg-bgContent'>
            <NavBar />
            <div className='flex'>
                <SideBar />
                <div className='flex w-full pl-[60px] fixed left-0 right-0 top-0 py-[60px]'>
                    { children }
                </div>
            </div>
        </div>
    )
}
