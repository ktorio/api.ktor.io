---
title: WebSocketReader.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">WebSocketReader</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">WebSocketReader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, kotlin.Long, kotlinx.coroutines.Job, , kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/byteChannel">byteChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, kotlin.Long, kotlinx.coroutines.Job, , kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/maxFrameSize">maxFrameSize</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, kotlin.Long, kotlinx.coroutines.Job, , kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/parent">parent</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, kotlin.Long, kotlinx.coroutines.Job, , kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, kotlin.Long, kotlinx.coroutines.Job, , kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">WebSocketReader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, , kotlin.Long, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/byteChannel">byteChannel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, , kotlin.Long, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, , kotlin.Long, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/maxFrameSize">maxFrameSize</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, , kotlin.Long, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<span class="symbol">)</span></code></div>

Class that continuously reads a <a href="-init-.html#io.ktor.http.cio.websocket.WebSocketReader$<init>(kotlinx.coroutines.io.ByteReadChannel, , kotlin.Long, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/byteChannel">byteChannel</a> and
converts into Websocket <a href="../-frame/index.html">Frame</a> exposing them in <a href="incoming.html">incoming</a>.

### Parameters

<code>maxFrameSize</code> - maximum frame size that could be read

</div>
