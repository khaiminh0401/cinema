import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"]
    ],
};
export const Comment = ({ ...props }: { className?: string }) => {
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        if (value.length > 0 && value != "<p><br></p>") {
            alert(value);
        }
    };
    return (
        <div className={props.className}>
            <div className='bg-white text-black py-2'>
                <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} placeholder='Viết bình luận...' />
                <p className='text-right pt-2'>
                    <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg' onClick={handleSubmit}>Bình luận</button>
                </p>
            </div>
        </div >
    )
}