# memo
公式チュートリアルをベースにメモ

## Angularのインストール
### nodeをインストールする
* nodebrew のインストール
```shell
$ curl -L git.io/nodebrew | perl - setup
```

* pathを通す(zsh)
```shell
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
$ source ~/.zshrc
```

* nodebrewで最新のNode.jsをインストール
```shell
$ nodebrew install latest
$ nodebrew use latest
```
 
### Angular CLIをインストールする
```shell
$ npm install -g @angular/cli@10.0.4
```

## アプリケーションの作成
### プロジェクトの作成
```shell
$ ng new angular-router-sample
```
### Componentの作成
* Componentの作成  
Angular CLIを利用してComponentを作成する
```shell
$ ng generate component crisis-list
```
* Componentの呼び出し  
作成したComponentはComponent上から下記のようにすることで呼び出すことができる
```html
<crisis-list></crisis-list>
```
### Serviceの作成
* Serviceの作成
```shell
$ ng generate service dialog
```

* ServiceのInject
利用したいComponentなどのコンストラクタに記述する
```typescript
constructor(private memberService: MemberService) {}
```
### Routerの利用
* Routerの設定

app.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-center/crisis-center.component';

const appRoutes: Routes = [
  // path指定
  { path: 'crisis-center', component: CrisisListComponent },
  // redirect
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // マッチしない場合の遷移先
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

RouterでマッチするComponentに遷移するリンク
```html
<a routerLink="/crisis-center">CrisisList</a>
```
### HTTPクライアントの利用
#### HTTPクライアントの導入 

app.module.tsのNgModuleのimportsにHttpClientModuleを加える
```typescript
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

#### In-memory Web APIの利用
APIサーバーをシミュレートするIn-memory Web APIを利用する
  
Projectにangular-in-memory-web-apiの依存を追加
```shell
$ npm install angular-in-memory-web-api --save
```

importsにHttpClientInMemoryWebApiModuleを追加  
```typescript
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
})
```

forRootに設定するためのインメモリデータベースを管理するServiceを作成する
```shell
$ ng generate service InMemoryData
```

in-memory-data.service.tsには初期値で設定されるデータを記述する
```typescript
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
```
* エラーハンドリング
* RxJS
### ライフサイクル
基本的に上から流れる
- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy
