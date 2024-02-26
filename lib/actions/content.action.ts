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
    price,
    pathname,
}: {
    userId: string;
    title: string;
    text: string;
    subject: string;
    teacher: string;
    price?: number,
    pathname: string;
}) => {
    try {
        connectToDB();

        let query: Record<string, number | string> = {
            author: userId,
            title,
            text,
            subject,
            teacher,
        };

        if (price) {
            query = {
                ...query,
                price
            };
        }   

        const content = await ContentModel.create(query);

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
    price,
    pathname
}: {
    contentId: string;
    title: string;
    text: string;
    subject: string;
    teacher: string;
    price?: number;
    pathname: string;
}) => {
    try {
        connectToDB();

        const exists = await ContentModel.findById(contentId);

        exists.title = title;
        exists.text = text;
        exists.subject = subject;
        exists.teacher = teacher;

        if (price) {
            exists.price = price;
        } else {
            exists.unset('price');
        }
    
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
            .select(['title', 'text', 'subject', 'teacher', 'price', 'createdAt']);

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
    subject,
    teacher
}: {
    contentId: string;
    subject?: string;
    teacher?: string;
}) => {
    try {
        connectToDB();

        let query;

        if (subject) {
            query = { 
                _id: { $ne: contentId },
                subject
            };

        } else {            
            query = { 
                _id: { $ne: contentId },
                teacher
            }        
        }    
        
        const relatedContents = (await ContentModel.find(query).select(['title', 'price']).limit(8)) as RelatedContentCardInfo[];
        const allContents = await ContentModel.countDocuments(query);
        const otherCount = allContents - relatedContents.length;
        
        if (!relatedContents) {
            return null;
        } 

        return {
            relatedContents,
            otherCount: otherCount > 0 ? otherCount : null
        } ;

    } catch (error) {
        console.log(error);
        throw new Error(`Faied to get realted contents. error - ${(error as Error).message}`);
    }
}