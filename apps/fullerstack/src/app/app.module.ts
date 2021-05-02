import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ConfigModule } from '@fullerstack/ngx-config';
import { LoggerModule } from '@fullerstack/ngx-logger';
import { MsgModule } from '@fullerstack/ngx-msg';
import { MaterialModule } from '@fullerstack/ngx-material';
import { LayoutModule } from '@fullerstack/ngx-layout';
import { GqlModule } from '@fullerstack/ngx-gql';
import { AuthModule } from '@fullerstack/ngx-auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { JwtModule } from '@fullerstack/ngx-jwt';
import { UixModule } from '@fullerstack/ngx-uix';
import { I18nModule } from '@fullerstack/ngx-i18n';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: true }),
    NgxsStoragePluginModule.forRoot({
      key: [],
    }),
    ConfigModule.forRoot(environment),
    LoggerModule,
    JwtModule,
    MsgModule,
    GqlModule,
    I18nModule.forRoot(),
    AuthModule,
    // UsrModule,
    UixModule,
    LayoutModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
