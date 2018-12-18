import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private modalCtrl: ModalController, ) {
    console.log('page has loaded');
}


    async modalfunc() {

      const modal = await this.modalCtrl.create({

        component: ModalPage,
        componentProps: {
          value: 'this is my modal'
        }
      });
      return await modal.present();
    }
  
    async modalfunc1() {

      const modal = await this.modalCtrl.create({

        component: ModalPage,
        componentProps: {
          value: 'this is my modal'
        }
      });
      return await modal.present();
    }

  
    showHide() {
      let toggleDiv = document.getElementById('toggleDiv');
      let toggleDiv1 = document.getElementById('toggleDiv1');
      let toggleDiv2 = document.getElementById('toggleDiv2');
      let div1 = document.getElementById('root');
      
      
        if (toggleDiv.style.display = 'none') {
            toggleDiv.style.display = 'block'
            div1.style.display= 'none'
        } 
    }
    showHide1() {
      let toggleDiv = document.getElementById('toggleDiv');
      let toggleDiv1 = document.getElementById('toggleDiv1');
      let toggleDiv2 = document.getElementById('toggleDiv2');
      let div1 = document.getElementById('root');
      
      
        if (toggleDiv1.style.display = 'none') {
            toggleDiv1.style.display = 'block'
            div1.style.display= 'none'
        } 
    }    
    showHide2() {
      let toggleDiv = document.getElementById('toggleDiv');
      let toggleDiv1 = document.getElementById('toggleDiv1');
      let toggleDiv2 = document.getElementById('toggleDiv2');
      let div1 = document.getElementById('root');
      
      
        if (toggleDiv2.style.display = 'none') {
            toggleDiv2.style.display = 'block'
            div1.style.display= 'none'
        } 
    }  




  }
