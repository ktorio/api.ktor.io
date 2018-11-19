---
title: JsonFeature - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json</a> / <a href="./index.html">JsonFeature</a></div>

# JsonFeature

<div class="signature"><code><span class="keyword">class </span><span class="identifier">JsonFeature</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that serializes/de-serializes as JSON custom objects
to request and from response bodies using a <a href="serializer.html">serializer</a>.

The default <a href="serializer.html">serializer</a> is <a href="../-gson-serializer/index.html">GsonSerializer</a>.

Note: It will de-serialize the body response if the specified type is a public accessible class
    and the Content-Type is <code>application/json</code>

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-config/index.html">Config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Config</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.client.features/-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">JsonFeature</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="identifier">JsonFeature</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.JsonFeature$<init>(io.ktor.client.features.json.JsonSerializer)/serializer">serializer</span><span class="symbol">:</span>&nbsp;<a href="../-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a><span class="symbol">)</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that serializes/de-serializes as JSON custom objects
to request and from response bodies using a <a href="-init-.html#io.ktor.client.features.json.JsonFeature$<init>(io.ktor.client.features.json.JsonSerializer)/serializer">serializer</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="serializer.html">serializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">serializer</span><span class="symbol">: </span><a href="../-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a></code></div>

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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">JsonFeature</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.JsonFeature.Feature$install(io.ktor.client.features.json.JsonFeature, io.ktor.client.HttpClient)/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">JsonFeature</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.json.JsonFeature.Feature$install(io.ktor.client.features.json.JsonFeature, io.ktor.client.HttpClient)/scope">scope</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs the <a href="-feature/install.html#io.ktor.client.features.json.JsonFeature.Feature$install(io.ktor.client.features.json.JsonFeature, io.ktor.client.HttpClient)/feature">feature</a> class for a <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> defined at <a href="-feature/install.html#io.ktor.client.features.json.JsonFeature.Feature$install(io.ktor.client.features.json.JsonFeature, io.ktor.client.HttpClient)/scope">scope</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="prepare.html">prepare</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">prepare</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.JsonFeature.Feature$prepare(kotlin.Function1((io.ktor.client.features.json.JsonFeature.Config, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">JsonFeature</span></a></code></div>

Builds a <a href="#">TFeature</a> by calling the <a href="-feature/prepare.html#io.ktor.client.features.json.JsonFeature.Feature$prepare(kotlin.Function1((io.ktor.client.features.json.JsonFeature.Config, kotlin.Unit)))/block">block</a> with a <a href="#">TConfig</a> config instance as receiver.


</td>
</tr>
</tbody>
</table>
