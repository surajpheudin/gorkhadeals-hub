export const formatDaysAgo = (date: Date) => {
    const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
    const formatter = new Intl.RelativeTimeFormat("en-us");

    return formatter.format(Math.round(deltaDays), "days");
};
