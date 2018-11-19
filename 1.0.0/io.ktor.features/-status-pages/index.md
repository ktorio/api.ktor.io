---
title: StatusPages - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">StatusPages</a></div>

# StatusPages

<div class="signature"><code><span class="keyword">class </span><span class="identifier">StatusPages</span></code></div>

Status pages feature that handles exceptions and status codes. Useful to configure default error pages.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Status pages feature config


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">StatusPages</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


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
<div class="signature"><code><span class="identifier">StatusPages</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.StatusPages$<init>(io.ktor.features.StatusPages.Configuration)/config">config</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">)</span></code></div>

Status pages feature that handles exceptions and status codes. Useful to configure default error pages.


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">StatusPages</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.StatusPages.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.StatusPages.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.StatusPages.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.StatusPages.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">StatusPages</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
