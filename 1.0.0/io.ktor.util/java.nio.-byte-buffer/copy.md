---
title: copy - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">java.nio.ByteBuffer</a> / <a href="./copy.html">copy</a></div>

# copy

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">.</span><span class="identifier">copy</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$copy(java.nio.ByteBuffer, kotlin.Int)/size">size</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remaining()<span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>

Moves all bytes in <code>this</code> buffer to a newly created buffer with the optionally specified <a href="copy.html#io.ktor.util$copy(java.nio.ByteBuffer, kotlin.Int)/size">size</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">.</span><span class="identifier">copy</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$copy(java.nio.ByteBuffer, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), kotlin.Int)/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$copy(java.nio.ByteBuffer, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), kotlin.Int)/size">size</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remaining()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>

Moves all bytes in <code>this</code> buffer to a newly created buffer with the optionally specified <a href="copy.html#io.ktor.util$copy(java.nio.ByteBuffer, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), kotlin.Int)/size">size</a> by allocating it from the given <a href="copy.html#io.ktor.util$copy(java.nio.ByteBuffer, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)), kotlin.Int)/pool">pool</a>

</div>
