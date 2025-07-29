import React from 'react';
import { FaBookmark, FaBookOpen } from 'react-icons/fa';
import { BsFillHouseDashFill } from 'react-icons/bs';
import { IoIosVideocam, IoMdSettings } from 'react-icons/io';
import { LuCalendarHeart } from 'react-icons/lu';
import { PiCertificateFill } from 'react-icons/pi';
import { IoLogOut, IoPerson } from 'react-icons/io5';
import { TbHelpCircleFilled } from 'react-icons/tb';
import { ILinksType } from '@/types/dashboard/dashboard';

export const upper: ILinksType[] = [
    {
        name: 'Home',
        link: '/',
        icon: <BsFillHouseDashFill />,
    },
    {
        name: 'Courses',
        link: '/dashboard/courses',
        icon: <FaBookOpen />,
    },
    {
        name: 'Bookmarks',
        link: '/bookmarks',
        icon: <FaBookmark />,
    },
    {
        name: 'Events',
        link: '/events',
        icon: <LuCalendarHeart />,
    },
    {
        name: 'Tutorials',
        link: '/tutorials',
        icon: <IoIosVideocam />,
    },
    {
        name: 'Certifications',
        link: '/certifications',
        icon: <PiCertificateFill />,
    },
    {
        name: 'Portfolio',
        link: 'https://google.com',
        icon: <IoPerson />,
    },
];
export const lower: ILinksType[] = [
    {
        name: 'Settings',
        link: '/dashboard',
        icon: <IoMdSettings />,
    },
    {
        name: 'Help Center',
        link: '/help_center',
        icon: <TbHelpCircleFilled />,
    },
    {
        name: 'Logout',
        link: '/auth/logout',
        icon: <IoLogOut />,
    },
];
