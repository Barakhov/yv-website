FROM ruby:2.6-stretch

RUN apt-get update -yq \
    && apt-get install curl gnupg python3 jq python3-pip -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

WORKDIR /app
COPY . .
RUN npm install
RUN gem install bundler:2.0.1
RUN bundler install ${BUNDLER_PARAMS}
RUN pip3 --version
RUN pip3 install --upgrade awscli==1.14.5
RUN chmod +x build.sh deploy.sh
CMD ["./build.sh"]
# CMD npm run build:${ENVIRONMENT} && aws s3 sync ./_site ${S3_BUCKET} --acl public-read --delete && if [ "$ENVIRONMENT" = "prod" ]; then aws cloudfront create-invalidation --distribution-id ${CDN_ID} --paths '/*' ; fi
