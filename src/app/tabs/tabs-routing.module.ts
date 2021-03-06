import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../wishlist/wishlist.module').then(m => m.WishlistPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'recite-duas',
        loadChildren: () => import('../recite-duas/recite-duas.module').then(m => m.ReciteDuasPageModule)
      },
      {
        path: 'funeral-main',
        loadChildren: () => import('../funeral-main/funeral-main.module').then(m => m.FuneralMainPageModule)
      },
      {
        path: 'after-death',
        loadChildren: () => import('../after-death/after-death.module').then(m => m.AfterDeathPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
