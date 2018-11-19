---
title: decodeChunked - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./decode-chunked.html">decodeChunked</a></div>

# decodeChunked

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">decodeChunked</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$decodeChunked(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$decodeChunked(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel)/out">out</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Chunked stream decoding loop

