export class Feed {

    id: string;
    type: string;
    textStory: string;
    profilePicture: string;
    singleImgUrl: string;
    privateOrNot: boolean;
    createdDateTime: any;
    author: string;

    constructor(id, type, desc, profilePicture, singleImgUrl, createdDateTime, privateOrNot, author) {
        this.id = id;
        this.type = type;
        this.textStory = desc;
        this.profilePicture = profilePicture;
        this.singleImgUrl = singleImgUrl
        this.createdDateTime = createdDateTime;
        this.privateOrNot = privateOrNot;
        this.author = author;
    }
}
