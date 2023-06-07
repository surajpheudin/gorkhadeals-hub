import { PropsWithChildren } from "react";

export interface IDataListLayout extends PropsWithChildren {
    title: string;
    onAddClick?: () => void;
    addButtonLabel?: string;
}
