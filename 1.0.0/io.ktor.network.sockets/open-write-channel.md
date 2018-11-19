---
title: openWriteChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.network.sockets</a> / <a href="./open-write-channel.html">openWriteChannel</a></div>

# openWriteChannel

<div class="signature"><code><span class="keyword">fun </span><a href="-a-writable/index.html"><span class="identifier">AWritable</span></a><span class="symbol">.</span><span class="identifier">openWriteChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets$openWriteChannel(io.ktor.network.sockets.AWritable, kotlin.Boolean)/autoFlush">autoFlush</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

Open a write channel, could be opened only once

### Parameters

<code>autoFlush</code> - whether returned channel do flush for every write operation