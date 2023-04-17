import { Component } from '@angular/core';
import { MyClass } from './my-class';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    let a = JSON.parse(localStorage.getItem('player'));

    if(a!=null)
    {
      this.playerArray = a;
    }

  }
  title = 'Cricket_Plater_ToDo';

  // myOb = new MyClass(0, '', 0);
    // ! Cricket Project
    playerObj = {
      PlayerName: '',
      categery: '',
      matches: '',
      runs: '',
    };

    playerArray: any[] = [];

    savePlayer() {
      if (
        this.playerObj.PlayerName == '' ||
        this.playerObj.categery == '' ||
        this.playerObj.matches == '' ||
        this.playerObj.runs == ''
      ) {
        window.alert('Please, Fill All Player Details');
      } else {
       let a = JSON.parse(localStorage.getItem('player'));

       if(a!=null)
       {
         this.playerArray = a;
       }
        // this.myOb.name = this.playerObj.PlayerName;
        // this.myOb.id = 10;
        // this.myOb.marks = `${this.playerObj.matches}`;

    if(this.playerArray.length!=0)
    {

      for (let i = 0; i < this.playerArray?.length; i++) {
        if (
          this.playerArray[i].PlayerName.toLowerCase() ==
          this.playerObj.PlayerName.toLowerCase()
        ) {
          window.alert(this.playerObj.PlayerName + ' Already Exist .');
          return;
        }
      }

      if(this.playerArray.length==11)
      {
         alert("Team Completed");
         return;  
      }
    }
   console.log("Array IS"+this.playerArray[0]);
        this.playerArray?.push(this.playerObj);
        localStorage.setItem('player', JSON.stringify(this.playerArray));
        this.playerArray = JSON.parse(localStorage.getItem('player'));
        console.log(this.playerArray[0]);
        this.playerObj.PlayerName = '';
        this.playerObj.categery = '';
        this.playerObj.matches = '';
        this.playerObj.runs = '';
      }
      this.updateButton();
    }

    editPlayer(num) {
      this.index = num;
      for (let i = 0; i < this.playerArray?.length; i++) {
        if (i == num) {
          this.playerObj.PlayerName = this.playerArray[i].PlayerName;
          this.playerObj.categery = this.playerArray[i].categery;
          this.playerObj.matches = this.playerArray[i].matches;
          this.playerObj.runs = this.playerArray[i].runs;
        }
      }
    }

    deletePlayer(num) {
      for (let i = 0; i < this.playerArray?.length; i++) {
        if (i == num) {
          for (let j = 0; j < this.playerArray.length - 1; j++) {
            this.playerArray[i] = this.playerArray[i + 1];
          }
          this.playerArray.pop();
          localStorage.setItem('player', JSON.stringify(this.playerArray));
        }
      }
    }

    index = -1;


    updateButton() {

      for (let i = 0; i < this.playerArray?.length; i++) {
        if (i == this.index) {
          this.playerArray[i] = this.playerObj;
          localStorage.setItem('player', JSON.stringify(this.playerArray));
        }
      }

       this.playerObj.PlayerName = "";
       this.playerObj.categery = "";
       this.playerObj.matches = "";
       this.playerObj.runs = "";
       this.ngOnInit();

    }
}
