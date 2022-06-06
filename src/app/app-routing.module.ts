import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'recite-duas',
    loadChildren: () => import('./recite-duas/recite-duas.module').then( m => m.ReciteDuasPageModule)
  },
  {
    path: 'funeral-main',
    loadChildren: () => import('./funeral-main/funeral-main.module').then( m => m.FuneralMainPageModule)
  },
  {
    path: 'after-death',
    loadChildren: () => import('./after-death/after-death.module').then( m => m.AfterDeathPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
