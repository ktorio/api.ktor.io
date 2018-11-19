---
title: DeflateEncoder.compress - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">DeflateEncoder</a> / <a href="./compress.html">compress</a></div>

# compress

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">compress</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DeflateEncoder$compress(kotlinx.coroutines.io.ByteReadChannel, )/readChannel">readChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DeflateEncoder$compress(kotlinx.coroutines.io.ByteReadChannel, )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Overrides <a href="../-compression-encoder/compress.html">CompressionEncoder.compress</a>

Wraps <a href="compress.html#io.ktor.features.DeflateEncoder$compress(kotlinx.coroutines.io.ByteReadChannel, )/readChannel">readChannel</a> into a compressing <a href="#">ByteReadChannel</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">compress</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DeflateEncoder$compress(kotlinx.coroutines.io.ByteWriteChannel, )/writeChannel">writeChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DeflateEncoder$compress(kotlinx.coroutines.io.ByteWriteChannel, )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

Overrides <a href="../-compression-encoder/compress.html">CompressionEncoder.compress</a>

Wraps <a href="compress.html#io.ktor.features.DeflateEncoder$compress(kotlinx.coroutines.io.ByteWriteChannel, )/writeChannel">writeChannel</a> into a compressing <a href="#">ByteWriteChannel</a>

</div>
