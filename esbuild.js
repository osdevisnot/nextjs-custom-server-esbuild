#!/usr/bin/env node
const esbuild = require('esbuild')
const { spawn } = require('child_process')
const isDev = process.argv[2] !== 'build'
const pkg = require('./package.json')

process.env.NODE_ENV = isDev ? 'development' : 'production'

let server
const onRebuild = () => {
  if (isDev) {
    if (server) server.kill('SIGINT')
    server = spawn('node', ['dist/index.js'], { stdio: [0, 1, 2] })
  } else {
    spawn('yarn', ['next', 'build'], { stdio: [0, 1, 2] })
  }
}

esbuild
  .build({
    entryPoints: ['server/index.ts'],
    external: Object.keys(pkg.dependencies || {}),
    define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
    platform: 'node',
    outdir: 'dist',
    tsconfig: 'tsconfig.server.json',
    bundle: true,
    minify: isDev,
    sourcemap: isDev,
    watch: isDev && { onRebuild },
  })
  .finally(onRebuild)
