import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';
import { TokenService } from 'src/app/services/token.service';
import { Token } from 'src/app/models/token';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  token:Token;
  constructor(private tokenService: TokenService) {
    this.token={id:"1",token:"1222",timeStamp:new Date()};
   this.tokenService.saveToken(this.token);

  }

  ngOnInit(): void {
    // this.countdown.begin();
    $(document).ready(function () {
      "use strict";
      // var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
      //  simplyCountdown('.simply-countdown-one', {
      //   year: d.getFullYear(),
      //   month: d.getMonth() + 1,
      //   day: d.getDate()
      // });

      // //jQuery example
      // $('#simply-countdown-losange').simplyCountdown({
      //   year: d.getFullYear(),
      //   month: d.getMonth() + 1,
      //   day: d.getDate(),
      //   enableUtc: false
      // });
    });

  }
  handleEvent($event: any) {
    console.log($event);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
