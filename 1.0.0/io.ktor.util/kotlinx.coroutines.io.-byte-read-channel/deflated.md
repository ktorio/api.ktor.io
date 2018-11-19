---
title: deflated - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">kotlinx.coroutines.io.ByteReadChannel</a> / <a href="./deflated.html">deflated</a></div>

# deflated

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ByteReadChannel</span><span class="symbol">.</span><span class="identifier">deflated</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$deflated(kotlinx.coroutines.io.ByteReadChannel, kotlin.Boolean, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), )/gzip">gzip</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$deflated(kotlinx.coroutines.io.ByteReadChannel, kotlin.Boolean, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), )/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$deflated(kotlinx.coroutines.io.ByteReadChannel, kotlin.Boolean, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;Dispatchers.Unconfined<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Launch a coroutine on <a href="deflated.html#io.ktor.util$deflated(kotlinx.coroutines.io.ByteReadChannel, kotlin.Boolean, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), )/coroutineContext">coroutineContext</a> that does deflate compression
optionally doing CRC and writing GZIP header and trailer if <a href="deflated.html#io.ktor.util$deflated(kotlinx.coroutines.io.ByteReadChannel, kotlin.Boolean, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), )/gzip">gzip</a> = <code>true</code>

