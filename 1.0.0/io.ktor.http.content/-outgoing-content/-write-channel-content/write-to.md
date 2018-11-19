---
title: OutgoingContent.WriteChannelContent.writeTo - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">OutgoingContent</a> / <a href="index.html">WriteChannelContent</a> / <a href="./write-to.html">writeTo</a></div>

# writeTo

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">writeTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.OutgoingContent.WriteChannelContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Receives <a href="write-to.html#io.ktor.http.content.OutgoingContent.WriteChannelContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</a> provided by the engine and writes all data to it

