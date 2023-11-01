import { billAPI } from '@/util/API/Bill';
import { errorNotification, successNotification } from '@/util/Notification';
import { useSearchParams } from "next/navigation";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
export const Comment = ({ ...props }: { rate: any, className?: string }) => {
    const search = useSearchParams();
    const id = search.get('id');
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        if (value != "<p><br></p>") {
            billAPI.updateRateAndReview(Number(id), Number(props.rate), value).then(rs => {
                successNotification("Cảm ơn bạn đã đánh giá 💕")
                setTimeout(() => {
                    window.location.href = "/"
                }, 2000)
            }).catch(e => errorNotification(e))
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