import * as z from 'zod';

export const UserFormSchema = z.object({   
    email: z.string().email({ message: 'name@example.com 의 형식으로 입력해주세요.' }),
    password: z.string().min(9, { message: '최소 9자를 입력해주세요.' }).max(20, { message: '최대 20까지 입력가능합니다' }).trim(),
    confirmPassword: z.string().min(9, { message: '최소 9자를 입력해주세요.' }).max(20, { message: '최대 20까지 입력가능합니다' }).trim(),
}).refine(
    (data) => data.password === data.confirmPassword, 
    {
        message: '비밀번호가 일치하지 않습니다',
        path: ['confirmPassword']
    }
);

export type UserForm = z.infer<typeof UserFormSchema>;