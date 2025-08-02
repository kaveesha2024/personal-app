import React from 'react';
interface IFormHeroSectionPropType {
    title?: string;
    description?: string;
}
const FormHeroSection: React.FC<IFormHeroSectionPropType> = ({ title, description }) => {
    return (
        <div className={'flex flex-col gap-3'}>
            <h1 className={'text-center text-2xl text-accent1 font-bold'}>{title}</h1>
            <p className={'text-center text-black/70'}>{description}</p>
        </div>
    );
};

export default FormHeroSection;
