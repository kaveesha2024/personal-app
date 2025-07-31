'use client';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { redirect, useRouter } from 'next/navigation';
import getUserApi from '@/apiCalls/auth/getUserApi';
import toast from 'react-hot-toast';

export const useCheckUser = (): void => {
    const router = useRouter();
    useEffect((): void => {
        async function getUerDetails(): Promise<void> {
            const token: string | undefined = Cookies.get('token');
            if (token === undefined) return redirect('/');
            try {
                const response = await getUserApi();
                if (response.data.status) {
                    const user = response.data.message;
                    if (user.is_blocked === 1) {
                        toast.error('Your account is blocked');
                        router.push('/');
                        return;
                    }
                    return;
                }
                router.push('/auth/login');
            } catch (e) {
                console.log(e);
            }
        }
        getUerDetails();
    }, []);
};
