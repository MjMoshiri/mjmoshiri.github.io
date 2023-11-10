export type Category = "Projects" | "Skills" | "Education" | "Experience" | "Course";

export interface IDataItem {
    name: string;
    description: string;
    url: string;
    category?: Category;
    subcategory?: string;
    date?: string;
    tags: string[];
}
