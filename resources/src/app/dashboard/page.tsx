'use client';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import DashboardSideNavBar from '@/layouts/dashboard/DashboardSideNavBar';
const Page: React.FC = () => {
    useEffect((): undefined => {
        const token: string | undefined = Cookies.get('token');
        if (!token) return redirect('/auth/login');
    }, []);
    return (
        <div className={'w-full h-screen bg-gray-50'}>
            <DashboardSideNavBar />
        </div>
    );
};

export default Page;
