---
title: IdentityEncoder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">IdentityEncoder</a></div>

# IdentityEncoder

<div class="signature"><code><span class="keyword">object </span><span class="identifier">IdentityEncoder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-compression-encoder/index.html"><span class="identifier">CompressionEncoder</span></a></code></div>

Implementation of the identity encoder

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="compress.html">compress</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">compress</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.IdentityEncoder$compress(kotlinx.coroutines.io.ByteReadChannel, )/readChannel">readChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.IdentityEncoder$compress(kotlinx.coroutines.io.ByteReadChannel, )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Wraps <a href="compress.html#io.ktor.features.IdentityEncoder$compress(kotlinx.coroutines.io.ByteReadChannel, )/readChannel">readChannel</a> into a compressing <a href="#">ByteReadChannel</a>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">compress</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.IdentityEncoder$compress(kotlinx.coroutines.io.ByteWriteChannel, )/writeChannel">writeChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.IdentityEncoder$compress(kotlinx.coroutines.io.ByteWriteChannel, )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

Wraps <a href="compress.html#io.ktor.features.IdentityEncoder$compress(kotlinx.coroutines.io.ByteWriteChannel, )/writeChannel">writeChannel</a> into a compressing <a href="#">ByteWriteChannel</a>


</td>
</tr>
</tbody>
</table>
