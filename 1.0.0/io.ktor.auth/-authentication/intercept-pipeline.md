---
title: Authentication.interceptPipeline - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">Authentication</a> / <a href="./intercept-pipeline.html">interceptPipeline</a></div>

# interceptPipeline

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">interceptPipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/configurationNames">configurationNames</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;listOf(null)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/optional">optional</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures <a href="intercept-pipeline.html#io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/pipeline">pipeline</a> to process authentication by one or multiple auth methods

### Parameters

<code>pipeline</code> - to be configured

<code>configurationNames</code> - references to auth providers, could contain null to point to default