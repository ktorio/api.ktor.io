---
title: SessionStorageMemory - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionStorageMemory</a></div>

# SessionStorageMemory

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionStorageMemory</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

<a href="../-session-storage/index.html">SessionStorage</a> that stores session contents into memory.

Since it doesn't use any TTL sessions, memory usage will increase while the application is running
and session information will be discarded once the server stops.

This is intended for development.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">SessionStorageMemory</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

<a href="../-session-storage/index.html">SessionStorage</a> that stores session contents into memory.


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
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">invalidate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$invalidate(kotlin.String)/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invalidates session <a href="invalidate.html#io.ktor.sessions.SessionStorageMemory$invalidate(kotlin.String)/id">id</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="read.html">read</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">read</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="identifier">ByteReadChannel</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="read.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="read.html#R"><span class="identifier">R</span></a></code></div>

Reads session <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/id">id</a> using a <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</a> as <a href="read.html#R">R</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="write.html">write</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">write</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="identifier">ByteWriteChannel</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Writes a session <a href="write.html#io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/id">id</a> using a specific <a href="write.html#io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</a>.


</td>
</tr>
</tbody>
</table>
