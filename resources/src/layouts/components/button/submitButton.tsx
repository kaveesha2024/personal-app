import React from 'react';
import Loading from '@/layouts/components/loader/Loading';
import { ISubmitButtonPropType } from '@/types/component/component';

const SubmitButton: React.FC<ISubmitButtonPropType> = ({ type, buttonName, loading }) => {
    return (
        <button
            className={
                'py-2 px-4 rounded-lg text-white shadow-2xl bg-accent1  my-3 cursor-pointer flex justify-center gap-4 items-center'
            }
            type={type}
        >
            {buttonName} {loading && <Loading />}
        </button>
    );
};

export default SubmitButton;
