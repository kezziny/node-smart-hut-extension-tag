import { Device } from 'smart-hut';
interface ITags {
    [key: string]: string;
}
export declare class Tag {
    static readonly ApplyKey = "Tag";
    static Apply(args: ITags): (device: Device, property: string) => void;
}
export {};
