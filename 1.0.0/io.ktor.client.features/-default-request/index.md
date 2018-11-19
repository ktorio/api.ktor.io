---
title: DefaultRequest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="./index.html">DefaultRequest</a></div>

# DefaultRequest

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultRequest</span></code></div>

<a href="-feature/index.html">Feature</a> is used to set request default parameters.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">DefaultRequest</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DefaultRequest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.DefaultRequest$<init>(kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span></code></div>

<a href="-feature/index.html">Feature</a> is used to set request default parameters.


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">DefaultRequest</span></a><span class="symbol">&gt;</span></code></div>

The <a href="../../io.ktor.util/-attribute-key/index.html">AttributeKey</a> for this feature.


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.DefaultRequest.Feature$install(io.ktor.client.features.DefaultRequest, io.ktor.client.HttpClient)/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">DefaultRequest</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.DefaultRequest.Feature$install(io.ktor.client.features.DefaultRequest, io.ktor.client.HttpClient)/scope">scope</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs the <a href="-feature/install.html#io.ktor.client.features.DefaultRequest.Feature$install(io.ktor.client.features.DefaultRequest, io.ktor.client.HttpClient)/feature">feature</a> class for a <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> defined at <a href="-feature/install.html#io.ktor.client.features.DefaultRequest.Feature$install(io.ktor.client.features.DefaultRequest, io.ktor.client.HttpClient)/scope">scope</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="prepare.html">prepare</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">prepare</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.DefaultRequest.Feature$prepare(kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">DefaultRequest</span></a></code></div>

Builds a <a href="#">TFeature</a> by calling the <a href="-feature/prepare.html#io.ktor.client.features.DefaultRequest.Feature$prepare(kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</a> with a <a href="#">TConfig</a> config instance as receiver.


</td>
</tr>
</tbody>
</table>
