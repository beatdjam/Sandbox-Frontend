## Angular入門まとめ
- TODO
    - Angular In Memory Web API
    - HTTP Client
    - NgModuleで指定するもの
    - DIの話
    - ライフサイクルの話
      - https://angular.jp/guide/lifecycle-hooks#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%B7%E3%83%BC%E3%82%B1%E3%83%B3%E3%82%B9
    - environment
    - angular.json
    - 組み込みのModule
        - CommonModule
        - FormsModule
        - RouterModule
        - BrowserModule

### Angular CLI
https://angular.jp/guide/cli-builder
#### アプリケーションの作成
`ng new`
#### ライブラリの追加
`ng add`
#### ファイルの作成
`ng g(generate)`  
オプション
- class
- component
- service
- module
- guard
- service
### Component
- @Componentの中身
    - templateUrlとtemplate
    - styleUrlsとか
### Directive
### Pipe
### Service
- @Injectable
### Form
### Routing
- ルーティング
    - loadChild, forChild
    - router.parseUrl()
### Guard
- Guard
### Template
- 変数
- ng-template
- ng-container
- ngIf
- pipe
- async
- ngFor
- interpolation
- click event
- NgModel
- routerLink
- ngSubmit
### HTTP Client
### Angular Fire
#### Auth
#### Realtime Database

## RxJS
### Observable
### Subject
### Operator
- tap
- catchError
- map