# bundling-example-project

## project structure
```
bundling-example-project/
├── index.html
├── style.css
├── main.js
├── emoji.js
├── package.json # npm init으로 생성됨
├── webpack.config.js # 직접 생성한 웹팩 설정 파일
├── node_modules/ # npm install로 생성된 폴더
├── dist/ # 웹팩이 생성한 폴더
│ └── bundle.js # 웹팩으로 번들링된 파일
└── assets/
  ├── logo.svg
  └── Inter-Regular.woff2
  ```