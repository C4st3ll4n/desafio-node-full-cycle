#!/bin/bash
set -e

node /app/src/migrate.js
node /app/src/index.js 