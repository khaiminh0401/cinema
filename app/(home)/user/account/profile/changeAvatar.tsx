import React, { useEffect, useRef, useState } from "react";
import CropperModal from './cropperModal';

// Container
const ChangeAvatar = () => {
    // image src
    const [src, setSrc] = useState<string | null>(null);

    // preview
    const [preview, setPreview] = useState<string | null>(null);

    // modal state
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    // ref to control input element
    const inputRef = useRef<HTMLInputElement | null>(null);

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
            setModalOpen(true);
        }
    };

    return (
        <>
            <CropperModal modalOpen={modalOpen} src={src || ''} setPreview={setPreview} setModalOpen={setModalOpen} />
            <div className="img-container">
                <img
                    src={
                        preview ||
                        "https://rcmi.fiu.edu/wp-content/uploads/sites/30/2018/02/no_user.png"
                    }
                    alt=""
                    width="200"
                    height="200"
                    style={{ borderRadius: "150px" }}
                />
            </div>

            <div className="mt-3">
                <input type="file" accept="image/*" ref={inputRef} onChange={handleImgChange} />

                <br />
                <small>
                    Dụng lượng file tối đa 1 MB <br />
                    Định dạng:.JPEG, .PNG
                </small>
            </div>
        </>
    );
};

export default ChangeAvatar;
