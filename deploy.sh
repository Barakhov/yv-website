#!/bin/bash

# Exit on failure. This will abort the build pipeline if one of the following
# commands fail.
set -e

# Abort the build pipeline if $ENVIRONMENT is not present.
if [ -z "$ENVIRONMENT" ]
then
    echo "error: ENVIRONMENT is not set, aborting..."
    exit 1
fi

npm run build:${ENVIRONMENT}

# The next tests will check for the AWS data required to deploy. Since
# CloudFront invalidates the cache eventually, we will prevent the deployment
# to S3 if CDN_ID is not present.

# Abort the build pipeline if $S3_BUCKET is not present.
if [ -z "$S3_BUCKET" ]
then
    echo "error: S3_BUCKET is not set, aborting..."
    exit 1
fi

# Abort the build pipeline if $CDN_ID is not present.
if [ -z "$CDN_ID" ]
then
    echo "error: CDN_ID is not set, aborting..."
    exit 1
fi

# TODO panic if `S3_BUCKET` is not set.
aws s3 sync ./_site ${S3_BUCKET} --acl public-read --delete

# TODO skip if `CDN_ID` is not set. DEV and/or ACC don't use a CDN.
aws cloudfront create-invalidation --distribution-id ${CDN_ID} --paths '/*'