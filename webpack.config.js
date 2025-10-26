const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.tsx', // 웹팩이 읽기 시작할 파일을 .tsx로 변경
  output: {
    filename: 'bundle.js', // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일이 어디에 저장될지
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 대상으로
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', // 최신 JS 문법을 변환
                '@babel/preset-react', // JSX를 변환
                '@babel/preset-typescript', // 타입스크립트를 변환
              ],
            },
          },
        ],
        exclude: /node_modules/, // 외부 모듈은 제외
      },
      {
        test: /\.css$/, // .css 파일을 처리
        use: [
          // 로더는 배열의 뒤에서부터 앞으로 순서대로 실행. css-loader가 먼저 실행, 그 다음 style-loader가 실행
          'style-loader', // CSS를 <style> 태그로 주입
          'css-loader', // CSS를 JavaScript 모듈로 변환
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 이미지 파일 확장자
        type: 'asset', // Asset Modules 사용
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 파일 import 시 확장자 생략 가능하도록 설정. .tsx 확장자도 처리 가능
  },
};
