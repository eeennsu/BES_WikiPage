import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { UseModalStoreType } from '@/zustand/modal/types';
import { shallow } from 'zustand/shallow';
import useModalStore from '@/zustand/modal/useModalStore';

const useModal = () => {
    const { 
        isModalOpen, setIsModalOpen,
        modalTitle, setModalTitle, 
        modalContent, setModalContent
    } = useModalStore(state => ({
        isModalOpen: state.isModalOpen, setIsModalOpen: state.setIsModalOpen,
        modalTitle: state.modalTitle, setModalTitle: state.setModalTitle, 
        modalContent: state.modalContent, setModalContent: state.setModalContent
    }), shallow);

    const closeModal = useCallback(
        () => setIsModalOpen(false), 
        [setIsModalOpen]
    );
  
    const openModal = useCallback(
        ({ modalTitle, modalContent }: Pick<UseModalStoreType, 'modalTitle' | 'modalContent'>) => {
            setIsModalOpen(true),
            setModalTitle(modalTitle),
            setModalContent(modalContent);
        },
        [setIsModalOpen]
    );
  
    return { isModalOpen, closeModal, openModal, modalTitle, modalContent };
};

export default useModal;