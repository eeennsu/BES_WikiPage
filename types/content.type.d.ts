type Content = {
    _id: string;                        // 강의 콘텐츠 mongo id
    author: string;                     // 글 작성자
    title: string;                      // 강의 콘텐츠 제목
    text: string;                       // 강의 콘텐츠 설명
    subject: string;                    // 강의 콘텐츠 주제
    teacher: string;                    // 강의 콘텐츠 선생님
    createdAt: string;                  // 강의 콘텐츠 생성일
    updatedAt?: string;                 // 수정시 생성일
    price: number;                     // 가격이 없으면 무료
}

type ContentCardInfo = Pick<Card, '_id' | 'title' | 'subject' | 'teacher' | 'price' | 'text' | 'createdAt'>

type RelatedContentCardInfo = Pick<Card, '_id' | 'title' | 'price'>