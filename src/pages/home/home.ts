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
  public user: User;
  isLoading: boolean;

  constructor(public navCtrl: NavController) {
    this.formFeed();
    console.log(this.feeds)
  }

  //Show profile pic for each feed. so the grill is bigger
  //Smaller background pic. when scroll up hide background.

  callDB() {
    //this should be for the whole db showing for all users.
  }

  formFeed() {
    this.feeds = [{
      id: "qqqqqqqqq",
      author: "bb",
      profilePicture: "bb",
      textStory: "Lorem ipsum dofghjkjhgfdfghjjhglor sit amet. 我就试试看是什么感觉",
      type: "location",
      privateOrNot: false,
      singleImgUrl: "none",
      createdDateTime: '01 Jan 2019 00:00:00 GMT'
    }, {

      id: "qqqqqqqqq",
      author: "77",
      profilePicture: "mike.png",
      textStory: "Lorem ipsum dolor sit amet, 多写一点。换行换行consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      singleImgUrl: "none",
      type: "text",
      privateOrNot: false,
      createdDateTime: '01 Jan 2019 00:00:00 GMT'
    }, {
      author: "77",
      createdDateTime: '01 Jan 2019 00:00:00 GMT',

      id: "qqqqqqqqq",
      profilePicture: "max.png",
      textStory: "Lorem ipsum dolor sit amet.sdfghjkl飞机上好干啊！汉字能多占几个字符啊。lhgfd,gfdfghj.kjhgfswertyujnbvcxsdfghjkmnbvcxserty,kkihg,hgfd.nbvcdtg,kjhgfert.",
      type: "video",
      singleImgUrl: "none",
      privateOrNot: false
    }, {
      author: "bb",
      createdDateTime: '01 Jan 2019 00:00:00 GMT',
      id: "qqqqqqqqq",
      profilePicture: "adam.jpg",
      textStory: "Lorem ipsum dolor好累啊这几天都睡眠不足。 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "picture",
      singleImgUrl: "none",
      privateOrNot: false

    }, {
      author: "77",
      createdDateTime: '01 Jan 2019 00:00:00 GMT',
      id: "qqqqqqqqq",
      profilePicture: "max.png",
      textStory: "Lorem ipsum dolor sit amet.sdfghjkll开发本身可能没有那么难，就是想主意设计比较难hgfd,gfdfghj.kjhgfswertyujnbvcxsdfghjkmnbvcxserty,kkihg,hgfd.nbvcdtg,kjhgfert.",
      singleImgUrl: "none",
      type: "video",
      privateOrNot: false
    }, {
      author: "bb",
      createdDateTime: '01 Jan 2019 00:00:00 GMT',
      id: "qqqqqqqqq",
      profilePicture: "adam.jpg",
      textStory: "Lorem ipsum dolor sit amet最后一个了 今天第一次买了兰蔻以外的粉底，传说中的油皮必备。期待期待, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      singleImgUrl: "none",
      type: "picture",
      privateOrNot: false

    }]
  }

	/**
	 * infinite the feeds when scrolling. 
	 */
  doInfinite(infiniteScroll) {
    console.log('doInfinite, page number is currently ');
    infiniteScroll.complete();

  }
  /**
* calculate the passed time since the created time.
*/
  getPassedTime(time) {
    console.log('here: ' + time)
    let now = new Date();
    let postTime = new Date(Date.parse(time));
    console.log('posttime: ' + postTime);
    let secs = (now.getTime() - postTime.getTime()) / 1000;
    let min = Math.floor(secs / 60);
    let hours = Math.floor(min / 60);
    if (hours > 23) {
      return Math.floor(hours / 24) + "d";
    } else {
      if (hours != 0) {
        return hours + "h";
      } else {
        return min + "m";
      }
    }
  }
}






