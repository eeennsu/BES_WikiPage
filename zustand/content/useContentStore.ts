import type { UseContentStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';
import { selectSubjects } from '@/constants';

const useContentStore = createWithEqualityFn<UseContentStoreType>()(
    devtools(
        (set, get) => ({
            title: '',
            setTitle: (value: string) => set(() => ({ title: value }), false, 'SET_TITLE'),
            
            text: '',
            setText: (value: string) => set(() => ({ text: value }), false, 'SET_TEXT'),

            selectedSubject: selectSubjects[0],
            setSelectedSubject: (value: string) => set(() => ({ selectedSubject: value }), false, 'SET_SELECTED_SUBJECT'),

            teacher: '',
            setTeacher: (value: string) => set(() => ({ teacher: value }), false, 'SET_TEACHER'),

            price: 10000,
            setPrice: (price: number) => set(() => ({ price }), false, 'SET_PRICE'),
            setFree: () => set(() => ({ price: 0 }), false, 'SET_FREE'),

            getIsFormWritten: () => {
                const curState = get();
                return curState.title !== '' || curState.text !== '' || curState.selectedSubject !== '' || curState.teacher !== '';
            },

            initForm: () => set(() => ({
                title: '',
                text: '',
                selectedSubject: selectSubjects[0],
                teacher: '',
            }), false, 'INIT_FORM')
        })
    )
);

export default useContentStore;