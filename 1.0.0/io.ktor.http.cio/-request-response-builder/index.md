---
title: RequestResponseBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio</a> / <a href="./index.html">RequestResponseBuilder</a></div>

# RequestResponseBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">RequestResponseBuilder</span></code></div>

Builds an HTTP request or response

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RequestResponseBuilder</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Builds an HTTP request or response


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadPacket</span></code></div>

Build a packet of request/response


</td>
</tr>
<tr>
<td markdown="1">

<a href="bytes.html">bytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">bytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$bytes(kotlin.ByteArray, kotlin.Int, kotlin.Int)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$bytes(kotlin.ByteArray, kotlin.Int, kotlin.Int)/offset">offset</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$bytes(kotlin.ByteArray, kotlin.Int, kotlin.Int)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;content.size<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">bytes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$bytes(java.nio.ByteBuffer)/content">content</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append raw bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="empty-line.html">emptyLine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">emptyLine</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append an empty line (CR + LF in fact)


</td>
</tr>
<tr>
<td markdown="1">

<a href="header-line.html">headerLine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headerLine</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$headerLine(kotlin.CharSequence, kotlin.CharSequence)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$headerLine(kotlin.CharSequence, kotlin.CharSequence)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append header line


</td>
</tr>
<tr>
<td markdown="1">

<a href="line.html">line</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">line</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$line(kotlin.CharSequence)/line">line</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a line


</td>
</tr>
<tr>
<td markdown="1">

<a href="release.html">release</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">release</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Release all resources hold by the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="request-line.html">requestLine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">requestLine</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$requestLine(io.ktor.http.HttpMethod, kotlin.CharSequence, kotlin.CharSequence)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$requestLine(io.ktor.http.HttpMethod, kotlin.CharSequence, kotlin.CharSequence)/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$requestLine(io.ktor.http.HttpMethod, kotlin.CharSequence, kotlin.CharSequence)/version">version</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append request line


</td>
</tr>
<tr>
<td markdown="1">

<a href="response-line.html">responseLine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">responseLine</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$responseLine(kotlin.CharSequence, kotlin.Int, kotlin.CharSequence)/version">version</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$responseLine(kotlin.CharSequence, kotlin.Int, kotlin.CharSequence)/status">status</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.RequestResponseBuilder$responseLine(kotlin.CharSequence, kotlin.Int, kotlin.CharSequence)/statusText">statusText</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response status line


</td>
</tr>
</tbody>
</table>
