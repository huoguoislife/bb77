export class Feed {

    id: string;
    type: string;
    textStory: string;
    link: string;
    picUrl: string;
    singleImgUrl: string;
    playButton: boolean;
    createdDateTime: any;
    author: string;

    constructor(id, type, desc, imgUrl, singleImgUrl, createdDateTime, link, author) {
        this.id = id;
        this.type = type;
        this.textStory = desc;
        this.picUrl = imgUrl;
        this.singleImgUrl = singleImgUrl
        this.createdDateTime = createdDateTime;
        this.link = link;
        this.author = author;
    }
}
