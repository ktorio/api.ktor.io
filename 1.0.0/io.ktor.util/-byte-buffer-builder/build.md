---
title: ByteBufferBuilder.build - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">ByteBufferBuilder</a> / <a href="./build.html">build</a></div>

# build

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>

Builds a <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">ByteBuffer</a> from the accumulated data

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><s><span class="identifier">build</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.ByteBufferBuilder.Companion$build(java.nio.ByteOrder, kotlin.Function1((io.ktor.util.ByteBufferBuilder, kotlin.Unit)))/order">order</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteOrder.html"><span class="identifier">ByteOrder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ByteOrder.BIG_ENDIAN<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.ByteBufferBuilder.Companion$build(java.nio.ByteOrder, kotlin.Function1((io.ktor.util.ByteBufferBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="index.html"><span class="identifier">ByteBufferBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>

**Deprecated:** Use buildPacket instead

</div>
