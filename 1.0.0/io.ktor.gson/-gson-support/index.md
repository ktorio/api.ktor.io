---
title: GsonSupport - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.gson</a> / <a href="./index.html">GsonSupport</a></div>

# GsonSupport

<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">GsonSupport</span></s></code></div>

**Deprecated:** GsonSupport is deprecated in favor of generic ContentNegotiation Feature

<pre markdown="1">    install(ContentNegotiation) {
       register(ContentType.Application.Json, GsonConverter())
    }

    to be able to modify the gsonBuilder (eg. using specific serializers and/or
    configuration options, you could use the following (as seen in the ktor-samples):

    install(ContentNegotiation) {
        gson {
            registerTypeAdapterFactory(GsonAdaptersMyDocument())
            setDateFormat(DateFormat.LONG)
            setPrettyPrinting()
        }
    }</pre>

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<span class="identifier">GsonBuilder</span><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">GsonSupport</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="identifier">GsonSupport</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.gson.GsonSupport$<init>(com.google.gson.Gson)/gson">gson</span><span class="symbol">:</span>&nbsp;<span class="identifier">Gson</span><span class="symbol">)</span></code></div>
<pre markdown="1">    install(ContentNegotiation) {
       register(ContentType.Application.Json, GsonConverter())
    }

    to be able to modify the gsonBuilder (eg. using specific serializers and/or
    configuration options, you could use the following (as seen in the ktor-samples):

    install(ContentNegotiation) {
        gson {
            registerTypeAdapterFactory(GsonAdaptersMyDocument())
            setDateFormat(DateFormat.LONG)
            setPrettyPrinting()
        }
    }</pre>
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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">GsonSupport</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonSupport.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson.GsonSupport.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<span class="identifier">GsonBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">GsonSupport</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
