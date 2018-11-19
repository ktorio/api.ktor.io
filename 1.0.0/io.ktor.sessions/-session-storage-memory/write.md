---
title: SessionStorageMemory.write - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionStorageMemory</a> / <a href="./write.html">write</a></div>

# write

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">write</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="identifier">ByteWriteChannel</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../-session-storage/write.html">SessionStorage.write</a>

Writes a session <a href="write.html#io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/id">id</a> using a specific <a href="write.html#io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</a>.

This method calls the <a href="write.html#io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</a> with a <a href="#">ByteWriteChannel</a> and it is in charge of the channel's lifecycle.
<a href="write.html#io.ktor.sessions.SessionStorageMemory$write(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/provider">provider</a> is in charge of writing session bits to the specified <a href="#">ByteWriteChannel</a>.

