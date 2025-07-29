'use client';
import React, { use } from 'react';

const Page = (promiseParams: { params: Promise<{ course: string }> }) => {
    const course: { course: string } = use(promiseParams.params);
    return <div>hello {course.course}</div>;
};

export default Page;
