---
title: ConditionalHeaders.Configuration.version - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">ConditionalHeaders</a> / <a href="index.html">Configuration</a> / <a href="./version.html">version</a></div>

# version

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">version</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ConditionalHeaders.Configuration$version(kotlin.SuspendFunction1((io.ktor.http.content.OutgoingContent, kotlin.collections.List((io.ktor.http.content.Version)))))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="../../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a function that can fetch version list for a given <a href="../../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a>

