---
title: request - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.request</a> / <a href="./request.html">request</a></div>

# request

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">request</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$request(io.ktor.client.HttpClient, io.ktor.client.request.HttpRequestBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpRequestBuilder()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="request.html#T"><span class="identifier">T</span></a></code></div>

Executes a <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> request, with the information from the <a href="request.html#io.ktor.client.request$request(io.ktor.client.HttpClient, io.ktor.client.request.HttpRequestBuilder)/builder">builder</a>
and tries to receive a specific type <a href="request.html#T">T</a>, if fails, an exception is thrown.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">request</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$request(io.ktor.client.HttpClient, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="request.html#T"><span class="identifier">T</span></a></code></div>

Executes a <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> request, with the information configured in <a href="#">builder</a> block
and tries to receive a specific type <a href="request.html#T">T</a>, if fails, an exception is thrown.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">request</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$request(kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Creates a <a href="-http-request-builder/index.html">HttpRequestBuilder</a> and configures it with a <a href="request.html#io.ktor.client.request$request(kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</a> of code.

</div>
