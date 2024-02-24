export type UseModalStoreType = {
    isModalOpen: boolean;
    setIsModalOpen: (trigger: boolean) => void;

    modalTitle: string;
    setModalTitle: (title: string) => void;

    modalContent: React.ReactNode;
    setModalContent: (content: React.ReactNode) => void;
}