const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.ts', // 웹팩이 읽기 시작할 파일을 .ts로 변경
  output: {
    filename: 'bundle.js', // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일이 어디에 저장될지
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // .ts 파일들은
        use: 'ts-loader', // ts-loader를 거쳐 처리
        exclude: /node_modules/, // 외부 모듈은 제외
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // 파일 import 시 확장자 생략 가능하도록 설정. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋다.
  },
};
