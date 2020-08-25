import { getDateFromKeyword } from "./getDateFromKeyword";
const filterTasks = (tasks: any[], time: string) => {
    const date = getDateFromKeyword(time);

    const tasksFiltered = tasks.filter((item) => {
        const splitedDate = item.date.split("/");
        const taskDate = new Date(
            `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`
        );

        if (
            date.getDate() === taskDate.getDate() &&
            date.getMonth() === taskDate.getMonth() &&
            date.getFullYear() === taskDate.getFullYear()
        ) {
            return item;
        }
    });
    
    return tasksFiltered
};

export { filterTasks };
