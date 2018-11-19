---
title: Frame.Text.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">Frame</a> / <a href="index.html">Text</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Text</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.String)/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">Text</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, kotlinx.io.core.ByteReadPacket)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, kotlinx.io.core.ByteReadPacket)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Text</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, java.nio.ByteBuffer)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, java.nio.ByteBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span></code></div>

Represents an application level text frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="-init-.html#io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, java.nio.ByteBuffer)/fin">fin</a> = false except the last one).
Please note that a boundary between fragments could be in the middle of multi-byte (unicode) character
so don't apply String constructor to every fragment but use decoder loop instead of concatenate fragments first.
Note that usually there is no need to handle fragments unless you have a RAW web socket session.

</div>
