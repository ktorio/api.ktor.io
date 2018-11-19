---
title: GsonConverter - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.gson</a> / <a href="./index.html">GsonConverter</a></div>

# GsonConverter

<div class="signature"><code><span class="keyword">class </span><span class="identifier">GsonConverter</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.features/-content-converter/index.html"><span class="identifier">ContentConverter</span></a></code></div>

GSON converter for <a href="../../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a> feature

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">GsonConverter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.gson.GsonConverter$<init>(com.google.gson.Gson)/gson">gson</span><span class="symbol">:</span>&nbsp;<span class="identifier">Gson</span>&nbsp;<span class="symbol">=</span>&nbsp;Gson()<span class="symbol">)</span></code></div>

GSON converter for <a href="../../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a> feature


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="convert-for-receive.html">convertForReceive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">convertForReceive</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForReceive(io.ktor.util.pipeline.PipelineContext((io.ktor.request.ApplicationReceiveRequest, io.ktor.application.ApplicationCall)))/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.request/-application-receive-request/index.html"><span class="identifier">ApplicationReceiveRequest</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Convert a value (RAW or intermediate) from receive pipeline (deserialize)


</td>
</tr>
<tr>
<td markdown="1">

<a href="convert-for-send.html">convertForSend</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">convertForSend</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Convert a <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/value">value</a> to the specified <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/contentType">contentType</a> to a value suitable for sending (serialize).
Note that as far as <a href="../../io.ktor.features/-content-converter/index.html">ContentConverter</a> could be registered multiple times with different content types
hence <a href="convert-for-send.html#io.ktor.gson.GsonConverter$convertForSend(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.ContentType, kotlin.Any)/contentType">contentType</a> could be different depends on what the client accepts (inferred from Accept header).
This function could ignore value if it is not suitable for conversion and return <code>null</code> so in this case
other registered converters could be tried or this function could be invoked with other content types
it the converted has been registered multiple times with different content types


</td>
</tr>
</tbody>
</table>
