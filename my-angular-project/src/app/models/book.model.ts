export interface Book {
    readonly id: number;
    readonly title: string;
    readonly author: string;
    readonly description: string;
}

export const DefaultBook: Book = {
    id: 0,
    title: '',
    author: '',
    description: '',
};
