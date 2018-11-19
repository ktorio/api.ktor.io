---
title: Frame.Binary.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">Frame</a> / <a href="index.html">Binary</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Binary</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Binary$<init>(kotlin.Boolean, kotlinx.io.core.ByteReadPacket)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Binary$<init>(kotlin.Boolean, kotlinx.io.core.ByteReadPacket)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Binary</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Binary$<init>(kotlin.Boolean, java.nio.ByteBuffer)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Binary$<init>(kotlin.Boolean, java.nio.ByteBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span></code></div>

Represents an application level binary frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="-init-.html#io.ktor.http.cio.websocket.Frame.Binary$<init>(kotlin.Boolean, java.nio.ByteBuffer)/fin">fin</a> = false except the last one).
Note that usually there is no need to handle fragments unless you have a RAW web socket session.

</div>
