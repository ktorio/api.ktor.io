---
title: AReadable.attachForReading - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="index.html">AReadable</a> / <a href="./attach-for-reading.html">attachForReading</a></div>

# attachForReading

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForReading</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AReadable$attachForReading(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">WriterJob</span></code></div>

Attach <a href="attach-for-reading.html#io.ktor.network.sockets.AReadable$attachForReading(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for reading so incoming bytes appears in the attached channel.
Only one channel could be attached

**Return**
a job that does supply data

