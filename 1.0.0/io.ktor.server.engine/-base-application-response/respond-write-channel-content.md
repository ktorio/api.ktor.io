---
title: BaseApplicationResponse.respondWriteChannelContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="index.html">BaseApplicationResponse</a> / <a href="./respond-write-channel-content.html">respondWriteChannelContent</a></div>

# respondWriteChannelContent

<div class="signature"><code><span class="keyword">protected</span> <span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">respondWriteChannelContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse$respondWriteChannelContent(io.ktor.http.content.OutgoingContent.WriteChannelContent)/content">content</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Process response <a href="respond-write-channel-content.html#io.ktor.server.engine.BaseApplicationResponse$respondWriteChannelContent(io.ktor.http.content.OutgoingContent.WriteChannelContent)/content">content</a> using <a href="../../io.ktor.http.content/-outgoing-content/-write-channel-content/write-to.html">OutgoingContent.WriteChannelContent.writeTo</a>.

