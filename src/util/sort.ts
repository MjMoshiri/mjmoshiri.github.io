import {IDataItem} from "../types";

function sortItemsBySubcategory(items: IDataItem[], subcategories: string[]): IDataItem[] {

    const getSortOrder = (subcategory: string) => {
        const index = subcategories.indexOf(subcategory);
        return index === -1 ? subcategories.length : index;
    };
    items.sort((a, b) => {
        if (a.subcategory! === 'Others') {
            return 1;
        }
        if (b.subcategory! === 'Others') {
            return -1;
        }
        const sortOrderA = getSortOrder(a.subcategory!);
        const sortOrderB = getSortOrder(b.subcategory!);
        if (sortOrderA === sortOrderB) {
            return a.name.localeCompare(b.name);
        }
        return sortOrderA - sortOrderB;
    });
    return items;
}

export default sortItemsBySubcategory;
