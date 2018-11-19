---
title: HttpClientFeature.prepare - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="index.html">HttpClientFeature</a> / <a href="./prepare.html">prepare</a></div>

# prepare

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">prepare</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.HttpClientFeature$prepare(kotlin.Function1((io.ktor.client.features.HttpClientFeature.TConfig, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="index.html#TConfig"><span class="identifier">TConfig</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#TFeature"><span class="identifier">TFeature</span></a></code></div>

Builds a <a href="index.html#TFeature">TFeature</a> by calling the <a href="prepare.html#io.ktor.client.features.HttpClientFeature$prepare(kotlin.Function1((io.ktor.client.features.HttpClientFeature.TConfig, kotlin.Unit)))/block">block</a> with a <a href="index.html#TConfig">TConfig</a> config instance as receiver.

