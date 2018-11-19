---
title: call - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.call</a> / <a href="./call.html">call</a></div>

# call

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/url">url</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URL.html"><span class="identifier">URL</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.String, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.String, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Constructs a <a href="-http-client-call/index.html">HttpClientCall</a> from this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>,
an <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/url">url</a> and an optional <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</a> configuring a <a href="../io.ktor.client.request/-http-request-builder/index.html">HttpRequestBuilder</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Constructs a <a href="-http-client-call/index.html">HttpClientCall</a> from this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> and with the specified <a href="../io.ktor.client.request/-http-request-builder/index.html">HttpRequestBuilder</a>
configured inside the <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, io.ktor.client.request.HttpRequestBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Constructs a <a href="-http-client-call/index.html">HttpClientCall</a> from this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> and
with the specified HTTP request <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, io.ktor.client.request.HttpRequestBuilder)/builder">builder</a>.

</div>
