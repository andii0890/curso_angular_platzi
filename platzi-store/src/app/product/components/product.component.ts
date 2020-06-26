import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

import { Product } from '../../product.model';

@Component({
selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.scss']
})

export class  ProductComponent implements OnInit, DoCheck, OnDestroy {

@Input() product: Product;
@Output() ProductClicked: EventEmitter<any> = new EventEmitter();

today = new Date();

constructor() {
  console.log('constructor');
}

// ngOnChanges(changes: SimpleChanges) {
//   console.log('ngOnChanges');
//   console.log(changes);
// }

ngOnInit() {
  console.log('onInit');
}

// no se recomienda usar ngDocheck() y ngOnChanges() al mismo tiempo.
ngDoCheck() {
  console.log('doCheck');
}

ngOnDestroy() {
  console.log('ngOnDestroy');
}

addCart() {
console.log('anadir al carrito');
this.ProductClicked.emit(this.product.id);

  }
}
