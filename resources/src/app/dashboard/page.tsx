'use client';
import React from 'react';
import DashboardSideNavBar from '@/layouts/dashboard/DashboardSideNavBar';
import { useCheckUser } from '@/hooks/useCheckUser';
const Page: React.FC = () => {
    useCheckUser();
    return (
        <div className={'w-full h-screen bg-gray-50'}>
            <DashboardSideNavBar />
        </div>
    );
};

export default Page;
