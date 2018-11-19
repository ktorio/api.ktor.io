---
title: split - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">kotlinx.coroutines.io.ByteReadChannel</a> / <a href="./split.html">split</a></div>

# split

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ByteReadChannel</span><span class="symbol">.</span><span class="identifier">split</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$split(kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.CoroutineScope)/coroutineScope">coroutineScope</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><span class="identifier">ByteReadChannel</span><span class="symbol">,</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">&gt;</span></code></div>

Split source <a href="#">ByteReadChannel</a> into 2 new one.
Cancel of one channel in split(input or both outputs) cancels other channels.

