import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { CreatePage } from '../create/create';
import { MePage } from '../me/me';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'

})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = HomePage;
  tab2Root = CreatePage;
  tab3Root = MePage;

  constructor(public navCtrl: NavController) {

  }

  /**
   * タブの切り替え
   * @param $ev
   */
  tabChanged($ev) {

    let homeTabTitle = "Home"
    let meTabTitle = "Me"
    let createTabTitle = ""

    if ($ev.tabTitle === homeTabTitle) {
      let currentPage = $ev.getActive().component;
    } else if ($ev.tabTitle === createTabTitle) {
      let currentPage = $ev.getActive().component;
      if (currentPage === MePage) {
        $ev.pop({ animate: false });
      }
    } else if ($ev.tabTitle === meTabTitle) {
      let currentPage = $ev.getActive().component;
    }
  }


  /**
   *現在アプリのバージョンを最新バージョンと比較する
   */
  // checkVersion() {
  //   console.log("inside of check version")
  //   let url = "https://devnrapp.azure-api.net/getAppVersion";
  //   this.http.get(url).map(res => res.json()).subscribe(
  //     data => {
  //       //バックエンドに記載された最新バージョン
  //       console.log("version data is : ", data)
  //       let latestVersion = data['appVersion'];
  //       this.utilityMetods.getAppVersionNumber().then(
  //         versionNumber => {
  //           //ローカルストレージに記載された現在バージョン
  //           this.customNativeStorage.storeObject(versionNumber, 'versionNumber');
  //           console.log('Current App Version Number is ', versionNumber)
  //           if (versionNumber !== latestVersion) {
  //             this.utilityMetods.showLatestversionAlert(data['appVersion'], data['changes']);
  //           }
  //         });
  //     },
  //     error => {
  //       console.log("get latest version error: ", error)
  //     });
  // }

}
