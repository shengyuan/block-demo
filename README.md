# block-demo
提供自訂積木載入的範例程式。  
提供平台 ( https://kebbi.webduino.io/ ) 載入使用，

## 說明
1. 圖檔大小，建議使用寬高比為 5:3 的圖片。

## 檔案結構
```
.
├── blockly
│   ├── msg                 // 語系檔
│   │   ├── blocks
│   │   │   ├── en.js
│   │   │   ├── zh-hans.js
│   │   │   └── zh-hant.js
│   │   ├── en.js
│   │   ├── zh-hans.js
│   │   └── zh-hant.js
│   ├── blocks.js           // 積木樣式
│   ├── javascript.js       // 積木對應的程式語言
│   └── toolbox.xml         // 設定可提供使用的積木
├── blockly.json            // 載入的設定檔
├── index.js                // 自訂的方法
├── LICENSE
├── README.md
└── snapshot.jpg
```

## blockly.json
``` json
{
  "types": [ // 所有積木的種類
    "demo_1",
    "demo_2",
    "demo_3"
  ],
  "category": "catEduOuterExtension", // 加入平台的群組設定，固定值
  "scripts": [ // 積木樣式檔及程式語言檔案
    "blockly/blocks.js",
    "blockly/javascript.js"
  ],
  "dependencies": [ // 額外使用的 js 檔案，僅存放 js 檔
    "index.js"
  ],
  "msg": "blockly/msg",               // toolbox 語系檔路徑
  "blocksMsg": "blockly/msg/blocks",  // 積木語系檔
  "toolbox": "blockly/toolbox.xml"    // toolbox 檔案
}
```