import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feed } from '../../app/models/feed.model';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  feeds: Feed[];
  constructor(public navCtrl: NavController) {
    this.formFeed();
    console.log('Me page');
  }


  //No need to show profile pic for each feed
  //Bigger background pic.

  formFeed() {
    this.feeds = [{
      createdAt: new Date(),
      author: "bb",
      profilePicture: "perry.png",
      desc: "Lorem ipsum dofghjkjhgfdfghjjhglor sit amet",
      type: "location",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "77",
      profilePicture: "mike.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "text",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "77",
      profilePicture: "max.png",
      desc: "Lorem ipsum dolor sit amet.sdfghjkllhgfd,gfdfghj.kjhgfswertyujnbvcxsdfghjkmnbvcxserty,kkihg,hgfd.nbvcdtg,kjhgfert.",
      type: "video",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "bb",
      profilePicture: "adam.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "picture",
      privateOrNot: false

    }, {
      createdAt: new Date(),
      author: "77",
      profilePicture: "max.png",
      desc: "Lorem ipsum dolor sit amet.sdfghjkllhgfd,gfdfghj.kjhgfswertyujnbvcxsdfghjkmnbvcxserty,kkihg,hgfd.nbvcdtg,kjhgfert.",
      type: "video",
      privateOrNot: false
    }, {
      createdAt: new Date(),
      author: "bb",
      profilePicture: "adam.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "picture",
      privateOrNot: false

    }]
  }


  /**
   * To calculate the time that has passed.
   */
  getPassedTime(time) {
    let now = new Date();
    let postTime = new Date(time);
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
