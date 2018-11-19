---
title: io.ktor.client.engine - 
layout: api
---



## Package io.ktor.client.engine

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http-client-engine/index.html">HttpClientEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span><span class="symbol">, </span><span class="identifier">Closeable</span></code></div>

Base interface use to define engines for <a href="#">HttpClient</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-engine-config/index.html">HttpClientEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HttpClientEngineConfig</span></code></div>

Base configuration for <a href="-http-client-engine/index.html">HttpClientEngine</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-engine-factory/index.html">HttpClientEngineFactory</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientEngineFactory</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

Factory of <a href="-http-client-engine/index.html">HttpClientEngine</a> with a specific <a href="-http-client-engine-factory/index.html#T">T</a> of <a href="-http-client-engine-config/index.html">HttpClientEngineConfig</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-jvm-engine/index.html">HttpClientJvmEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">HttpClientJvmEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <a href="-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">config</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine$config(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.config.T)), kotlin.Function1((io.ktor.client.engine.config.T, kotlin.Unit)))/nested">nested</span><span class="symbol">:</span>&nbsp;<a href="config.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates a new <a href="-http-client-engine-factory/index.html">HttpClientEngineFactory</a> based on this one
with further configurations from the <a href="config.html#io.ktor.client.engine$config(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.config.T)), kotlin.Function1((io.ktor.client.engine.config.T, kotlin.Unit)))/nested">nested</a> block.


</td>
</tr>
<tr>
<td markdown="1">

<a href="merge-headers.html">mergeHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">mergeHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine$mergeHeaders(io.ktor.http.Headers, io.ktor.http.content.OutgoingContent, kotlin.Function2((kotlin.String, , kotlin.Unit)))/requestHeaders">requestHeaders</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine$mergeHeaders(io.ktor.http.Headers, io.ktor.http.content.OutgoingContent, kotlin.Function2((kotlin.String, , kotlin.Unit)))/content">content</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine$mergeHeaders(io.ktor.http.Headers, io.ktor.http.content.OutgoingContent, kotlin.Function2((kotlin.String, , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<span class="parameterName">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Merge headers from <a href="merge-headers.html#io.ktor.client.engine$mergeHeaders(io.ktor.http.Headers, io.ktor.http.content.OutgoingContent, kotlin.Function2((kotlin.String, , kotlin.Unit)))/content">content</a> and <a href="merge-headers.html#io.ktor.client.engine$mergeHeaders(io.ktor.http.Headers, io.ktor.http.content.OutgoingContent, kotlin.Function2((kotlin.String, , kotlin.Unit)))/requestHeaders">requestHeaders</a> according to <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> properties


</td>
</tr>
</tbody>
</table>
