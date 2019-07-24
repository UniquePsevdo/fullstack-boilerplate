import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../../../../core/services/title-service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title;
  alive = true;
  constructor(private titleService: TitleService) {
    this.titleService.title$.pipe(takeWhile(() => this.alive))
      .subscribe((title) => {
        this.title = title;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
