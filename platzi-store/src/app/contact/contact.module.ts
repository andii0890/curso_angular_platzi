import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactComponent
  ], imports: [
    ContactRoutingModule,
    CommonModule
  ]
})

export class ContactModule {}
