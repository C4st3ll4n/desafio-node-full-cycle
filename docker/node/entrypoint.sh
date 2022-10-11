#!/bin/bash
set -e

node /app/src/migrations.js
node /app/src/index.js 