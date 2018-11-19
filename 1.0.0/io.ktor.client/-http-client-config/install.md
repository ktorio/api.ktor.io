---
title: HttpClientConfig.install - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client</a> / <a href="index.html">HttpClientConfig</a> / <a href="./install.html">install</a></div>

# install

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.features/-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="install.html#TBuilder"><span class="identifier">TBuilder</span></a><span class="symbol">,</span>&nbsp;<a href="install.html#TFeature"><span class="identifier">TFeature</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="install.html#TBuilder"><span class="identifier">TBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs a specific <a href="install.html#io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/feature">feature</a> and optionally <a href="install.html#io.ktor.client.HttpClientConfig$install(io.ktor.client.features.HttpClientFeature((io.ktor.client.HttpClientConfig.install.TBuilder, io.ktor.client.HttpClientConfig.install.TFeature)), kotlin.Function1((io.ktor.client.HttpClientConfig.install.TBuilder, kotlin.Unit)))/configure">configure</a> it.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs an interceptor defined by <a href="install.html#io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/block">block</a>.
The <a href="install.html#io.ktor.client.HttpClientConfig$install(kotlin.String, kotlin.Function1((io.ktor.client.HttpClient, kotlin.Unit)))/key">key</a> parameter is used as a unique name, that also prevents installing duplicated interceptors.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.HttpClientConfig$install(io.ktor.client.HttpClient)/client">client</span><span class="symbol">:</span>&nbsp;<a href="../-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Applies all the installed <a href="#">features</a> and <a href="#">customInterceptors</a> from this configuration
into the specified <a href="install.html#io.ktor.client.HttpClientConfig$install(io.ktor.client.HttpClient)/client">client</a>.

</div>
