---
title: HttpClient.config - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client</a> / <a href="index.html">HttpClient</a> / <a href="./config.html">config</a></div>

# config

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">config</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClient$config(kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="index.html"><span class="identifier">HttpClient</span></a></code></div>

Returns a new <a href="index.html">HttpClient</a> copying this client configuration,
and additionally configured by the <a href="config.html#io.ktor.client.HttpClient$config(kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</a> parameter.

