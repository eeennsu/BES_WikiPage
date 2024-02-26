export type UseContentStoreType = {
    title: string;
    setTitle: (value: string) => void;

    text: string;
    setText: (value: string) => void;

    selectedSubject: string;
    setSelectedSubject: (value: string) => void;

    teacher: string;
    setTeacher: (value: string) => void;

    price: number,
    setPrice: (price: number) => void;
    setFree: () => void;

    getIsFormWritten: () => boolean;
    initForm: () => void;
}