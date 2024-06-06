import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PriceComponent } from "../../components/price/price.component";

@Component({
    selector: 'page-product',
    standalone: true,
    templateUrl: './product.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PriceComponent
    ]
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  public isProductVible = false;
  public currentPrice = 10;

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('OnChanges')
  }
  ngDoCheck(): void {
    console.log('DoCheck')
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

  increasePrice() {
    this.currentPrice++;
  }

 }
