---
title: io.ktor.util.cio.java.io.File - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="./index.html">java.io.File</a></div>

### Extensions for java.io.File

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="read-channel.html">readChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">.</span><span class="identifier">readChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$readChannel(java.io.File, kotlin.Long, kotlin.Long, )/start">start</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$readChannel(java.io.File, kotlin.Long, kotlin.Long, )/endInclusive">endInclusive</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a>&nbsp;<span class="symbol">=</span>&nbsp;-1<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$readChannel(java.io.File, kotlin.Long, kotlin.Long, )/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;Dispatchers.IO<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Open a read channel for file and launch a coroutine to fill it.
Please note that file reading is blocking so if you are starting it on <a href="#">Dispatchers.Unconfined</a> it may block
your async code


</td>
</tr>
<tr>
<td markdown="1">

<a href="write-channel.html">writeChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">.</span><span class="identifier">writeChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$writeChannel(java.io.File, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

Open a write channel for file and launch a coroutine to read from it.
Please note that file writing is blocking so if you are starting it on <a href="#">Dispatchers.Unconfined</a> it may block
your async code


</td>
</tr>
</tbody>
</table>
