---
title: WebSocketReader.FrameTooBigException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">WebSocketReader</a> / <a href="./index.html">FrameTooBigException</a></div>

# FrameTooBigException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">FrameTooBigException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Raised when the frame is bigger than allowed in a current websocket session

### Parameters

<code>frameSize</code> - size of received or posted frame that is too big

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">FrameTooBigException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader.FrameTooBigException$<init>(kotlin.Long)/frameSize">frameSize</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span></code></div>

Raised when the frame is bigger than allowed in a current websocket session


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="frame-size.html">frameSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">frameSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

size of received or posted frame that is too big


</td>
</tr>
<tr>
<td markdown="1">

<a href="message.html">message</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">message</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
