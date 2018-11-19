---
title: HttpClient.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client</a> / <a href="index.html">HttpClient</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">HttpClient</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.HttpClient$<init>(io.ktor.client.engine.HttpClientEngine, io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)))/engine">engine</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.HttpClient$<init>(io.ktor.client.engine.HttpClientEngine, io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)))/userConfig">userConfig</span><span class="symbol">:</span>&nbsp;<a href="../-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;HttpClientConfig()<span class="symbol">)</span></code></div>

Asynchronous client to perform HTTP requests.

This is a generic implementation that uses a specific engine <a href="../../io.ktor.client.engine/-http-client-engine/index.html">HttpClientEngine</a>.

