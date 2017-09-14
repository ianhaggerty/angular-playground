import { NgModule } from '@angular/core';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {
}
