---
title: readBytes - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio.websocket</a> / <a href="./read-bytes.html">readBytes</a></div>

# readBytes

<div class="signature"><code><span class="keyword">fun </span><a href="-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Read binary content from a frame. For fragmented frames only returns this fragment.

