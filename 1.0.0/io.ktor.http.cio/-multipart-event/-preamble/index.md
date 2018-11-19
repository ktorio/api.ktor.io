---
title: MultipartEvent.Preamble - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio</a> / <a href="../index.html">MultipartEvent</a> / <a href="./index.html">Preamble</a></div>

# Preamble

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Preamble</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart content preamble. A multipart stream could have at most one preamble.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Preamble</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.MultipartEvent.Preamble$<init>(kotlinx.io.core.ByteReadPacket)/body">body</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">)</span></code></div>

Represents a multipart content preamble. A multipart stream could have at most one preamble.


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">body</span><span class="symbol">: </span><span class="identifier">ByteReadPacket</span></code></div>

contains preamble's content


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
