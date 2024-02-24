'use server';

export const createNewContent = ({ 
    title,
    text
}: {
    title: string;
    text: string;
}) => {
    try {
        // await
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to create new content. error - ${(error as Error).message}`);
    }
}

export const updateContent = ({ 
    _id,
    title,
    text
}: {
    _id: string;
    title: string;
    text: string;
}) => {
    try {
        // await
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to update content. error - ${(error as Error).message}`);
    }
}

export const deleteContent = ({
    _id
}: {
    _id: string;
}) => {
    try {
        // await 
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to delete content. error - ${(error as Error).message}`);
    }
}

export const getContents = () => {
    try {
        
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get contents. error - ${(error as Error).message}`);
    }
}

export const getDetailContent = ({ 
    _id 
} : {
    _id: string;
}) => {
    try {
        
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get detail content. error - ${(error as Error).message}`);
    }
}