import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { UseModalStoreType } from '@/zustand/modal/types';
import { shallow } from 'zustand/shallow';
import useModalStore from '@/zustand/modal/useModalStore';
import useContentStore from '@/zustand/content/useContentStore';

const useModal = () => {
    const { 
        isModalOpen, setIsModalOpen,
        modalContent, setModalContent
    } = useModalStore((state) => ({
        isModalOpen: state.isModalOpen, setIsModalOpen: state.setIsModalOpen,
        modalContent: state.modalContent, setModalContent: state.setModalContent
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
        (modalContent: React.ReactNode) => {
            setIsModalOpen(true),
            setModalContent(modalContent);
        },
        [setIsModalOpen]
    );
  
    return { isModalOpen, closeModal, openModal, modalContent };
};

export default useModal;