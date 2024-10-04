#!/bin/bash
set -euo pipefail

_scripts_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
_root_dir="$(dirname "$_scripts_dir")"
_deps_dir="$_root_dir/deps"

readonly _git_deps=(
    "pomerium/pomerium|v0.27.0"
    "pomerium/pomerium-console|v0.27.0"
    'envoyproxy/protoc-gen-validate|v1.0.2'
    'envoyproxy/data-plane-api|d525ab36724d6a94477f7642e02418b50a8c4043'
    'cncf/xds|e9ce68804cb4e64cab5a52e3c8baf840d4ff87b7'
    'googleapis/googleapis|114a745b2841a044e98cdbb19358ed29fcf4a5f1'
)

function clone() {
    local _name="$1"
    local _tag="$2"
    local _dst="$3"

    echo "cloning $_name:$_tag to $_dst"
    if [ ! -d "$_dst" ]; then
        mkdir -p "$_dst"
        git clone "git@github.com:$_name" "$_dst"
    fi
    (
        cd "$_dst"
        git fetch
        git checkout "$_tag"
    )
}

function clone-all() {
    local _name _tag _dst
    for _dep in "${_git_deps[@]}"; do
        IFS=$'|' read -r _name _tag <<<"$_dep"
        _dst="$_deps_dir/github.com/$_name"
        clone "$_name" "$_tag" "$_dst"
    done
}

# clone-all

for _f in "$_deps_dir/github.com/pomerium/pomerium-console/pkg/pb/"*.proto; do
    (
        cd "$(dirname "$_f")"
        mkdir -p "$_root_dir/src/pomerium-console"
        npx protoc \
            --ts_out="$_root_dir/src/pomerium-console" \
            --ts_opt="generate_dependencies" \
            --proto_path="$_deps_dir" \
            --proto_path="$_deps_dir/github.com/cncf/xds" \
            --proto_path="$_deps_dir/github.com/envoyproxy/data-plane-api" \
            --proto_path="$_deps_dir/github.com/envoyproxy/protoc-gen-validate" \
            --proto_path="$_deps_dir/github.com/googleapis/googleapis" \
            --proto_path="$_deps_dir/github.com/pomerium/pomerium/pkg/grpc" \
            --proto_path="$_deps_dir/github.com/pomerium/pomerium-console/pkg/pb" \
            "$(basename "$_f")"
    )
done
