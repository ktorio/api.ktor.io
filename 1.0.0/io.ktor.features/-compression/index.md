---
title: Compression - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">Compression</a></div>

# Compression

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Compression</span></code></div>

Feature to compress a response based on conditions and ability of client to decompress it

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-conditions-holder-builder/index.html"><span class="identifier">ConditionsHolderBuilder</span></a></code></div>

Configuration builder for Compression feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">Compression</span></a><span class="symbol">&gt;</span></code></div>

<code>ApplicationFeature</code> implementation for <a href="./index.md">Compression</a>


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
<div class="signature"><code><span class="identifier">Compression</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.Compression$<init>(io.ktor.features.Compression.Configuration)/compression">compression</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">)</span></code></div>

Feature to compress a response based on conditions and ability of client to decompress it


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-suppression-attribute.html">SuppressionAttribute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SuppressionAttribute</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Attribute that could be added to an application call to prevent it's response from being compressed


</td>
</tr>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">Compression</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.Compression.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.Compression.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.Compression.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.Compression.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Compression</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
