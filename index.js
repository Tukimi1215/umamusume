'use strict';
const assessmentButton = document.getElementById('assessment'); //ボタン関数
let test = [];
let array0 = []; // ID取得配列
let array = [];
const races = ['適正距離', 'ウマ娘', '1レース目', '2レース目', '3レース目', '4レース目', '5レース目', '平均スコア'];
const Heading = ['短距離エース', '短距離', '短距離', 'マイルエース', 'マイル', 'マイル', '中距離エース', '中距離', '中距離', '長距離エース', '長距離', '長距離', 'ダートエース', 'ダート', 'ダート']; //テーブル見出しテキスト

assessmentButton.onclick = function () {
  arrayInpot();
  hog();

};

function hog() {

  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(array[0].reduce(reducer)); //仮置き
};
function arrayInpot() {
  for (let i = 0; i < Heading.length; i++) {
    for (let j = 0; j < races.length; j++) {
      if (j >= 1 && j <= 5) {
        array0.push(document.getElementById('pt' + j + ',' + i).valueAsNumber);
      };
    };
    array = [[i], [array0]];
    array0 = [];
    console.log(array);
  };
};

//計算プログラム

mainTable();

//繰り返しテーブル
//見出しテーブル
function mainTable() {
  let table = document.getElementById('testTable');
  let newRow = table.insertRow();
  for (let i = 0; i < races.length; i++) {
    let newTextA = document.createElement('th');
    newTextA.innerHTML = races[i];
    newRow.appendChild(newTextA);
  }
  //記入欄テーブル
  for (let i = 0; i < Heading.length; i++) {
    //テーブル作成
    let table = document.getElementById('testTable');

    //行の追加
    let newRow = table.insertRow();

    //見出し(適正距離)
    let newText = document.createElement('th');
    newText.innerHTML = Heading[i];
    newRow.appendChild(newText);

    //セル変数宣言
    let newCell = newRow.insertCell();
    let nameCell = document.createElement('input')
    let newInput = document.createElement('input');

    for (let j = 0; j < races.length; j++) {
      if (j === 0) {
        //名前入力(1列目)
        nameCell.setAttribute("type", "text")
        newCell.appendChild(nameCell);
      } else if (j >= 1 && j <= 5) {
        //スコア入力(2~6列目)
        newCell = newRow.insertCell();
        newInput = document.createElement('input');
        newInput.setAttribute("type", "number",);
        newInput.setAttribute("id", "pt" + '' + j + ',' + i);
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
