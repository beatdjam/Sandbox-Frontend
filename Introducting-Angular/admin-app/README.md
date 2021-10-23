# memo
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
### Componentの作成
* Componentの作成
* Componentの呼び出し
### Serviceの作成
* Serviceの作成
* ServiceのInject
### Routerの利用
* Routerの設定
### HTTPクライアントの利用
* In-memory Web APIの利用
* エラーハンドリング
* RxJS
### ライフサイクル
