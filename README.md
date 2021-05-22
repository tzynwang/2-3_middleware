# 2-3 Middleware 實作練習

## 功能介紹
- 此APP會將每一筆對路由（endpoint）的請求紀錄：
  - 輸出至終端
  - 顯示在瀏覽器中
  - 寫入requestLogs資料夾中的requestLogs.txt檔案中
- 可下載純文字格式的請求紀錄檔案

## 環境需求
- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

## 開啟流程
請開啟終端機依序進行以下操作：
1. `git clone https://github.com/tzynwang/ac_assignment_2-3_middleware.git`
1. `cd ac_assignment_2-3_middleware`
1. `npm install`
1. `npm run dev`
1. 使用瀏覽器開啟：`http://localhost:3000` 即可瀏覽本專案
1. 點擊專案畫面中的綠色框線按鈕來發送請求
1. 對終端機按下兩次`Ctrl/Command + C`即可結束本專案