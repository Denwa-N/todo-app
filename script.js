// DOM(Document Object Model)操作
// JSから文書(html)を部品として操作できるようにした仕組み
// つまりJSのプログラムによってhtmlをいじれるようにするための仕組み

function addTask() {
    // function 関数名(){
    //  実行したい処理
    // }
    // で関数を記述する

    const input = document.getElementById("taskInput");
    // const 変数名 = ...
    // 変数の定義(この変数は後から変更しない)
    // document.getElementById("taskInput")でidが"taskInput"のものを取得する

    const task = input.value.trim();
    // input.valueで入力欄に書かれた文字を取り出す
    // .trim()で取得した値の前後の空白を取り除く


    if (task === "") return;
    // ===で等しいかどうかを評価する
    // !==なら不等号（他は<=, >=など一般的な表記と同様）
    // returnで処理の中断

    const li = document.createElement("li");
    // document.createElement("li")で<li>を新しく作成する

    li.textContent = task;
    li.onclick = () => li.remove(); 
    // クリックで削除
    // => はアロー関数(関数を短く書く方法)

    // 従来の書き方
    // li.onclick = function() {
    //   li.remove();
    // };

    // () => {処理}・・・引数なしの書き方
    // (x) => {処理}・・・引数1個の書き方
    // (a, b) => {処理}・・・引数2個の書き方
    // x => x*2のように処理が1行だけなら{}とreturnも省略可能

    // アロー関数を使用する場面
    // イベント処理(クリック、キーボードなど)
    // リスト処理(map、filter)
    // 簡単なコールバック処理を書くとき
    

    document.getElementById("taskList").appendChild(li);
    // getElementById("taskList")でhtmlの<ul id="taskList">を取得
    // .appendChild(li)で作った<li>を追加

    input.value = ""; // 入力欄を空にする
}