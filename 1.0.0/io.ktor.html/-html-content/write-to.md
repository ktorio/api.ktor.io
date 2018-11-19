---
title: HtmlContent.writeTo - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.html</a> / <a href="index.html">HtmlContent</a> / <a href="./write-to.html">writeTo</a></div>

# writeTo

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">writeTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.html.HtmlContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../../io.ktor.http.content/-outgoing-content/-write-channel-content/write-to.html">WriteChannelContent.writeTo</a>

Receives <a href="write-to.html#io.ktor.html.HtmlContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</a> provided by the engine and writes all data to it

