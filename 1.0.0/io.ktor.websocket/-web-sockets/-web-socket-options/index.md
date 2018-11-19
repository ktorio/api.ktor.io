---
title: WebSockets.WebSocketOptions - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.websocket</a> / <a href="../index.html">WebSockets</a> / <a href="./index.html">WebSocketOptions</a></div>

# WebSocketOptions

<div class="signature"><code><span class="keyword">class </span><span class="identifier">WebSocketOptions</span></code></div>

Websockets configuration options

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">WebSocketOptions</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Websockets configuration options


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="masking.html">masking</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">masking</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Whether masking need to be enabled (useful for security)


</td>
</tr>
<tr>
<td markdown="1">

<a href="max-frame-size.html">maxFrameSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">maxFrameSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

Maximum frame that could be received or sent


</td>
</tr>
<tr>
<td markdown="1">

<a href="ping-period.html">pingPeriod</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">pingPeriod</span><span class="symbol">: </span><span class="identifier">Duration</span><span class="symbol">?</span></code></div>

Duration between pings or <code>null</code> to disable pings


</td>
</tr>
<tr>
<td markdown="1">

<a href="timeout.html">timeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">timeout</span><span class="symbol">: </span><span class="identifier">Duration</span></code></div>

write/ping timeout after that a connection will be closed


</td>
</tr>
</tbody>
</table>
