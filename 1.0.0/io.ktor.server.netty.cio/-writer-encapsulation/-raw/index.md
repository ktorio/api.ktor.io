---
title: WriterEncapsulation.Raw - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.netty.cio</a> / <a href="../index.html">WriterEncapsulation</a> / <a href="./index.html">Raw</a></div>

# Raw

<div class="signature"><code><span class="keyword">object </span><span class="identifier">Raw</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">WriterEncapsulation</span></a></code></div>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../requires-context-close.html">requiresContextClose</a>


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">endOfStream</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation.Raw$endOfStream(kotlin.Boolean)/lastTransformed">lastTransformed</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="transform.html">transform</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transform</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation.Raw$transform(io.netty.buffer.ByteBuf, kotlin.Boolean)/buf">buf</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteBuf</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation.Raw$transform(io.netty.buffer.ByteBuf, kotlin.Boolean)/last">last</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="upgrade.html">upgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">upgrade</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.netty.cio.WriterEncapsulation.Raw$upgrade(io.netty.channel.ChannelHandlerContext)/dst">dst</span><span class="symbol">:</span>&nbsp;<span class="identifier">ChannelHandlerContext</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
