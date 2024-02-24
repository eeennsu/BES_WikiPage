export type UseModalStoreType = {
    isModalOpen: boolean;
    setIsModalOpen: (trigger: boolean) => void;

    modalContent: React.ReactNode;
    setModalContent: (content: React.ReactNode) => void;
}