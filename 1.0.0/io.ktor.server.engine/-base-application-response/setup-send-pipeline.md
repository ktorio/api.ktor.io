---
title: BaseApplicationResponse.setupSendPipeline - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="index.html">BaseApplicationResponse</a> / <a href="./setup-send-pipeline.html">setupSendPipeline</a></div>

# setupSendPipeline

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">setupSendPipeline</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse.Companion$setupSendPipeline(io.ktor.application.Application)/application">application</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Install an application-wide send pipeline interceptor into <a href="../../io.ktor.response/-application-send-pipeline/-engine.html">ApplicationSendPipeline.Engine</a> phase
to start response object processing via <a href="respond-outgoing-content.html">respondOutgoingContent</a>

