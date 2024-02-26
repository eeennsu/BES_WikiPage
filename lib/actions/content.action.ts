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
    teacher,
    pathname,
}: {
    userId: string;
    title: string;
    text: string;
    subject: string;
    teacher: string;
    pathname: string;
}) => {
    try {
        connectToDB();

        const content = await ContentModel.create({
            author: userId,
            title,
            text,
            subject,
            teacher
        });

        if (!content) {
            throw new Error('Failed to create new content');
        }

        await UserModel.findByIdAndUpdate(userId, {
            $push: { contents: content._id }
        });

        revalidatePath(`${pathname}?page=1`);           // 새글 생성후 첫 페이지로 이동

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to create new content. error - ${(error as Error).message}`);
    }
}

export const updateContent = async ({ 
    contentId,
    title,
    text,
    subject,
    teacher,
    pathname
}: {
    contentId: string;
    title: string;
    text: string;
    subject: string;
    teacher: string;
    pathname: string;
}) => {
    try {
        connectToDB();

        const exists = await ContentModel.findById(contentId);

        exists.title = title;
        exists.text = text;
        exists.subject = subject;
        exists.teacher = teacher;

        await exists.save();

        revalidatePath(pathname);           // 수정후 경로 재검증 (데이터 업데이트)

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to update content. error - ${(error as Error).message}`);
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
            .select(['title', 'text', 'subject', 'teacher', 'price']);

        const contents = (await query.exec()) as ContentCardInfo[];
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

export const getDetailContent = async (contentId: string) => {
    try {
        connectToDB();

        const content = (await ContentModel.findById(contentId)) as Content;
    
        if (!content) {
            return null;
        }
     
        return content;

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get detail content. error - ${(error as Error).message}`);
    }
}

export const deleteOneContent = async (contentId: string) => {
    try {
        connectToDB();

        const content = await ContentModel.deleteOne({ _id: contentId });

        revalidatePath('/');

        return Boolean(content);

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get delete content. error - ${(error as Error).message}`);
    }
}

export const getRelatedContents = async ({
    contentId,
    subject
} : {
    contentId: string;
    subject: string;
}) => {
    try {
        connectToDB();

        const relatedContents = await ContentModel
            .find({ 
                _id: { $ne: contentId },
                subject
            })
            .select(['title', 'teacher'])
            .limit(10);
        
        if (!relatedContents) {
            return null;
        } 

        return relatedContents as Content[];

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get realted contents. error - ${(error as Error).message}`);
    }
}