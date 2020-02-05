import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
selector: 'app-product',
templateUrl: './product-component.html'
})

export class  ProductComponent {

	@Input() product: Product;
	@Output() ProductClicked: EventEmitter<any> = new EventEmitter();

	addCart(){
	console.log('anadir al carrito');
	this.ProductClicked.emit(this.product.id);

	}
}