---
title: copyMultipart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./copy-multipart.html">copyMultipart</a></div>

# copyMultipart

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><s><span class="identifier">copyMultipart</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$copyMultipart(io.ktor.http.cio.HttpHeadersMap, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$copyMultipart(io.ktor.http.cio.HttpHeadersMap, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$copyMultipart(io.ktor.http.cio.HttpHeadersMap, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel)/out">out</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

**Deprecated:** Simply copy required number of bytes from input to output instead

