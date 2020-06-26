import { NgModule } from '@angular/core';

import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DemoComponent
  ], imports: [
    DemoRoutingModule,
    CommonModule
  ]
})

export class DemoModule {}
