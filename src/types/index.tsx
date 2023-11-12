
export enum Category {
    Projects = "Projects",
    Skills = "Skills",
    Education = "Education",
    Experience = "Experience",
}

export interface IDataItem {
    name: string;
    description?: string;
    url?: string;
    category?: Category;
    subcategory?: string;
    date?: string;
    tags: string[];
}

export interface ItemListProps {
    items: IDataItem[];
    title: string;
}