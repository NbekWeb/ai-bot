'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, Modal } from 'antd';
import type { UploadFile, RcFile } from 'antd/es/upload/interface';
import Image from 'next/image';
import BackIcon from "@/components/icons/back";

export default function UploadPage() {
    const router = useRouter();
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const goNext = () => {
        router.push('/');  // Navigates to the home page or another page
    };

    const goBack = () => {
        router.push('/dashboard/gender');  // Navigates back to the gender dashboard page
    };

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
        setFileList(fileList);
    };

    const uploadButton = (
        <div className="flex flex-col items-center text-sm text-gray-600">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">+</div>
            <div className="mt-1">Загрузить</div>
        </div>
    );

    return (
        <div className="p-4">
            <button onClick={goBack} className="rounded-btn rounded-lg w-8 h-8 flex items-center justify-center bg-white">
                <BackIcon />
            </button>

            <h2 className="text-3xl mt-10 font-bold font-urbanist text-center">
                Загрузка профиля
            </h2>
            <p className="text-center pt-2.5 mb-7 px-16 font-medium text-sm text-gray-400">
                Вы можете загрузить до 5-ти фотографий в профиль
            </p>

            <div className="flex justify-center">
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={() => false}
                    maxCount={1}
                    onRemove={(file) => {
                        setFileList(fileList.filter((item) => item.uid !== file.uid));
                    }}
                >
                    {fileList.length < 5 ? uploadButton : null}
                </Upload>
                <Modal open={previewOpen} title="Превью" footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        </div>
    );
}
