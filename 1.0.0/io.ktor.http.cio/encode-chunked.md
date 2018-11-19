---
title: encodeChunked - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./encode-chunked.html">encodeChunked</a></div>

# encodeChunked

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">encodeChunked</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$encodeChunked(kotlinx.coroutines.io.ByteWriteChannel, )/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$encodeChunked(kotlinx.coroutines.io.ByteWriteChannel, )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-encoder-job.html"><span class="identifier">EncoderJob</span></a></code></div>

Start chunked stream encoding coroutine

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">encodeChunked</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$encodeChunked(kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.io.ByteReadChannel)/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$encodeChunked(kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.io.ByteReadChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Chunked stream encoding loop

</div>
