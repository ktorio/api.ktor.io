---
title: HttpClientConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client</a> / <a href="./index.html">HttpClientConfig</a></div>

# HttpClientConfig

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpClientConfig</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

Mutable configuration used by <a href="../-http-client/index.html">HttpClient</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpClientConfig</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Mutable configuration used by <a href="../-http-client/index.html">HttpClient</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="expect-success.html">expectSuccess</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">expectSuccess</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Terminate <a href="../-http-client/response-pipeline.html">HttpClient.responsePipeline</a> if status code is not success(&gt;=300).


</td>
</tr>
<tr>
<td markdown="1">

<a href="follow-redirects.html">followRedirects</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">followRedirects</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Use <a href="../../io.ktor.client.features/-http-redirect/index.html">HttpRedirect</a> feature to automatically follow redirects.


</td>
</tr>
<tr>
<td markdown="1">

<a href="use-default-transformers.html">useDefaultTransformers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">useDefaultTransformers</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Use <a href="../../io.ktor.client.features/default-transformers.html">defaultTransformers</a> to automatically handle simple <a href="#">ContentType</a>.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="clone.html">clone</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">clone</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Clones this <a href="./index.md">HttpClientConfig</a> duplicating all the <a href="#">features</a> and <a href="#">customInterceptors</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="engine.html">engine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">engine</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClientConfig$engine(kotlin.Function1((io.ktor.client.HttpClientConfig.T, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.features/-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="install.html#TBuilder"><span class="identifier">TBuilder</span></a><span class="symbol">,</span>&nbsp;<a href="install.html#TFeature"><span class="identifier">TFeature</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="install.html#TBuilder"><span class="identifier">TBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs a specific <a href="install.html#io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/feature">feature</a> and optionally <a href="install.html#io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/configure">configure</a> it.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs an interceptor defined by <a href="install.html#io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/block">block</a>.
The <a href="install.html#io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/key">key</a> parameter is used as a unique name, that also prevents installing duplicated interceptors.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClientConfig$install(io.ktor.client.HttpClient)/client">client</span><span class="symbol">:</span>&nbsp;<a href="../-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Applies all the installed <a href="#">features</a> and <a href="#">customInterceptors</a> from this configuration
into the specified <a href="install.html#io.ktor.client.HttpClientConfig$install(io.ktor.client.HttpClient)/client">client</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="plus-assign.html">plusAssign</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">plusAssign</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClientConfig$plusAssign(io.ktor.client.HttpClientConfig((io.ktor.client.HttpClientConfig.T)))/other">other</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Install features from <a href="plus-assign.html#io.ktor.client.HttpClientConfig$plusAssign(io.ktor.client.HttpClientConfig((io.ktor.client.HttpClientConfig.T)))/other">other</a> client config.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.observer/-response-observer.html">ResponseObserver</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">ResponseObserver</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.observer$ResponseObserver(io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.SuspendFunction1((io.ktor.client.response.HttpResponse, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">ResponseHandler</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Install <a href="../../io.ktor.client.features.observer/-response-observer/index.html">ResponseObserver</a> feature in client.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features/default-request.html">defaultRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">defaultRequest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features$defaultRequest(io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set request default parameters.


</td>
</tr>
</tbody>
</table>
