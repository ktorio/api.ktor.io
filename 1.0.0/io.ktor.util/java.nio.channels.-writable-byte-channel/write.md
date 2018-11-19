---
title: write - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">java.nio.channels.WritableByteChannel</a> / <a href="./write.html">write</a></div>

# write

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/WritableByteChannel.html"><span class="identifier">WritableByteChannel</span></a><span class="symbol">.</span><span class="identifier">write</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$write(java.nio.channels.WritableByteChannel, kotlinx.io.core.IoBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<span class="identifier">IoBuffer</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Write bytes to a NIO channel from the specified <a href="write.html#io.ktor.util$write(java.nio.channels.WritableByteChannel, kotlinx.io.core.IoBuffer)/buffer">buffer</a>
Could return <code>0</code> if the channel is non-blocking or <a href="write.html#io.ktor.util$write(java.nio.channels.WritableByteChannel, kotlinx.io.core.IoBuffer)/buffer">buffer</a> has no free space

**Return**
number of bytes written (possibly 0)

