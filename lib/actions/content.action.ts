'use server';

import connectToDB from '../db/connectToDB';
import ContentModel from '../models/Content.model';
import UserModel from '../models/User.model';
import { revalidatePath } from 'next/cache';

export const createNewContent = async ({ 
    userId,
    title,
    text,
    subject,
    pathname,
}: {
    userId: string;
    title: string;
    text: string;
    subject: string;
    pathname: string;
}) => {
    try {
        connectToDB();

        const content = await ContentModel.create({
            author: userId,
            title,
            text,
            subject
        });

        if (!content) {
            throw new Error('Failed to create new content');
        }

        await UserModel.findByIdAndUpdate(userId, {
            $push: { contents: content._id }
        });

        revalidatePath(pathname);

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to create new content. error - ${(error as Error).message}`);
    }
}

export const updateContent = async ({ 
    _id,
    title,
    text
}: {
    _id: string;
    title: string;
    text: string;
}) => {
    try {
        connectToDB();
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to update content. error - ${(error as Error).message}`);
    }
}

export const deleteContent = async ({
    _id
}: {
    _id: string;
}) => {
    try {
        connectToDB();
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to delete content. error - ${(error as Error).message}`);
    }
}

export const getContents = async (curPage: number) => {
    try {
        connectToDB();

        const pageSize = 5;
        const skipAmount = (curPage - 1) * pageSize;

        const query = ContentModel.find()
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(pageSize)
            .select(['title', 'subject']);

        const contents = (await query.exec()) as Content[];
        const totalContents = await ContentModel.countDocuments();

        const totalPages = Math.ceil(totalContents / pageSize);
        const hasNext = totalPages > skipAmount + contents.length;

        return {
            contents,
            hasNext,
            totalPages
        };

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get contents. error - ${(error as Error).message}`);
    }
}

export const getDetailContent = async ({ 
    _id 
} : {
    _id: string;
}) => {
    try {
        connectToDB();
    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get detail content. error - ${(error as Error).message}`);
    }
}