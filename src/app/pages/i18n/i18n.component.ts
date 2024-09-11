import {Component, DEFAULT_CURRENCY_CODE, ElementRef, Inject, LOCALE_ID, Renderer2, ViewChild} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-i18n',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    TranslateModule
  ],
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent {

  today = new Date();
  @ViewChild("myP") p! : ElementRef;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DEFAULT_CURRENCY_CODE) public devise: string,
    private translate: TranslateService,
    private renderer: Renderer2
  ) {}

  changeLang(lang: string) {
      this.translate.use(lang);
  }

  changeColor(color: string) {
    this.renderer.setStyle(this.p.nativeElement, 'background-color', color)
  }



}
