import { Timestamp } from "firebase/firestore";

interface Project {
    id: string;
    title:string;
    desc: string;
    short_desc: string;
    isFeature: boolean;
    icon:string;
    src: string;
    tags:Array<string>;
    date: Timestamp;
    site:string;
    github: string;
}

export default Project;