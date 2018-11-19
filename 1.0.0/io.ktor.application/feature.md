---
title: feature - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.application</a> / <a href="./feature.html">feature</a></div>

# feature

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="feature.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">feature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$feature(io.ktor.application.feature.A, io.ktor.application.ApplicationFeature((io.ktor.application.feature.A, io.ktor.application.feature.B, io.ktor.application.feature.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="feature.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="feature.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="feature.html#F"><span class="identifier">F</span></a></code></div>

Gets feature instance for this pipeline, or fails with <a href="-missing-application-feature-exception/index.html">MissingApplicationFeatureException</a> if the feature is not installed

### Exceptions

<code>MissingApplicationFeatureException</code> -

### Parameters

<code>feature</code> - application feature to lookup

**Return**
an instance of feature

