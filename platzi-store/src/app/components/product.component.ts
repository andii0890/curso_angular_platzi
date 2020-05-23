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

import { Product } from '../product.model';

@Component({
selector: 'app-product',
templateUrl: './product-component.html'
})

export class  ProductComponent implements OnInit, DoCheck, OnDestroy{

@Input() product: Product;
@Output() ProductClicked: EventEmitter<any> = new EventEmitter();

constructor() {
  console.log('constructor')
}

// ngOnChanges(changes: SimpleChanges) {
//   console.log('ngOnChanges');
//   console.log(changes);
// }

ngOnInit() {
  console.log('onInit');
}

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
