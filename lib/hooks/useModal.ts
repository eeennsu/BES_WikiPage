import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { UseModalStoreType } from '@/zustand/modal/types';
import { shallow } from 'zustand/shallow';
import useModalStore from '@/zustand/modal/useModalStore';

const useModal = () => {
    const { 
        isModalOpen, setIsModalOpen,
        modalContent, setModalContent
    } = useModalStore(state => ({
        isModalOpen: state.isModalOpen, setIsModalOpen: state.setIsModalOpen,
        modalContent: state.modalContent, setModalContent: state.setModalContent
    }), shallow);

    const closeModal = useCallback(
        () => setIsModalOpen(false), 
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