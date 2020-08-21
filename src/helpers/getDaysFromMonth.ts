import { months } from "moment";

const getDaysFromfMonth = (month: number) => {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        case 1:
            return 28;
        default:
            throw new Error("Number of month invalid");
    }
};

export default getDaysFromfMonth;