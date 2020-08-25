const getDateFromKeyword = (keyword: string) => {
    const today = new Date();
    switch (keyword) {
        case "today":
            return today;
        case "tomorrow":
            return new Date(
                `${today.getFullYear()}-${today.getMonth()+1}-${
                    today.getDate() + 1
                }`
            );
        default:
            throw new Error("Keyword type error");
    }
};

export { getDateFromKeyword };
