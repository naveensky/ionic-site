import {NgFor} from 'angular2/angular2';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ActionMenu,
  NavbarTemplate,
  Navbar,
  NavController,
  Content} from 'ionic/ionic';
export class ActionMenuPage {
  constructor(nav) {
    this.nav = nav;
    window.nav = nav;
  }
  openMenu() {
    console.log('Opening ActionMenu');
    ActionMenu.open({
      buttons: [{text: '<b>Share</b> This'}, {text: 'Move'}],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('Canceled');
      },
      destructiveButtonClicked: () => {
        console.log('Destructive clicked');
      },
      buttonClicked: function(index) {
        console.log('Button clicked', index);
        if (index == 1) {
          return false;
        }
        return true;
      }
    }).then((actionMenu) => {
      this.actionMenu = actionMenu;
    });
  }
}
Object.defineProperty(ActionMenuPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new View({
      template: `
  <ion-navbar *navbar><ion-title>Action Menu</ion-title></ion-navbar>

  <ion-content class="padding">
    <h2>Action Menu</h2>
    <p>
      The Action Menu, similar to Action Sheet's on iOS, is a slide-up prompt
      that displays several options for the user to choose from before an action is performed.
    </p>
    <p>
      Action Menu's are great for prompting for dangerous actions (like deleting a photo album),
      or showing a "context menu" with multiple actions the user can perform on something.
    </p>
    <button primary (click)="openMenu()">Open Menu</button>
  </ion-content>
  `,
      directives: [NavbarTemplate, Navbar, Content]
    })];
  }});
Object.defineProperty(ActionMenuPage, "parameters", {get: function() {
    return [[NavController]];
  }});