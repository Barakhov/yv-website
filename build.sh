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

# TODO panic if `ENVIRONMENT` is not set.
npm run build:${ENVIRONMENT}