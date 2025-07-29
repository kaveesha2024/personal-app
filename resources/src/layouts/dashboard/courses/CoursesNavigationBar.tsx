import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';

const CoursesNavigationBar: React.FC = () => {
    const path: string[] = usePathname().split('/');
    const route = useRouter();
    const handleNavigation = (url: string): void => {
        const index = path.indexOf(url);
        const newPath: string[] = [];
        if (index === -1) return;
        for (let i: number = 0; i <= index; i++) {
            newPath.push(path[i]);
        }
        route.push(newPath.join('/'));
    };
    return (
        <div className={'w-full h-[50px] flex justify-end gap-2'}>
            <span className={'flex items-center justify-center gap-2'}>
                <IoHomeSharp className={'text-md text-accent2'} />
            </span>
            {path.length > 1 &&
                path.map((url: string, index: number) => (
                    <button
                        className={`items-center justify-center capitalize gap-2 cursor-pointer ${''}`}
                        key={index}
                        onClick={() => handleNavigation(url)}
                    >
                        <span className={'hover:text-accent3 '}>{url}</span>{' '}
                        <span className={'cursor-default'}>
                            {index === path.length - 1 ? '' : '~'}
                        </span>
                    </button>
                ))}
        </div>
    );
};

export default CoursesNavigationBar;
