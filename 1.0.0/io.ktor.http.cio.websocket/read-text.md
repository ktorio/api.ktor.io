---
title: readText - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio.websocket</a> / <a href="./read-text.html">readText</a></div>

# readText

<div class="signature"><code><span class="keyword">fun </span><a href="-frame/-text/index.html"><span class="identifier">Text</span></a><span class="symbol">.</span><span class="identifier">readText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Read text content from text frame. Shouldn't be used for fragmented frames: such frames need to be reassembled first

