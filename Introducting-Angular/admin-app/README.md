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
* In-memory Web APIの利用
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
