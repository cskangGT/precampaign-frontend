//webpack.config.dev.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 선택한 모드를 통해 webpack이 알맞은 내장 최적화를 사용
  entry: './src/index.tsx',
  //application이 여기서 시작
  output: {
    //webpack 이 결과를 내보내는 방법과 옵션
    filename: '[name].[contenthash].js',
    //the filename template for entry chunks
    chunkFilename: '[name].bundle.js',

    publicPath: '/',
    // HTML 페이지에 상대적으로 해석된 출력 디렉토리 url
    path: path.resolve(__dirname, 'dist'),
    //모든 출력 파일의 대상 디렉터리는 반드시 절대 경로여야한다.
  },
  devtool: 'inline-source-map',
  //브라우저 devtools에 대한 메타 정보를 추가하여 디버깅 향샹 -> 빌드 속도는 느릴수있으나 상세한 소스맵

  module: {
    rules: [
      // 모듈에 관한 규칙 (로더 설정, parser option)
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          // 복수의 로더와 옵션을 적용
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: 'images/[name]-[hash].[ext]',
          },
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['.js', '.json', '.ts', '.tsx'] },
  // 모듈 요청 해석 옵션 사용한 확장자
  devServer: {
    host: 'localhost',
    //사용될 호스트 지정
    historyApiFallback: true,
    // compress: true,
    //모든 항목에 대해 gzip압축 사용
    hot: true,
    //webpack의 HMR 기능 활성화
    port: 3000,
    open: true,
    //dev server 구동 후 브라우저 열기
  },
  stats: {
    cachedModules: false,
    //표시되는 번들 정보를 정확하게 제어
    //빌드되지 않고 캐시 된 모듈에 대한 정보를 추가할지 여부를 stats에 알려준다.
  },
  plugins: [new HtmlWebPackPlugin({ template: './public/index.html' })],
};

//  Webpack Plugin

// - 로더 :      우리가 갖고 있는 모듈을 최종적으로 output 으로 만들어가는 과정에서 사용되는 것

// 정형화되어 있음

// - 플러그인 : 만들어진 결과물을 최종적으로 변형하는 것

//  자유로움
