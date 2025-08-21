#!/usr/bin/env sh
# Husky internal helper (simplified)
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env var is 0, skipping hook"
    exit 0
  }

  if [ ! -f package.json ]; then
    debug "package.json not found, skipping hook"
    exit 0
  }

  command -v node >/dev/null 2>&1 || {
    echo "Husky requires Node.js, but it's not installed or not in PATH." >&2
    exit 0
  }
fi