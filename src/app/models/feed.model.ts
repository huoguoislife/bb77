export class Feed {

  author: string;
  type: string;
  desc: string;
  //imgUrl: string;
  createdAt: Date;
  profilePicture: string;
  privateOrNot: boolean;

  constructor(createdAt, author, profilePicture, desc, type, privateOrNot) {

    this.author = author;
    this.type = type;
    this.desc = desc;
    //this.imgUrl = imgUrl;
    this.createdAt = createdAt;
    this.profilePicture = profilePicture;
    this.privateOrNot = privateOrNot;
  }


}
