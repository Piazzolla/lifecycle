import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-price',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './price.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    console.log('price ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('price ngOnChanges')
    console.log({changes})
  }
  ngOnDestroy(): void {
    console.log('price ngOnDestroy')
  }
  @Input()
  public price: number = 0;

}
