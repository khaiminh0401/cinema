export interface CropperModalProps {
    src: string | null;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setPreview: React.Dispatch<React.SetStateAction<string | null>>;
    avatar: string
}