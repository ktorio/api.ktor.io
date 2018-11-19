---
title: jackson - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.jackson</a> / <a href="./jackson.html">jackson</a></div>

# jackson

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.features/-content-negotiation/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">jackson</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson$jackson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.fasterxml.jackson.databind.ObjectMapper, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Application.Json<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson$jackson(io.ktor.features.ContentNegotiation.Configuration, io.ktor.http.ContentType, kotlin.Function1((com.fasterxml.jackson.databind.ObjectMapper, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectMapper</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register Jackson converter into <a href="../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a> feature

