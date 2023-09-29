'use client'

import '../../globals.css';
import Slidemenu from "@/app/(home)/user/slidemenu";
import React from "react";

// export const metadata = {
//     title: 'Next.js',
//     description: 'Generated by Next.js',
// }

export default function RegisterLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-4">
                    {/* Cột 1: Slidemenu */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-2">
                        <div className="p-4">
                            <Slidemenu />
                        </div>
                    </div>

                    {/* Cột 2: Children */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-7">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}