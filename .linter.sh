#!/bin/bash
cd /home/kavia/workspace/code-generation/chromatic-canvas-26304-780745ac/chromatic_canvas
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

