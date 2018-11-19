---
title: GsonSerializer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json</a> / <a href="./index.html">GsonSerializer</a></div>

# GsonSerializer

<div class="signature"><code><span class="keyword">class </span><span class="identifier">GsonSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">GsonSerializer</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.GsonSerializer$<init>(kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">GsonBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="read.html">read</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">read</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.GsonSerializer$read(io.ktor.client.call.TypeInfo, io.ktor.client.response.HttpResponse)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-type-info/index.html"><span class="identifier">TypeInfo</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.json.GsonSerializer$read(io.ktor.client.call.TypeInfo, io.ktor.client.response.HttpResponse)/response">response</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="write.html">write</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">write</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.GsonSerializer$write(kotlin.Any)/data">data</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a></code></div>

</td>
</tr>
</tbody>
</table>
