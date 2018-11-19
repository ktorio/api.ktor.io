---
title: io.ktor.util.cio.kotlinx.coroutines.io.ByteWriteChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="./index.html">kotlinx.coroutines.io.ByteWriteChannel</a></div>

### Extensions for kotlinx.coroutines.io.ByteWriteChannel

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="buffered-writer.html">bufferedWriter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="identifier">bufferedWriter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$bufferedWriter(kotlinx.coroutines.io.ByteWriteChannel, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/BufferedWriter.html"><span class="identifier">BufferedWriter</span></a></code></div>

Open a buffered writer to the channel


</td>
</tr>
<tr>
<td markdown="1">

<a href="use.html">use</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="identifier">use</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$use(kotlinx.coroutines.io.ByteWriteChannel, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes <a href="use.html#io.ktor.util.cio$use(kotlinx.coroutines.io.ByteWriteChannel, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/block">block</a> on <a href="#">ByteWriteChannel</a> and close it down correctly whether an exception


</td>
</tr>
<tr>
<td markdown="1">

<a href="write.html">write</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="identifier">write</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$write(kotlinx.coroutines.io.ByteWriteChannel, kotlin.String, java.nio.charset.Charset)/string">string</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$write(kotlinx.coroutines.io.ByteWriteChannel, kotlin.String, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Write a <a href="write.html#io.ktor.util.cio$write(kotlinx.coroutines.io.ByteWriteChannel, kotlin.String, java.nio.charset.Charset)/string">string</a> in the specified <a href="write.html#io.ktor.util.cio$write(kotlinx.coroutines.io.ByteWriteChannel, kotlin.String, java.nio.charset.Charset)/charset">charset</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="writer.html">writer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="identifier">writer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$writer(kotlinx.coroutines.io.ByteWriteChannel, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/Writer.html"><span class="identifier">Writer</span></a></code></div>

Open a writer to the channel


</td>
</tr>
</tbody>
</table>
