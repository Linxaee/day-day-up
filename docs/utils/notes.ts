import * as fs from "fs";
import { NavBarItem, LinkItem } from "./types";
import { getBaseName, getDirName } from "./path";
export interface File {
    name: string;
    path: string;
    isDirectory: boolean;
    children: File[];
}
function readDirectory(directoryPath: string, isTB: true): NavBarItem;
function readDirectory(directoryPath: string, isTB: false): LinkItem[];
function readDirectory(directoryPath: string, isTB: boolean): NavBarItem | LinkItem[] {
    const basename = getBaseName(directoryPath);
    const dirname = getDirName(directoryPath);
    const navBarItem: NavBarItem = {
        text: basename,
        collapsed: true,
        collapsible: true,
        items: []
    };
    const linkItems: LinkItem[] = [];
    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
        console.log(entry, entry.isDirectory());

        if (entry.name === "index.ts" || entry.isDirectory()) continue;
        const title = entry.name.slice(0, -3);
        const file: LinkItem = {
            text: title,
            link: isTB ? `notes/${dirname}/${basename}/${title}` : `${dirname}/${basename}/${title}`
        };
        isTB ? navBarItem.items.push(file) : linkItems.push(file);
    }

    return isTB ? navBarItem : linkItems;
}
export { readDirectory };
