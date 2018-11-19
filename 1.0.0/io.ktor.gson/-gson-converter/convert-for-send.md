---
title: GsonConverter.convertForSend - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.gson</a> / <a href="index.html">GsonConverter</a> / <a href="./convert-for-send.html">convertForSend</a></div>

# convertForSend

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">convertForSend</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Overrides <a href="../../io.ktor.features/-content-converter/convert-for-send.html">ContentConverter.convertForSend</a>

Convert a <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/value">value</a> to the specified <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/contentType">contentType</a> to a value suitable for sending (serialize).
Note that as far as <a href="../../io.ktor.features/-content-converter/index.html">ContentConverter</a> could be registered multiple times with different content types
hence <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/contentType">contentType</a> could be different depends on what the client accepts (inferred from Accept header).
This function could ignore value if it is not suitable for conversion and return <code>null</code> so in this case
other registered converters could be tried or this function could be invoked with other content types
it the converted has been registered multiple times with different content types

### Parameters

<code>context</code> - pipeline context

<code>contentType</code> - to which this data converted has been registered and that matches client's accept header

<code>value</code> - to be converted

**Return**
a converted value, or null if this <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/value">value</a> is not suitable for this converter

