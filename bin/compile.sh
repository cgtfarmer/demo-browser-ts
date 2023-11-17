#!/bin/bash

main() {
  rm -rf ./site/assets/js/{main,test} && \
  tsc && \
  browserifyImports
}

browserifyImports() {
  local sedString="s|'@/|'$BASE_PATH|g"
  find ./site/assets/js -name "*.js" -exec sed -Ei $sedString {} \;
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
