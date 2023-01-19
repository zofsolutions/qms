import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';
import { TokenService } from 'src/app/services/token.service';
import { Token } from 'src/app/models/token';
import { QmsUtils } from 'src/app/shared/utils/qms-utils';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  token: Token;
  timeStamp:any;
  disableButtons:boolean=false;
  @ViewChild("reportPrint") reportPrint!: ElementRef;
  @ViewChild("registrationPrint") registrationPrint!: ElementRef;
  constructor(private tokenService: TokenService) {
    this.token = { id: "", date: "", token:"0", timeStamp: new Date(), tokenType: "",isServed:false,counterName:"" };
  }

  ngOnInit(): void {
   

  }
  handleEvent($event: any) {
    console.log($event);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  generateToken(type: any) {
    this.disableButtons=true;
    const now = new Date();
    var uniqueID = QmsUtils.makeRandom(8);
    var currentDate = now.toLocaleDateString();
    var token: any = 1;
    if (sessionStorage.getItem(currentDate + "_" + type)) {
      let lastToken = sessionStorage.getItem(currentDate + "_" + type);
      if (lastToken) {
        token = parseInt(lastToken) + 1;
      }
    }
    this.token = { id: uniqueID, date: currentDate, token:token, timeStamp: new Date(), tokenType: type,isServed:false,counterName:"" };
    this.tokenService.saveToken(this.token);
    sessionStorage.setItem("Last Unique ID_" + type, uniqueID);
    sessionStorage.setItem(currentDate + "_" + type, token);
    this.timeStamp=new Date();
    if(type==="report"){
      this.reportPrint.nativeElement.click();
    }else{
      this.registrationPrint.nativeElement.click();
    }
    this.disableButtons=false;
  }

  findCounterName(){
    
  }
}
