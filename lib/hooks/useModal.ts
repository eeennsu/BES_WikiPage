import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';
import useModalStore from '@/zustand/modal/useModalStore';
import useContentStore from '@/zustand/content/useContentStore';

type MaxModalWidth = 'max-w-max' | 'max-w-xl' | 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl';

const useModal = () => {

    const { 
        isModalOpen, setIsModalOpen,
        modalContent, setModalContent,
        modalMaxWidth, setModalMaxWidth
    } = useModalStore((state) => ({
        isModalOpen: state.isModalOpen, setIsModalOpen: state.setIsModalOpen,
        modalContent: state.modalContent, setModalContent: state.setModalContent,
        modalMaxWidth: state.modalMaxWidth, setModalMaxWidth: state.setModalMaxWidth
    }), shallow);

    const initForm = useContentStore(state => state.initForm);
    const getIsFormWritten = useContentStore(state => state.getIsFormWritten);

    const closeModal = useCallback(
        () => {
            setIsModalOpen(false)
            getIsFormWritten() && initForm();        // 폼 내용이 써져있을 때만 초기화
        }, 
        [setIsModalOpen]
    );
  
    const openModal = useCallback(
        (modalContent: React.ReactNode, maxModalWidth: MaxModalWidth = 'max-w-max') => {
            setIsModalOpen(true),
            setModalContent(modalContent);
            setModalMaxWidth(maxModalWidth);
        },
        [setIsModalOpen]
    );
  
    return { isModalOpen, closeModal, openModal, modalContent, modalMaxWidth };
};

export default useModal;