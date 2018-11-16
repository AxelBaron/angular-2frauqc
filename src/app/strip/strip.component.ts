import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { StripsService } from '../strips.service';
import { Strip } from '../strip';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.scss']
})
export class StripComponent implements OnInit, OnDestroy {
  navigationSubscription;
  strip: Strip;
  @Input() id: number;

  constructor(
    public router: Router,
    private _route: ActivatedRoute,
    private _strips: StripsService) { }

  async ngOnInit() {
    /**
     * We use to way to get the strip :
     * - By url, in case we display the 'article' page.
     * - By passing the strip with an input, in case we display the 'list' page. (who use this component)
     **/

    this.test();

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.test();
      }
    });
  }

  async test() {
    if (!this.id) {
      this._route.params.subscribe((params: Params) => this.id = params.id);
    }
    await this._strips.getStrip(this.id).subscribe(result => {
      this.strip = result;
    });
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
