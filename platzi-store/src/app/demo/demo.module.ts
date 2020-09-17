import { NgModule } from '@angular/core';

import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent
  ], imports: [
    DemoRoutingModule,
    CommonModule,
    FormsModule
  ]
})

export class DemoModule {}
