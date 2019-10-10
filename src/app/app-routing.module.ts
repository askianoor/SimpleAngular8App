import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'wallet', component: WalletComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
