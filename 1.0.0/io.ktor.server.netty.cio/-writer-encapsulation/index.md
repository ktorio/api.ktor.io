---
title: WriterEncapsulation - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.netty.cio</a> / <a href="./index.html">WriterEncapsulation</a></div>

# WriterEncapsulation

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">WriterEncapsulation</span></code></div>

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http1/index.html">Http1</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Http1</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriterEncapsulation</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http2/index.html">Http2</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Http2</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriterEncapsulation</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-raw/index.html">Raw</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Raw</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriterEncapsulation</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="requires-context-close.html">requiresContextClose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">requiresContextClose</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="end-of-stream.html">endOfStream</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">endOfStream</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation$endOfStream(kotlin.Boolean)/lastTransformed">lastTransformed</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="transform.html">transform</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">transform</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation$transform(io.netty.buffer.ByteBuf, kotlin.Boolean)/buf">buf</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteBuf</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation$transform(io.netty.buffer.ByteBuf, kotlin.Boolean)/last">last</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="upgrade.html">upgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">upgrade</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation$upgrade(io.netty.channel.ChannelHandlerContext)/dst">dst</span><span class="symbol">:</span>&nbsp;<span class="identifier">ChannelHandlerContext</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http1/index.html">Http1</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Http1</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriterEncapsulation</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http2/index.html">Http2</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Http2</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriterEncapsulation</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-raw/index.html">Raw</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Raw</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriterEncapsulation</span></a></code></div>

</td>
</tr>
</tbody>
</table>
