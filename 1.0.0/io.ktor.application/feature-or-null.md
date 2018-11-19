---
title: featureOrNull - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.application</a> / <a href="./feature-or-null.html">featureOrNull</a></div>

# featureOrNull

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="feature-or-null.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">featureOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$featureOrNull(io.ktor.application.featureOrNull.A, io.ktor.application.ApplicationFeature((io.ktor.application.featureOrNull.A, io.ktor.application.featureOrNull.B, io.ktor.application.featureOrNull.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="feature-or-null.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="feature-or-null.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="feature-or-null.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="feature-or-null.html#F"><span class="identifier">F</span></a><span class="symbol">?</span></code></div>

Returns feature instance for this pipeline, or null if feature is not installed

