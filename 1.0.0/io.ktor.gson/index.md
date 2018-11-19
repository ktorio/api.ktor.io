---
title: io.ktor.gson - 
layout: api
---



## Package io.ktor.gson

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-gson-converter/index.html">GsonConverter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">GsonConverter</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.features/-content-converter/index.html"><span class="identifier">ContentConverter</span></a></code></div>

GSON converter for <a href="../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a> feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="-gson-support/index.html">GsonSupport</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">GsonSupport</span></s></code></div>
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

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="gson.html">gson</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.features/-content-negotiation/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">gson</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson$gson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Application.Json<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson$gson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">GsonBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register GSON to <a href="../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a> feature


</td>
</tr>
</tbody>
</table>
