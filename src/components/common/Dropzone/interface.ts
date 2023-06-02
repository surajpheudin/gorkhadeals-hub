export interface IDropzone {
    setFiles: (files: File[]) => void;
    defaultImage?: string;
    accept?: string;
    maxSizeInMb: number;
}
