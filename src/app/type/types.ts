import { StaticImageData } from "next/image";

export type PlayListVideoType = {
    title : string;
    thumbnail : StaticImageData;
}

export type CourseComponentType = {
    thumbnailImage : StaticImageData;
    authorName : string;
    courseName : string;
    reviewCount : number;
    purchased : boolean;
    beforePrice : number;
    newPrice : number;
    priceCurrency : string;
}