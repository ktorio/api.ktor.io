---
title: ContentNegotiation.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">ContentNegotiation</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Configuration type for <a href="../index.html">ContentNegotiation</a> feature

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration type for <a href="../index.html">ContentNegotiation</a> feature


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="register.html">register</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../-content-converter/index.html"><span class="identifier">ContentConverter</span></a><span class="symbol">&gt;</span> <span class="identifier">register</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.Configuration$register(io.ktor.http.ContentType, io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.Configuration$register(io.ktor.http.ContentType, io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Unit)))/converter">converter</span><span class="symbol">:</span>&nbsp;<a href="register.html#T"><span class="identifier">T</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.Configuration$register(io.ktor.http.ContentType, io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Unit)))/configuration">configuration</span><span class="symbol">:</span>&nbsp;<a href="register.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a <a href="register.html#io.ktor.features.ContentNegotiation.Configuration$register(io.ktor.http.ContentType, io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Unit)))/contentType">contentType</a> to a specified <a href="register.html#io.ktor.features.ContentNegotiation.Configuration$register(io.ktor.http.ContentType, io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Unit)))/converter">converter</a> with an optional <a href="register.html#io.ktor.features.ContentNegotiation.Configuration$register(io.ktor.http.ContentType, io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Function1((io.ktor.features.ContentNegotiation.Configuration.register.T, kotlin.Unit)))/configuration">configuration</a> script for converter


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../../io.ktor.gson/gson.html">gson</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">gson</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson$gson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Application.Json<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.gson$gson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.google.gson.GsonBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">GsonBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register GSON to <a href="../index.html">ContentNegotiation</a> feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.jackson/jackson.html">jackson</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">jackson</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson$jackson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.fasterxml.jackson.databind.ObjectMapper, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Application.Json<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson$jackson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.fasterxml.jackson.databind.ObjectMapper, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectMapper</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register Jackson converter into <a href="../index.html">ContentNegotiation</a> feature


</td>
</tr>
</tbody>
</table>
