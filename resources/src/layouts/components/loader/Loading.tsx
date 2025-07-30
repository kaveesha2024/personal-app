import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className={'flex justify-center items-center'}>
            <div
                className={`w-[30px] h-[30px] border-3 border-b-accent1 border-t-accent1 border-gray-50 animate-spin rounded-full`}
            ></div>
        </div>
    );
};

export default Loading;
