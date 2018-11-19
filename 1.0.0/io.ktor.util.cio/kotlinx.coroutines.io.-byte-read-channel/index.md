---
title: io.ktor.util.cio.kotlinx.coroutines.io.ByteReadChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="./index.html">kotlinx.coroutines.io.ByteReadChannel</a></div>

### Extensions for kotlinx.coroutines.io.ByteReadChannel

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="pass.html">pass</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">ByteReadChannel</span><span class="symbol">.</span><span class="identifier">pass</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$pass(kotlinx.coroutines.io.ByteReadChannel, java.nio.ByteBuffer, kotlin.SuspendFunction1((java.nio.ByteBuffer, kotlin.Unit)))/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$pass(kotlinx.coroutines.io.ByteReadChannel, java.nio.ByteBuffer, kotlin.SuspendFunction1((java.nio.ByteBuffer, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Read data chunks from <a href="#">ByteReadChannel</a> using buffer


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-byte-array.html">toByteArray</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">ByteReadChannel</span><span class="symbol">.</span><span class="identifier">toByteArray</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$toByteArray(kotlinx.coroutines.io.ByteReadChannel, kotlin.Int)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Int.MAX_VALUE<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Convert <a href="#">ByteReadChannel</a> to <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html">ByteArray</a>


</td>
</tr>
</tbody>
</table>
