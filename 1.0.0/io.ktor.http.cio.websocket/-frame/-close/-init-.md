---
title: Frame.Close.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">Frame</a> / <a href="index.html">Close</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Close$<init>(io.ktor.http.cio.websocket.CloseReason)/reason">reason</span><span class="symbol">:</span>&nbsp;<a href="../../-close-reason/index.html"><span class="identifier">CloseReason</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">Close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Close$<init>(kotlinx.io.core.ByteReadPacket)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">Close</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Close$<init>(java.nio.ByteBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span></code></div>

Represents a low-level level close frame. It could be sent to indicate web socket session end.
Usually there is no need to send/handle it unless you have a RAW web socket session.

</div>
