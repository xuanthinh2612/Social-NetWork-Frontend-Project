import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FriendComponent} from './friend/friend.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HandlefriendComponent} from './handlefriend/handlefriend.component';
import {MutualFriendComponent} from "./mutual-friend/mutual-friend.component";
import {EditCommentComponent} from './post/edit-comment/edit-comment.component';

const routes: Routes = [
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(module => module.PostModule)
  },
  {
    path: 'listFriend/:id',
    component: FriendComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'mutual-friends/:id',
    component: MutualFriendComponent
  },
  {
    path: 'listPendingFriend',
    component: HandlefriendComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
