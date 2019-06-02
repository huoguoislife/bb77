export class Feed {

  author: string;
  type: string;
  textStory: string;
  //imgUrl: string;
  createdAt: Date;
  profilePicture: string;
  privateOrNot: boolean;

  constructor(createdAt, author, profilePicture, textStory, type, privateOrNot) {

    this.author = author;
    this.type = type;
    this.textStory =  textStory;
    //this.imgUrl = imgUrl;
    this.createdAt = createdAt;
    this.profilePicture = profilePicture;
    this.privateOrNot = privateOrNot;
  }


}
