'use strict';
const assessmentButton = document.getElementById('assessment'); //ボタン関数
let array0 = []; // ID取得配列
let array = [];
const Heading = ['短距離エース', '短距離', '短距離', 'マイルエース', 'マイル', 'マイル', '中距離エース', '中距離', '中距離', '長距離エース', '長距離', '長距離', 'ダートエース', 'ダート', 'ダート']; //テーブル見出しテキスト

assessmentButton.onclick = function () {
  for (let i = 0; i < 15; i++) {
    for (let j = 1; j < 6; j++) {
      array0.push(document.getElementById('pt' + j + ',' + i).valueAsNumber);
    }
    console.log(array0);
    array = [[i], [array0]];
    array0 = [];
    console.log(array0);
    console.log(array);
  }
};

//計算プログラム



//繰り返しテーブル
for (let i = 0; i < 15; i++) {
  //テーブル作成
  let table = document.getElementById('testTable');

  //行の追加
  let newRow = table.insertRow();

  //見出し(適正距離)
  let newText = document.createElement('th');
  newText.innerHTML = Heading[i];
  newRow.appendChild(newText);

  //名前入力(1列目)
  let newCell = newRow.insertCell();
  let nameCell = document.createElement('input')
  nameCell.setAttribute("type", "text")
  newCell.appendChild(nameCell);

  //スコア入力(2~6列目)
  let newInput = document.createElement('input');
  for (let j = 1; j < 6; j++) {
    newCell = newRow.insertCell();
    newInput = document.createElement('input');
    newInput.setAttribute("type", "number",);
    newInput.setAttribute("id", "pt" + '' + j + ',' + i);
    newCell.appendChild(newInput);
  }

  newCell = newRow.insertCell();
  newInput = document.createTextNode(0);
  newCell.appendChild(newInput);
}
