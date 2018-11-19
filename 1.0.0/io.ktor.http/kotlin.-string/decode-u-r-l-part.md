---
title: decodeURLPart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">kotlin.String</a> / <a href="./decode-u-r-l-part.html">decodeURLPart</a></div>

# decodeURLPart

<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">decodeURLPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/start">start</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/end">end</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;length<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Decode percent encoded URL part within the specified range [<a href="decode-u-r-l-part.html#io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/start">start</a>, <a href="decode-u-r-l-part.html#io.ktor.http$decodeURLPart(kotlin.String, kotlin.Int, kotlin.Int, java.nio.charset.Charset)/end">end</a>).
This function is not intended to decode urlencoded forms so it doesn't decode plus character to space.

