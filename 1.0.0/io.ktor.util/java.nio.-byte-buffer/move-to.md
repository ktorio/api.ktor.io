---
title: moveTo - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">java.nio.ByteBuffer</a> / <a href="./move-to.html">moveTo</a></div>

# moveTo

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">.</span><span class="identifier">moveTo</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$moveTo(java.nio.ByteBuffer, java.nio.ByteBuffer, kotlin.Int)/destination">destination</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$moveTo(java.nio.ByteBuffer, java.nio.ByteBuffer, kotlin.Int)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Int.MAX_VALUE<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Moves bytes from <code>this</code> buffer to the <a href="move-to.html#io.ktor.util$moveTo(java.nio.ByteBuffer, java.nio.ByteBuffer, kotlin.Int)/destination">destination</a> buffer

### Parameters

<code>destination</code> - is the buffer to copy bytes to

<code>limit</code> - is an optional parameter specifying maximum number of bytes to be moved

**Return**
number of bytes moved

