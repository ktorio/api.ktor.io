---
title: io.ktor.jackson - 
layout: api
---



## Package io.ktor.jackson

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-jackson-converter/index.html">JacksonConverter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JacksonConverter</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.features/-content-converter/index.html"><span class="identifier">ContentConverter</span></a></code></div>
<pre markdown="1">    install(ContentNegotiation) {
       register(ContentType.Application.Json, JacksonConverter())
    }

    to be able to modify the objectMapper (eg. using specific modules and/or serializers and/or
    configuration options, you could use the following (as seen in the ktor-samples):

    install(ContentNegotiation) {
        jackson {
            configure(SerializationFeature.INDENT_OUTPUT, true)
            registerModule(JavaTimeModule())</pre>
</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="jackson.html">jackson</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.features/-content-negotiation/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">jackson</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson$jackson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.fasterxml.jackson.databind.ObjectMapper, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Application.Json<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson$jackson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.fasterxml.jackson.databind.ObjectMapper, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectMapper</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register Jackson converter into <a href="../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a> feature


</td>
</tr>
</tbody>
</table>
