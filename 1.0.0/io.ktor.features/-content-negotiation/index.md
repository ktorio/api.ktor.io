---
title: ContentNegotiation - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">ContentNegotiation</a></div>

# ContentNegotiation

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentNegotiation</span></code></div>

This feature provides automatic content conversion according to Content-Type and Accept headers

See normative documents:

* https://tools.ietf.org/html/rfc7231#section-5.3
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation

### Parameters

<code>registrations</code> - is a list of registered converters for ContentTypes

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Configuration type for <a href="./index.md">ContentNegotiation</a> feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="-converter-registration/index.html">ConverterRegistration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ConverterRegistration</span></code></div>

Specifies which <a href="-converter-registration/converter.html">converter</a> to use for a particular <a href="-converter-registration/content-type.html">contentType</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">ContentNegotiation</span></a><span class="symbol">&gt;</span></code></div>

Implementation of an <a href="../../io.ktor.application/-application-feature/index.html">ApplicationFeature</a> for the <a href="./index.md">ContentNegotiation</a>


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
<div class="signature"><code><span class="identifier">ContentNegotiation</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation$<init>(kotlin.collections.List((io.ktor.features.ContentNegotiation.ConverterRegistration)))/registrations">registrations</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-converter-registration/index.html"><span class="identifier">ConverterRegistration</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

This feature provides automatic content conversion according to Content-Type and Accept headers


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="registrations.html">registrations</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">registrations</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-converter-registration/index.html"><span class="identifier">ConverterRegistration</span></a><span class="symbol">&gt;</span></code></div>

is a list of registered converters for ContentTypes


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">ContentNegotiation</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentNegotiation</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
