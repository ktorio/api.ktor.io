---
title: MultipartEvent.MultipartPart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio</a> / <a href="../index.html">MultipartEvent</a> / <a href="./index.html">MultipartPart</a></div>

# MultipartPart

<div class="signature"><code><span class="keyword">class </span><span class="identifier">MultipartPart</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart part. There could be any number of parts in a multipart stream. Please note that
it is important to consume <a href="body.html">body</a> otherwise multipart parser could get stuck (suspend)
so you will not receive more events.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">MultipartPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.MultipartEvent.MultipartPart$<init>(kotlinx.coroutines.Deferred((io.ktor.http.cio.HttpHeadersMap)), kotlinx.coroutines.io.ByteReadChannel)/headers">headers</span><span class="symbol">:</span>&nbsp;<span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../../-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.MultipartEvent.MultipartPart$<init>(kotlinx.coroutines.Deferred((io.ktor.http.cio.HttpHeadersMap)), kotlinx.coroutines.io.ByteReadChannel)/body">body</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">)</span></code></div>

Represents a multipart part. There could be any number of parts in a multipart stream. Please note that
it is important to consume <a href="-init-.html#io.ktor.http.cio.MultipartEvent.MultipartPart$<init>(kotlinx.coroutines.Deferred((io.ktor.http.cio.HttpHeadersMap)), kotlinx.coroutines.io.ByteReadChannel)/body">body</a> otherwise multipart parser could get stuck (suspend)
so you will not receive more events.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="body.html">body</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">body</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

a channel of part content


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../../-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><span class="symbol">&gt;</span></code></div>

deferred that will be completed once will be parsed


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="release.html">release</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">release</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Release underlying data/packet.


</td>
</tr>
</tbody>
</table>
