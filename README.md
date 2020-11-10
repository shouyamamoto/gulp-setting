# gulpを使ってsassをcssにコンパイルするための手順
gulpはタスクランナーであり、様々な処理を自動化してくれます。今回はsassを自動的にcssにコンパイルするような環境を作成していきます。

##まずnode-sassを動作させるために必要なNode.jsをインストールする
今回はLTS最新版をインストールします。
[Node.js](https://nodejs.org/)

インストールが完了したらコマンドをターミナルで入力してNode.jsとnpmがインストールされているかを確認する。(2020/10/15時点)
```
$ node -v
v12.19.0

$npm -v
6.14.8
```

## セットアップ済みのファイルをインストールする
リモートリポジトリから自分のローカルリポジトリにcloneします。（今回はsampleフォルダを作成）
必要なファイルはgulpfile.jsとpackage.json、package-lock.jsonの3つです。
```
$ git clone https://github.com/shouyamamoto/gulp-setting.git sample
```

## セットアップ済みの環境をインストールする
まずはnpmコマンドで「gulp-cli」を開発環境にインストールします。
```
$ npm install -D gulp-cli
$ gulp -v
CLI version: 2.3.0
Local version: 4.0.2
```

gulp -v でバージョンが確認できれば成功です。

## 一括でセットアップしている内容をインストールする
```
$ npm install
```

## sassをコンパイルする
作成したsampleディレクトリにsassフォルダを作り、.scssファイルを作成します。
ファイル内に記載できたらコンパイルします。
```
$ gulp keiryoWatch
```
コンパイルされるとdist/cssの中にコンパイルされたcssファイルがあります。

## cssTaskのみエラーが出現する。そのほかのタスクはエラーなし。
エラー内容
```
TypeError: Cannot read property 'toString' of null
    at transform (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/gulp-sass-glob/dist/index.js:67:32)
    at DestroyableTransform._transform (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/gulp-sass-glob/dist/index.js:49:15)
    at DestroyableTransform.Transform._read (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/readable-stream/lib/_stream_transform.js:184:10)
    at DestroyableTransform.Transform._write (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/readable-stream/lib/_stream_transform.js:172:83)
    at doWrite (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/readable-stream/lib/_stream_writable.js:428:64)
    at writeOrBuffer (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/readable-stream/lib/_stream_writable.js:417:5)
    at DestroyableTransform.Writable.write (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/readable-stream/lib/_stream_writable.js:334:11)
    at DestroyableTransform.ondata (/Users/yamamotosyo/Desktop/gulp-setting/node_modules/readable-stream/lib/_stream_readable.js:619:20)
    at DestroyableTransform.emit (events.js:314:20)
    at DestroyableTransform.EventEmitter.emit (domain.js:506:15)
```