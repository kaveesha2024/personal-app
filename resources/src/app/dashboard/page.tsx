'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

const Page: React.FC = () => {
    useEffect((): void => {
        const token: string | undefined = Cookies.get('token');
        if (token === undefined) return redirect('/');
    }, []);
    return <div>Dashboard</div>;
};

export default Page;
