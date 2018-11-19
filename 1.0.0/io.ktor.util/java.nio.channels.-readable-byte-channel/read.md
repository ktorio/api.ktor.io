---
title: read - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">java.nio.channels.ReadableByteChannel</a> / <a href="./read.html">read</a></div>

# read

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/ReadableByteChannel.html"><span class="identifier">ReadableByteChannel</span></a><span class="symbol">.</span><span class="identifier">read</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$read(java.nio.channels.ReadableByteChannel, kotlinx.io.core.IoBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<span class="identifier">IoBuffer</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Read from a NIO channel into the specified <a href="read.html#io.ktor.util$read(java.nio.channels.ReadableByteChannel, kotlinx.io.core.IoBuffer)/buffer">buffer</a>
Could return <code>0</code> if the channel is non-blocking or <a href="read.html#io.ktor.util$read(java.nio.channels.ReadableByteChannel, kotlinx.io.core.IoBuffer)/buffer">buffer</a> has no free space

**Return**
number of bytes read (possibly 0) or -1 if EOF

