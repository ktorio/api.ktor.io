---
title: CachingHeaders.Configuration.options - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CachingHeaders</a> / <a href="index.html">Configuration</a> / <a href="./options.html">options</a></div>

# options

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CachingHeaders.Configuration$options(kotlin.Function1((io.ktor.http.content.OutgoingContent, io.ktor.http.content.CachingOptions)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../../io.ktor.http.content/-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a function that can provide caching options for a given <a href="../../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a>

