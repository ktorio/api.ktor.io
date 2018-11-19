---
title: JacksonConverter.convertForReceive - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.jackson</a> / <a href="index.html">JacksonConverter</a> / <a href="./convert-for-receive.html">convertForReceive</a></div>

# convertForReceive

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">convertForReceive</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson.JacksonConverter$convertForReceive(io.ktor.util.pipeline.PipelineContext((io.ktor.request.ApplicationReceiveRequest, io.ktor.application.ApplicationCall)))/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.request/-application-receive-request/index.html"><span class="identifier">ApplicationReceiveRequest</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Overrides <a href="../../io.ktor.features/-content-converter/convert-for-receive.html">ContentConverter.convertForReceive</a>

Convert a value (RAW or intermediate) from receive pipeline (deserialize)

**Return**
a converted value (deserialized) or <code>null</code> if the context's subject is not suitable for this converter

