export const filterList = (list: any[], type: string) => {
    switch (type) {
        case "all":
            return list;
        case "important":
            return list.filter(item => item.important);
        case "unimportant":
            return list.filter(item => !item.important);
        default:
            return list;
    };
}