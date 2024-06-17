import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import { ScrollArea } from '@/components/ui/scroll-area';

import React from 'react'

function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-screen flex flex-col">
            <Nav />
            <div className="flex-grow flex overflow-y-scroll scrollbar-hide">
                <Sidebar />
                <div className="w-5/6  bg-black">
                   <ScrollArea className='w-full h-full'>
                   {children}
                   </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default MainLayout