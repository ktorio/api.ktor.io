---
title: HttpClientEngine.execute - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine</a> / <a href="index.html">HttpClientEngine</a> / <a href="./execute.html">execute</a></div>

# execute

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.HttpClientEngine$execute(io.ktor.client.call.HttpClientCall, io.ktor.client.request.HttpRequestData)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.HttpClientEngine$execute(io.ktor.client.call.HttpClientCall, io.ktor.client.request.HttpRequestData)/data">data</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-data/index.html"><span class="identifier">HttpRequestData</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.client.call/-http-engine-call/index.html"><span class="identifier">HttpEngineCall</span></a></code></div>

Creates a new <a href="../../io.ktor.client.call/-http-client-call/index.html">HttpClientCall</a> specific for this engine, using a request <a href="execute.html#io.ktor.client.engine.HttpClientEngine$execute(io.ktor.client.call.HttpClientCall, io.ktor.client.request.HttpRequestData)/data">data</a>.

