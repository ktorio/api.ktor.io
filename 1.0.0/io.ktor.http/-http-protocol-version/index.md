---
title: HttpProtocolVersion - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HttpProtocolVersion</a></div>

# HttpProtocolVersion

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpProtocolVersion</span></code></div>

Represents an HTTP protocol version.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpProtocolVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HttpProtocolVersion$<init>(kotlin.String, kotlin.Int, kotlin.Int)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.HttpProtocolVersion$<init>(kotlin.String, kotlin.Int, kotlin.Int)/major">major</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.HttpProtocolVersion$<init>(kotlin.String, kotlin.Int, kotlin.Int)/minor">minor</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span></code></div>

Represents an HTTP protocol version.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="major.html">major</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">major</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

specifies protocol major version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="minor.html">minor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">minor</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

specifies protocol minor version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

specifies name of the protocol, e.g. "HTTP".


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-h-t-t-p_1_0.html">HTTP_1_0</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HTTP_1_0</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpProtocolVersion</span></a></code></div>

HTTP/1.0 version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-h-t-t-p_1_1.html">HTTP_1_1</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HTTP_1_1</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpProtocolVersion</span></a></code></div>

HTTP/1.1 version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-h-t-t-p_2_0.html">HTTP_2_0</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HTTP_2_0</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpProtocolVersion</span></a></code></div>

HTTP/2.0 version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-q-u-i-c.html">QUIC</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">QUIC</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpProtocolVersion</span></a></code></div>

QUIC/1.0 version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-p-d-y_3.html">SPDY_3</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SPDY_3</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpProtocolVersion</span></a></code></div>

SPDY/3.0 version.


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from-value.html">fromValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fromValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HttpProtocolVersion.Companion$fromValue(kotlin.String, kotlin.Int, kotlin.Int)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HttpProtocolVersion.Companion$fromValue(kotlin.String, kotlin.Int, kotlin.Int)/major">major</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HttpProtocolVersion.Companion$fromValue(kotlin.String, kotlin.Int, kotlin.Int)/minor">minor</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpProtocolVersion</span></a></code></div>

Creates an instance of <a href="./index.md">HttpProtocolVersion</a> from the given parameters.


</td>
</tr>
</tbody>
</table>
