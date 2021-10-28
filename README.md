# Payvision.com - Website code repository

This is the repository containing all the sourcecode and the scripts neccessary to build the website for payvision.com

## Prerequisites
Before downloading and running this repo bear in mind that your machine should have installed the following:

* [Node.js](https://nodejs.org/en/) - This repo uses Node.js, npm and node modules for several features during development
* [Ruby](https://www.ruby-lang.org/en/downloads/) - The site is built through [Jekyll](https://jekyllrb.com/), a static files generator running over Ruby. Therefore this is a required dependency
* [Bundler](https://bundler.io/) - To manage and install required gems on the project

## Getting started
Make sure the above mentioned prerequisites are present in your machine
1. Clone this repo with `git clone`
2. Move to the root folder of this project
3. Run `npm install` and `bundler install` in order to install dependencies and clean the git repo.

## Development
To start developing follow below steps
1. Open **2 different console windows**
2. On the first console run `npm run start` to start webpack on **dev mode**. This will watch for file changes and rerun on every save.
3. On the second one, run `npm run serve`. This will start Jekyll **serve** with **livereload**, rebuilding the site every time a source file is modified and reloading the browser
4. Open a browser tab at the livereload server address, usually http://localhost:4000/

**Important!**

There are now 2 different config files for the project:
* `_config.yml` - Containing the common/dev setup
* `_config_prod.yml` - Containing the specific setup for PRODUCTION

Due to slow build times some important plugins are excluded in `_config.yml` to avoid slow site regeneration with `--livereload` while developing. The gems for these plugins are grouped under `:production` group in the `Gemfile`.

Becaue of this you need to choose the environment when running the command `bundler install`, like i.e: `bundler install --without production`. Bear in mind this when building / using Docker Image files or any other external tool for building the site.

Also, `jekyll-include-cache` gem has been included for future development stages in which site's size increases to avoid including dynamic and costly partials. Instead, with the tag `{% include_cached partial.html %}` the include will be dynamically built just once and then cached and served in following calls.
   
### Known Issues
It is possible that `npm run serve` fails when run on a Windows machine due a known issue with flag `--livereload` and the gem **eventmachine** on Ruby for Windows. In order to repair it, follow the steps below:
1. Uninstall this gem running `gem uninstall eventmachine`. In case of multiple versions of the gem, uninstall them all.
2. Install the correct gem version running `gem install eventmachine --platform ruby`

More detailed info about this can be found [here](https://httpain.com/blog/jekyll-live-reload-windows/).

### Folder structure
Here is the basic folder structure for the project

```

.
├── 404.html
├── about.md
├── assets <--- Place all your static asset files here. Access them by absolute routing via /assets/[...]
│   ├── fonts
│   └── img
├── _config.yml <--- The Jekyll config file that you need to set up
├── _data <--- For navigation and other stuff
├── Dockerfile <--- Docker image file for the project needed for CD by Docker agents on TFS
├── .eslintrc.yml
├── .eslintignore
├── Gemfile
├── Gemfile.lock
├── .gitignore
├── _i18n <--- Contains your posts and data in the language you need
├── _includes <--- This contains the include blocks for reusing
├── index.md
├── _layouts
│   ├── default.html <--- The default page layout. This imports via {%include%} the general styles, navigation, footer, etc
│   ├── home.html
│   └── page.html
|── package-lock.json
├── package.json <--- Update this file with your information especially the name which is used for the meta tags
├── postcss.config.js <--- Post css config for autoprefixing a minimizing styles
├── README.md
├── ROBOTS.txt
├── _scss <--- Put your partials here
│   └── main.scss <--- Imports all partials
├── scsslint.yml
├── _site   <--- Folder: contains all the final generated static files. Upload its content to the server
├── src <--- This folder contains your JS and SCSS entry points
│   ├── components <--- Folder: All .vue files for components are placed here
│   │       ├── RowTable.vue
│   │       ├── Dropdown.vue
│   │       ├── ...
│   ├── js <--- Folder: All .js files for partials and scripts
│   │       ├── eyes.js
│   │       ├── header.js
│   │       ├── ...
│   ├── main.js <--- Main entry point for webpack
│   ├── main.scss <--- Imports src/_scss/main.scss
│   └── styles.js <--- Webpack entry point for the styles
└── webpack.config.js <--- The Webpack config file for all the environment

```

## Build
In order to generate all the statics for the site follow the next steps:
1. Stop any other running processes on console, like the ones for development (`npm run start`, `npm run serve`). This unlock any previous build or currently used files.
2. Run `bundle install --without develop` to make sure needed gems for PROD are installed. If you just want to build the project for development/ testing purposes run `bundle install --without production` instead
3. Run the command `npm run build:prod` or `npm run build:dev` to get a clean new build for the site (for prod or testing environment). This will create the folder `_site` containing all site's file. Its content is what you'll need to upload to the hosting server.

## Deploy
Just upload all the content from folder `_site` to your hosting server.

To automatically upload the new generated site to payvision's dev server, run in a command window the command `npm run upload:dev` or `npm run upload:prod`. **Warning!** This will replace any previously existing content in the AWS bucket.

## _i18n
Internationalization is currently disabled on the project to speed up the building process. A dedicated branch of this repo is requried and it will be installed there. Further information to be provided.

## Other documentations
* [Jekyll](https://jekyllrb.com/)
* [Webpack](https://webpack.js.org/)
* [Jekyll multiple languages plugin](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin)
* [Jekyll SEO tag](https://github.com/jekyll/jekyll-seo-tag)
* [PostCSS](http://postcss.org/)
