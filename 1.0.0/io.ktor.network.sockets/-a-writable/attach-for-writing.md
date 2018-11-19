---
title: AWritable.attachForWriting - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="index.html">AWritable</a> / <a href="./attach-for-writing.html">attachForWriting</a></div>

# attachForWriting

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForWriting</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReaderJob</span></code></div>

Attach <a href="attach-for-writing.html#io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for writing so bytes written to the attached channel will be transmitted
Only one channel could be attached

**Return**
a job that does transmit data from the channel

