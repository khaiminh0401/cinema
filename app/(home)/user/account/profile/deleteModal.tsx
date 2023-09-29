import {Modal, Button} from 'antd';
import {customerAPI} from "@/util/API/Customer";
import {errorNotification, successNotification} from "@/util/Notification";

const {confirm} = Modal;

const showDeleteConfirm = (customerId: number, avatar: string) => {
    const handleClick = async (customerId: number, avatarDelete: string) => {
        await customerAPI.deleteAvatar(customerId, avatarDelete).then(() => {
            successNotification("Xóa ảnh đại diện thành công")
        }).catch(() => {
            errorNotification("Xóa ảnh đại diện thất bại. Vui lòng thử lại")
        })
    }

    confirm({
        title: 'Xóa ảnh',
        content: 'Bạn có chắc muốn xóa ảnh đại diện hiện tại không?',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            handleClick(customerId, avatar)
        },
        onCancel() {
            () => {
            }
        },
    });
}


export default showDeleteConfirm;