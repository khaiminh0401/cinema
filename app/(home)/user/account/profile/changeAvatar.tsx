import React, {useEffect, useRef, useState} from "react";
import CropperModal from './cropperModal';
import {Input, InputRef} from "antd";
import "./index.css";
import {FaUpload} from "react-icons/fa6";
import {useSession} from "next-auth/react";
import {User} from "next-auth";
import {RiDeleteBin6Line} from "react-icons/ri";

interface ChangeAvatarProps {
    customerId: number,
    keyfacebook?: string,
    avatar: string
}

const ChangeAvatar = ({...props}: ChangeAvatarProps) => {
    // image src
    const [src, setSrc] = useState<string | null>(null);

    // preview
    const [preview, setPreview] =
        useState<string | null>
        (() => {
            if (props.keyfacebook) {
                return props.avatar;
            }

            return `https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/${props.avatar}`;
        });

    // modal state
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    // ref to control input element
    const inputRef = useRef<HTMLInputElement | null>(null);

    // file name
    const [fileName, setFileName] = useState<string | null>(null);

    useEffect(() => {
        setPreview(`https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/${props.avatar}`)
    }, [props.avatar]);
    console.log(preview)

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
    };
    console.log(preview);
    return (
        <section className={"flex justify-center items-center md:block"}>
            <CropperModal
                modalOpen={modalOpen}
                src={src || ''}
                setPreview={setPreview}
                setModalOpen={setModalOpen}
                avatar={fileName || ''}
                userId={props.customerId}
            />
            <div className="relative mb-10">
                <img
                    src={
                        preview ||
                        "https://www.scdata.ai/public/images/user.png"
                    }
                    alt=""
                    width="200"
                    height="200"
                    className={"rounded-full"}
                />

                <button className="bottom-0 left-36 absolute w-50 h-50 rounded-full">
                    <RiDeleteBin6Line/>
                </button>
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
                   <FaUpload/><span className={"ms-3 hidden lg:block"}>Tải ảnh lên</span>
                </label>

                <br/>
                <small>
                    Dung lượng file tối đa 10 MB <br/>
                    Định dạng:.JPEG, .PNG, .JPG
                </small>
            </div>
        </section>
    );
};

export default ChangeAvatar;
