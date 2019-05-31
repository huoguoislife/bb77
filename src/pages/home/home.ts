import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feed } from '../../app/models/feed.model';
import { User } from '../../app/models/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public feeds: Feed[] = [];
  public user: User

  constructor(public navCtrl: NavController) {
    this.formFeed();
    console.log(this.feeds)
  }

  //Show profile pic for each feed. so the grill is bigger
  //Smaller background pic. when scroll up hide background.


  callDB() {
    //this should be for the whole db showing for all users.
    let url = ""
  }

  formFeed() {
    this.feeds = [{
      createdAt: new Date(),
      author: "bb",
      profilePicture: "assets/imgs/bb.JPG",
      desc: "Lorem ipsum dofghjkjhgfdfghjjhglor sit amet. 我就试试看是什么感觉",
      type: "location",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "77",
      profilePicture: "mike.png",
      desc: "Lorem ipsum dolor sit amet, 多写一点。换行换行consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "text",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "77",
      profilePicture: "max.png",
      desc: "Lorem ipsum dolor sit amet.sdfghjkl飞机上好干啊！汉字能多占几个字符啊。lhgfd,gfdfghj.kjhgfswertyujnbvcxsdfghjkmnbvcxserty,kkihg,hgfd.nbvcdtg,kjhgfert.",
      type: "video",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "bb",
      profilePicture: "adam.jpg",
      desc: "Lorem ipsum dolor好累啊这几天都睡眠不足。 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "picture",
      privateOrNot: false

    }, {
      createdAt: new Date(),
      author: "77",
      profilePicture: "max.png",
      desc: "Lorem ipsum dolor sit amet.sdfghjkll开发本身可能没有那么难，就是想主意设计比较难hgfd,gfdfghj.kjhgfswertyujnbvcxsdfghjkmnbvcxserty,kkihg,hgfd.nbvcdtg,kjhgfert.",
      type: "video",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "bb",
      profilePicture: "adam.jpg",
      desc: "Lorem ipsum dolor sit amet最后一个了 今天第一次买了兰蔻以外的粉底，传说中的油皮必备。期待期待, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "picture",
      privateOrNot: false

    }]
  }
}






