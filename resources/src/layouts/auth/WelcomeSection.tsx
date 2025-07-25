import React from 'react';
import Image from 'next/image';
import { IWelcomeSectionPropType } from '@/types/auth/auth';

const WelcomeSection: React.FC<IWelcomeSectionPropType> = ({ sectionName, svg, alt }) => {
    return (
        <div className={'w-[50%] h-[700px] flex flex-col items-center justify-center'}>
            <div className={'w-[70%] flex flex-col items-center gap-5'}>
                <h1 className={'text-3xl font-bold tracking-wider text-accent1 select-none'}>
                    Welcome to {sectionName} Section
                </h1>
                <p className={'text-black/70 block text-center'}>
                    Lorem ipsum dolor sit amet, consectetur radicalising elit. Accusal accusation
                    blandish arum ipsa nemo null edit perspicacity rerun vitae! Accusamus aperiam
                    doloremque dolores fuga Justo molestiae repudiandae similique veniam vero.
                </p>
            </div>
            <div>
                <Image priority={true} src={svg} alt={alt} width={500} height={500} />
            </div>
        </div>
    );
};

export default WelcomeSection;
