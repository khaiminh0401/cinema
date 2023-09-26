import React, {useEffect, useRef, useState} from "react";
import CropperModal from './cropperModal';
import {Input, InputRef} from "antd";
import "./index.css";
import {FaUpload} from "react-icons/fa6";
import {useSession} from "next-auth/react";
import {User} from "next-auth";
// Container
const ChangeAvatar = (props: any) => {
    // image src
    const [src, setSrc] = useState<string | null>(null);

    // preview
    const [preview, setPreview] = useState<string | null>(null);

    // modal state
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    // ref to control input element
    const inputRef = useRef<HTMLInputElement | null>(null);

    // file name
    const [fileName, setFileName] = useState<string | null>(null);

    const { data: session }  = useSession();

    const { userId } = props;

    // handle Click
    const handleInputClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    // handle Change
    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSrc(URL.createObjectURL(e.target.files[0]));
            setFileName(e.target.files[0].name);
            setModalOpen(true);
        }

        // console.log(session?.user?.id);
    };

    return (
        <>
            <CropperModal
                modalOpen={modalOpen}
                src={src || ''}
                setPreview={setPreview}
                setModalOpen={setModalOpen}
                avatar={fileName || ''}
                userId={userId}
            />
            <div className="img-container">
                <img
                    src={
                        preview ||
                        "https://www.scdata.ai/public/images/user.png"
                    }
                    alt=""
                    width="200"
                    height="200"
                    style={{borderRadius: "150px"}}
                />
            </div>

            <div className="mt-3">
                <Input type="file"
                       id={"uploadBtn"}
                       accept="image/*"
                       ref={inputRef as React.MutableRefObject<InputRef | null>}
                       bordered={false}
                       onChange={handleImgChange}
                />
                <label
                    className={`lblUpload d-inline-block text-sm text-center px-16 py-2
                        flex items-center w-fit hover:scale-105`}
                    htmlFor={"uploadBtn"}
                >
                    <FaUpload/><span className={"ms-3"}>Tải ảnh lên</span>
                </label>

                <br/>
                <small>
                    Dung lượng file tối đa 10 MB <br/>
                    Định dạng:.JPEG, .PNG, .JPG
                </small>
            </div>
        </>
    );
};

export default ChangeAvatar;
