import React from 'react';
interface ISubmitButtonPropType {
    type?: 'submit' | 'reset' | 'button' | undefined;
    buttonName?: string;
}
const SubmitButton: React.FC<ISubmitButtonPropType> = ({ type, buttonName }) => {
    return (
        <button
            className={'py-2 px-4 rounded-lg text-white shadow-2xl bg-accent1  my-3 cursor-pointer'}
            type={type}
        >
            {buttonName}
        </button>
    );
};

export default SubmitButton;
