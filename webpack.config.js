const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/main.js',
    styles: './src/styles.js',
    floating: './src/js/floating-icons.js',
    parallax: './src/js/parallax.js',
    paymentMethods: './src/js/payment-methods.js',
    paymentMethodsInner: './src/js/payment-methods-inner.js',
    eventsListingApp: './src/js/events-listing-app.js',
    eventsDetailApp: './src/js/events-detail-app.js',
    sharing: './src/js/social-sharing.js',
    eyes: './src/js/eyes.js',
    slicepay: './src/js/slicepay.js',
    homeScript: './src/js/home.js',
    contactPageForm: './src/js/contact-page-form.js',
    careers: './src/js/careers.js',
    pressTabs: './src/js/press-tabs.js',
    reportingTabs: './src/js/reporting-tabs.js',
    rebranding: './src/js/rebranding.js',
    aboutPage: './src/js/about-scripts.js',
    bambooCareers: './src/js/bamboo-careers.js',
    schemeUpdates: './src/js/scheme-updates-table.js',
    cookieApp: './src/js/cookie-app.js',
    smartTables: './src/js/smart-tables.js',
    headerToaster: './src/js/header-toaster.js',
    deskPhoneScrollingAnimation: './src/js/desk-phone-scrolling-animation.js',
    clientLogoShowcase: './src/js/client-logo-showcase.js',
    embeddedFormsRUID: './src/js/embedded-forms-ruid.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: devMode ? '[name].js' : '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    // exposing myLib to make instance of the headerToaster class in scripts.html
    libraryTarget: 'window',
    library: 'myLib'
  },
  devtool: devMode ? 'source-map' : '',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // devMode ? MiniCssExtractPlugin.loader : 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false
            }
          }
        ]
      },
      {
        test: require.resolve('svg4everybody'),
        use: 'imports-loader?this=>window'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      hash: !devMode,
      filename: './../_includes/scripts/main_scripts.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['vendor', 'main']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/floating_icons.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['floating']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/home.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['homeScript']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/social_sharing.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['sharing']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/parallax.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['parallax']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/about_scripts.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['aboutPage']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/bamboo_careers.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['bambooCareers']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/careers.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['careers']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/press_tabs.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['pressTabs']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/reporting_tabs.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['reportingTabs']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/eyes.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['eyes']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/slicepay.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['slicepay']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/rebranding.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['rebranding']
    }),      
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/smart_tables.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['smartTables']
    }),        
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/header_toaster.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['headerToaster']
    }),        
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/desk_phone_scrolling_animation.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['deskPhoneScrollingAnimation']
    }),        
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/client_logo_showcase.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['clientLogoShowcase']
    }),        
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/embedded_forms_ruid.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['embeddedFormsRUID']
    }),        
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/cookie_app.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['cookieApp']
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/payment_methods.html',
      template: './_includes/scripts/_vue.html',
      chunks: ['paymentMethods'],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/payment_methods_inner.html',
      template: './_includes/scripts/_scripts.html',
      chunks: ['paymentMethodsInner']
    }),    
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/events_listing_app.html',
      template: './_includes/scripts/_vue.html',
      chunks: ['eventsListingApp'],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/events_detail_app.html',
      template: './_includes/scripts/_vue.html',
      chunks: ['eventsDetailApp'],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/scheme_updates_table.html',
      template: './_includes/scripts/_vue.html',
      chunks: ['schemeUpdates'],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './../_includes/scripts/contact_page_form.html',
      template: './_includes/scripts/_vue.html',
      chunks: ['contactPageForm'],
      inject: false
    }),
    new HtmlWebpackPlugin({
      hash: !devMode,
      filename: './../_includes/scripts/styles.html',
      template: './_includes/scripts/_styles.html',
      chunks: ['styles'],
      inject: false
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      variables$: path.resolve(__dirname, './_scss/abstracts/_variables.scss'),
      functions$: path.resolve(__dirname, './_scss/abstracts/_functions.scss'),
      colors$: path.resolve(__dirname, './_scss/abstracts/_colors.scss'),
      mixins$: path.resolve(__dirname, './_scss/abstracts/_mixins.scss'),
      caret$: path.resolve(__dirname, './_scss/components/_caret.scss'),
      icons$: path.resolve(__dirname, './assets/icons/symbol-defs.svg'),
      formMessageStyles$: path.resolve(__dirname, './_scss/components/_form-message.scss'),
      spinnerStyles$: path.resolve(__dirname, './_scss/components/_spinner.scss')            
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production';
}
