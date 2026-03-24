export function ValidLink(url: string) : boolean {
    const linkRegex = /^(https?:\/\/)?(www\.)?[-A-Z0-9+&@#\/%=~_|$?!:,.]+\.[A-Z]{2,}(\/.*)?$/i;
    return linkRegex.test(url);
}