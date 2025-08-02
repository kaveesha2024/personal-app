import React, { ChangeEvent, useState } from 'react';
import { IoClose, IoVideocamOutline } from 'react-icons/io5';
import FormHeroSection from '@/layouts/components/formHeroSection/FormHeroSection';
import { FaBookmark } from 'react-icons/fa';
import SubmitButton from '@/layouts/components/button/submitButton';
import { MdOutlineContentPaste } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';
import {
    ICreateNewLessonFormInputsType,
    ICreateNewLessonInputDetails,
    ICreateNewLessonSectionPropType,
} from '@/types/courses/courses';
import { createNewLessonFormInputs } from '@/constants/dashboard/courses/courses';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import Cookies from 'js-cookie';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
interface IVideoInputType {
    video: FileList | undefined;
}
const CreateNewLessonSection: React.FC<ICreateNewLessonSectionPropType> = ({
    setIsCreateLessonFormOpen,
}) => {
    const [createNewLessonInputDetails, setCreateNewLessonInputDetails] =
        useState<ICreateNewLessonInputDetails>({
            content: '',
            lesson_name: '',
        });
    const [video, setVideo] = useState();
    const handleInputFields = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setCreateNewLessonInputDetails({
            ...createNewLessonInputDetails,
            [name]: value,
        });
    };
    return (
        <div
            onClick={() => setIsCreateLessonFormOpen(false)}
            className={
                'backdrop-blur-xs w-[100vw] h-[100vh] fixed bg-black/50 flex justify-center items-center'
            }
        >
            <div
                onClick={event => event.stopPropagation()}
                className={'bg-white w-[500] relative rounded-2xl p-5'}
            >
                <button
                    className={
                        'absolute top-0 -right-15 rounded-full bg-white w-10 h-10 flex justify-center items-center hover:bg-accent2 transition duration-200 hover:text-white text-xl text-accent1 cursor-pointer'
                    }
                    onClick={() => setIsCreateLessonFormOpen(false)}
                >
                    <IoClose />
                </button>
                <section>
                    <FormHeroSection
                        title={'Create New Lesson'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum odit quo reiciendis rem. Ad, alias amet, assumenda dignissimos exercitationem illum minus odit quod, reiciendis rem sed sint soluta tempora?'
                        }
                    />
                    <form className={'flex flex-col gap-4 w-full '}>
                        {createNewLessonFormInputs.map(
                            (field: ICreateNewLessonFormInputsType, index: number) => (
                                <div key={index} className={'flex flex-col w-[300px]'}>
                                    <label
                                        className={'font-semibold tracking-wide'}
                                        htmlFor={field.name}
                                    >
                                        {field.label}
                                    </label>
                                    <div
                                        className={
                                            'w-full flex justify-between items-center px-2 rounded-lg border border-black/20'
                                        }
                                    >
                                        {field.name === 'video' ? (
                                            <IoVideocamOutline />
                                        ) : field.name === 'content' ? (
                                            <MdOutlineContentPaste />
                                        ) : field.name === 'lesson_name' ? (
                                            <GoPencil />
                                        ) : (
                                            <FaBookmark className={'text-xl'} />
                                        )}

                                        <input
                                            className={'w-[250px] p-2 outline-none'}
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            id={field.name}
                                            required={true}
                                            onChange={handleInputFields}
                                        />
                                    </div>
                                </div>
                            ),
                        )}
                        <div className="App">
                            <FilePond
                                files={video}
                                onupdatefiles={setVideo}
                                acceptedFileTypes={['video/mp4']}
                                chunkUploads={true}
                                chunkSize={'1000000'}
                                allowMultiple={false}
                                maxFileSize={'5000MB'}
                                maxFiles={1}
                                server={{
                                    process: {
                                        url: 'http://localhost:8000/api/courses/lessons/video_upload',
                                        method: 'POST',
                                        withCredentials: true,
                                        headers: {
                                            Accept: 'application/json',
                                            Authorization: 'Bearer ' + Cookies.get('token'),
                                        },
                                        ondata: formData => {
                                            return formData;
                                        },
                                    },
                                    revert: null,
                                }}
                                name="video" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                            />
                        </div>
                        <SubmitButton type={'submit'} buttonName={'Create'} loading={false} />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CreateNewLessonSection;
