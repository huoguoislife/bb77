export class User {

    userID: string;
    nickname: string;
    profilePic: string;
    backgroundPic: string;
    friends: User;

    constructor(userID, nickname, profilePic, backgroundPic) {
        this.userID = userID;
        this.nickname = nickname;
        this.profilePic = profilePic;
        this.backgroundPic = backgroundPic;
    }
}
