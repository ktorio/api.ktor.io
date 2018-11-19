---
title: readChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="index.html">java.nio.file.Path</a> / <a href="./read-channel.html">readChannel</a></div>

# readChannel

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Path</span><span class="symbol">.</span><span class="identifier">readChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$readChannel(java.nio.file.Path, kotlin.Long, kotlin.Long)/start">start</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$readChannel(java.nio.file.Path, kotlin.Long, kotlin.Long)/endInclusive">endInclusive</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Path</span><span class="symbol">.</span><span class="identifier">readChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Open a read channel for file and launch a coroutine to fill it.
Please note that file reading is blocking so if you are starting it on <a href="#">Dispatchers.Unconfined</a> it may block
your async code

