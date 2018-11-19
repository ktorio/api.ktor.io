---
title: HttpClientEngineFactory.create - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine</a> / <a href="index.html">HttpClientEngineFactory</a> / <a href="./create.html">create</a></div>

# create

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.HttpClientEngineFactory$create(kotlin.Function1((io.ktor.client.engine.HttpClientEngineFactory.T, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a></code></div>

Creates a new <a href="../-http-client-engine/index.html">HttpClientEngine</a> optionally specifying a <a href="create.html#io.ktor.client.engine.HttpClientEngineFactory$create(kotlin.Function1((io.ktor.client.engine.HttpClientEngineFactory.T, kotlin.Unit)))/block">block</a> configuring <a href="index.html#T">T</a>.

