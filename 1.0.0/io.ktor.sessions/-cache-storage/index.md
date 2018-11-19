---
title: CacheStorage - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">CacheStorage</a></div>

# CacheStorage

<div class="signature"><code><span class="keyword">class </span><span class="identifier">CacheStorage</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CacheStorage</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CacheStorage$<init>(io.ktor.sessions.SessionStorage, kotlin.Long)/delegate">delegate</span><span class="symbol">:</span>&nbsp;<a href="../-session-storage/index.html"><span class="identifier">SessionStorage</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.CacheStorage$<init>(io.ktor.sessions.SessionStorage, kotlin.Long)/idleTimeout">idleTimeout</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="delegate.html">delegate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">delegate</span><span class="symbol">: </span><a href="../-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="invalidate.html">invalidate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">invalidate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CacheStorage$invalidate(kotlin.String)/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invalidates session <a href="invalidate.html#io.ktor.sessions.CacheStorage$invalidate(kotlin.String)/id">id</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="read.html">read</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">read</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.CacheStorage$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.CacheStorage.read.R)))/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.CacheStorage$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.CacheStorage.read.R)))/consumer">consumer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="identifier">ByteReadChannel</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="read.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="read.html#R"><span class="identifier">R</span></a></code></div>

Reads session <a href="read.html#io.ktor.sessions.CacheStorage$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.CacheStorage.read.R)))/id">id</a> using a <a href="read.html#io.ktor.sessions.CacheStorage$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.CacheStorage.read.R)))/consumer">consumer</a> as <a href="read.html#R">R</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="write.html">write</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">write</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.CacheStorage$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.CacheStorage$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="identifier">ByteWriteChannel</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Writes a session <a href="write.html#io.ktor.sessions.CacheStorage$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/id">id</a> using a specific <a href="write.html#io.ktor.sessions.CacheStorage$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</a>.


</td>
</tr>
</tbody>
</table>
