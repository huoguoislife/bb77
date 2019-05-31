export class Feed {

    id: string;
    type: string;
    textStory: string;
    link: string;
    picUrl: string;
    singleImgUrl: string;
    playButton: boolean;
    createdDateTime: any;

    constructor(id, type, desc, imgUrl, singleImgUrl, createdDateTime, link) {
        this.id = id;
        this.type = type;
        this.textStory = desc;
        this.picUrl = imgUrl;
        this.singleImgUrl = singleImgUrl
        this.createdDateTime = createdDateTime;
        this.link = link;
    }
}
