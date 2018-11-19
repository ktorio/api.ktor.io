---
title: parsePreamble - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./parse-preamble.html">parsePreamble</a></div>

# parsePreamble

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">parsePreamble</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parsePreamble(java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlinx.io.core.BytePacketBuilder, kotlin.Long)/boundaryPrefixed">boundaryPrefixed</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parsePreamble(java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlinx.io.core.BytePacketBuilder, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parsePreamble(java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlinx.io.core.BytePacketBuilder, kotlin.Long)/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">BytePacketBuilder</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parsePreamble(java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlinx.io.core.BytePacketBuilder, kotlin.Long)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Long.MAX_VALUE<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

Parse a multipart preamble

**Return**
number of bytes copied

