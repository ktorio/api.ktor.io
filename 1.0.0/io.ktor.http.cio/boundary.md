---
title: boundary - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./boundary.html">boundary</a></div>

# boundary

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">boundary</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$boundary(java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel)/boundaryPrefixed">boundaryPrefixed</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$boundary(java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Skip multipart boundary

