---
title: pass - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="index.html">kotlinx.coroutines.io.ByteReadChannel</a> / <a href="./pass.html">pass</a></div>

# pass

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">ByteReadChannel</span><span class="symbol">.</span><span class="identifier">pass</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$pass(kotlinx.coroutines.io.ByteReadChannel, java.nio.ByteBuffer, kotlin.SuspendFunction1((java.nio.ByteBuffer, kotlin.Unit)))/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$pass(kotlinx.coroutines.io.ByteReadChannel, java.nio.ByteBuffer, kotlin.SuspendFunction1((java.nio.ByteBuffer, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Read data chunks from <a href="#">ByteReadChannel</a> using buffer

