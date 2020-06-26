import { NgModule } from '@angular/core';

import { ProductComponent } from './components/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductComponent
  ], imports: [
    ProductRoutingModule,
    CommonModule
  ]
})

export class ProductModule {}
