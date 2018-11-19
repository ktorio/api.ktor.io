---
title: feature - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.features</a> / <a href="./feature.html">feature</a></div>

# feature

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">feature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features$feature(io.ktor.client.HttpClient, io.ktor.client.features.HttpClientFeature((io.ktor.client.features.feature.B, io.ktor.client.features.feature.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="feature.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="feature.html#F"><span class="identifier">F</span></a><span class="symbol">?</span></code></div>

Try to get a <a href="feature.html#io.ktor.client.features$feature(io.ktor.client.HttpClient, io.ktor.client.features.HttpClientFeature((io.ktor.client.features.feature.B, io.ktor.client.features.feature.F)))/feature">feature</a> installed in this client. Returns <code>null</code> if the feature was not previously installed.

