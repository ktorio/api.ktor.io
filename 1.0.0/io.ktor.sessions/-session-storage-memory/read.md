---
title: SessionStorageMemory.read - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionStorageMemory</a> / <a href="./read.html">read</a></div>

# read

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">read</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="identifier">ByteReadChannel</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="read.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="read.html#R"><span class="identifier">R</span></a></code></div>

Overrides <a href="../-session-storage/read.html">SessionStorage.read</a>

Reads session <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/id">id</a> using a <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</a> as <a href="read.html#R">R</a>

This method calls the <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</a> with a <a href="#">ByteReadChannel</a> and it is in charge of the channel's lifecycle,
and returns the object <a href="read.html#R">R</a> produced by the <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</a>.
<a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</a> should read the content of the specified <a href="#">ByteReadChannel</a> and return an object of type <a href="read.html#R">R</a>.

### Exceptions

<code>NoSuchElementException</code> - when session <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/id">id</a> is not found.

**Return**
instance of <a href="read.html#R">R</a> representing the session object returned from the <a href="read.html#io.ktor.sessions.SessionStorageMemory$read(kotlin.String, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteReadChannel, io.ktor.sessions.SessionStorageMemory.read.R)))/consumer">consumer</a>.

