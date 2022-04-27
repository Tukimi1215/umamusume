'use strict';
const assessmentButton = document.getElementById('assessment'); //ボタン関数
//テーブルレーステキスト
const races = ['適正距離', 'ウマ娘', '1レース目', '2レース目', '3レース目', '4レース目', '5レース目', '平均スコア'];

//テーブル見出しテキスト
const Heading = ['短距離エース', '短距離', '短距離', 'マイルエース', 'マイル', 'マイル', '中距離エース', '中距離', '中距離', '長距離エース', '長距離', '長距離', 'ダートエース', 'ダート', 'ダート'];


//ボタンが押された時の処理

//計算するボタン
assessmentButton.onclick = function () {
  for (let i = 0; i < Heading.length; i++) {
    const arri = arrayInpot(i);//行のセルを取得
    const ps = pointSum(arri);//行のセルを合計
    const pa = pointAverage(ps);//行のセルを平均
    testTable.rows[i + 1].cells[7].innerText = pa;//平均値をテーブルに代入
  };
};

//セルを取得
function arrayInpot(i) {
  let pointArray = []; // テーブルデータ
  for (let j = 0; j < races.length; j++) {
    if (j >= 1 && j <= 5) {
      pointArray.push(document.getElementById('pt' + j + ',' + i).valueAsNumber); //セルの値を取得
    };
  };
  return pointArray
};

//行のセルを合計
function pointSum(arr) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return (arr.reduce(reducer));
};

//行の平均
function pointAverage(point) {
  return ~~(point / 5);
}

//計算プログラム

mainTable();
let table = document.getElementById('testTable');

//繰り返しテーブル
//見出しテーブル
function mainTable() {

  let table = document.getElementById('testTable');
  let newRow = table.insertRow();
  for (let i = 0; i < races.length; i++) { //一行目作成
    let newTextA = document.createElement('th');
    newTextA.innerHTML = races[i];
    newRow.appendChild(newTextA);
  }


  //記入欄テーブル
  for (let i = 0; i < Heading.length; i++) { //2行目以降作成
    //行の追加
    let newRow = table.insertRow();

    //見出し(適正距離)
    let newText = document.createElement('th');
    newText.innerHTML = Heading[i];
    newRow.appendChild(newText);

    //セル変数宣言
    let newCell = newRow.insertCell();
    let newInput = document.createElement('input');
    newInput.setAttribute("type", "text");
    newInput.setAttribute("list", "listName");
    newInput.setAttribute("placeholder", "ウマ娘")
    let newForm = document.createElement('form');


    for (let j = 0; j < races.length; j++) { //横のデータ作成
      if (j === 0) {
        //名前入力(1列目)

        newCell.appendChild(newForm);
        newForm.appendChild(newInput);
      } else if (j >= 1 && j <= 5) {
        //スコア入力(2~6列目)
        newCell = newRow.insertCell();
        newInput = document.createElement('input');
        newInput.setAttribute("type", "number",);
        newInput.setAttribute("id", "pt" + '' + j + ',' + i);
        newInput.setAttribute("value", "1000");
        newInput.setAttribute("step", "100");
        newInput.setAttribute("min", "1000");
        newCell.appendChild(newInput);
      } else if (j === 6) {
        //スコア表
        newCell = newRow.insertCell();
        newInput = document.createTextNode(0);
        newCell.appendChild(newInput);
      } else { };
    };
  };

}
