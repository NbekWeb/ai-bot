'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, message } from 'antd';
import type { UploadFile, RcFile } from 'antd/es/upload/interface';
import Image from 'next/image';
import BackIcon from "@/components/icons/back";
import Plus from "@/components/icons/plus"
import Delete from "@/components/icons/delete"


export default function UploadPage() {
    const router = useRouter();
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const goNext = () => {
        if (fileList.length < 5) {
        }
        else {

            router.push('/dashboard/main');
        }
    };

    const goBack = () => {
        router.push('/dashboard/gender');
    };


    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }

        setPreviewImage(file.url || (file.preview as string));
    };

    const handleChange = ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
        const mergedList = [...fileList, ...newFileList.filter(newFile => !fileList.some(file => file.uid === newFile.uid))];
        setFileList(mergedList.slice(0, 5))
    };

    const uploadButton = (
        <div className="flex flex-col items-center text-sm ">
            <div className="w-10 h-10 rounded-full flex items-center justify-center  font-bold">
                <Plus className='text-dark-200 text-3xl' />
            </div>

        </div>
    );

    return (
        <div className="flex flex-col flex-grow  ">
            <button onClick={goBack} className="rounded-btn rounded-lg w-8 h-8 flex items-center justify-center bg-white">
                <BackIcon />
            </button>

            <h2 className="text-3xl mt-10 font-bold font-urbanist text-center">
                Загрузка профиля
            </h2>
            <p className="text-center pt-2.5 mb-7 px-16 font-medium text-sm text-gray-400">
                Вы можете загрузить до 5-ти фотографий в профиль
            </p>
            <div className="flex mb-5 flex-wrap gap-2.5 justify-center min-h-[218px] ">

                {fileList.map((file) => {
                    const preview = file.url || file.preview || (file.originFileObj && URL.createObjectURL(file.originFileObj));

                    return (
                        <div key={file.uid} className="relative w-26 h-26 hover:cursor-pointer">
                            {preview && (
                                <Image
                                    src={preview}
                                    alt="preview"
                                    fill
                                    className="rounded-2xl object-cover"
                                    onClick={() => handlePreview(file)}
                                />
                            )}
                            <button
                                onClick={() =>
                                    setFileList(fileList.filter((item) => item.uid !== file.uid))
                                }
                                className="absolute hover:text-red-700 transition-all duration-300 hover:cursor-pointer top-1.5 backdrop-blur-sm right-1.5 bg-white/5 text-white rounded-full w-7 h-7 text-sm flex items-center justify-center"
                            >
                                <Delete />
                            </button>
                        </div>
                    );
                })}


                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={() => false}
                    showUploadList={false}
                    maxCount={5}
                    multiple
                    onRemove={(file) => {
                        setFileList(fileList.filter((item) => item.uid !== file.uid));
                    }}
                >
                    {fileList.length < 5 ? uploadButton : null}
                </Upload>
            </div>
            <input type='text' placeholder='Введите название профиля' className='w-full h-11 rounded-lg px-6 bg-white-200 font-medium hover:border-none outline-none text-dark-200 main-input mb-4' />
            <div className='mt-auto mb-10 text-gray-400 '>
                <p className='text-center  font-semibold text-sm mb-4'>Загрузите минимум 5 фотографий</p>
                <button
                    onClick={goNext}
                    className={`h-14 font-semibold font-urbanist capitalize flex justify-center items-center w-full border-2 rounded-4xl text-white transition-all duration-300 ${fileList.length < 5
                        ? 'bg-gray-700/30 hover:cursor-not-allowed'
                        : 'border-dark-200 hover:bg-white hover:text-dark-200 bg-dark-200 hover:cursor-pointer'
                        }`}
                >
                    загрузить

                </button>
            </div>
        </div>
    );
}
