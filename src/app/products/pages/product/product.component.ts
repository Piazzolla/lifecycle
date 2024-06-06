import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
export class ProductComponent { }
