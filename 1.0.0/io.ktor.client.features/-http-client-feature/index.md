---
title: HttpClientFeature - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="./index.html">HttpClientFeature</a></div>

# HttpClientFeature

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientFeature</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">TConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Base interface representing a <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature.

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="index.html#TFeature"><span class="identifier">TFeature</span></a><span class="symbol">&gt;</span></code></div>

The <a href="../../io.ktor.util/-attribute-key/index.html">AttributeKey</a> for this feature.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.HttpClientFeature$install(io.ktor.client.features.HttpClientFeature.TFeature, io.ktor.client.HttpClient)/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="index.html#TFeature"><span class="identifier">TFeature</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.HttpClientFeature$install(io.ktor.client.features.HttpClientFeature.TFeature, io.ktor.client.HttpClient)/scope">scope</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs the <a href="install.html#io.ktor.client.features.HttpClientFeature$install(io.ktor.client.features.HttpClientFeature.TFeature, io.ktor.client.HttpClient)/feature">feature</a> class for a <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> defined at <a href="install.html#io.ktor.client.features.HttpClientFeature$install(io.ktor.client.features.HttpClientFeature.TFeature, io.ktor.client.HttpClient)/scope">scope</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="prepare.html">prepare</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">prepare</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.HttpClientFeature$prepare(kotlin.Function1((io.ktor.client.features.HttpClientFeature.TConfig, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="index.html#TConfig"><span class="identifier">TConfig</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#TFeature"><span class="identifier">TFeature</span></a></code></div>

Builds a <a href="index.html#TFeature">TFeature</a> by calling the <a href="prepare.html#io.ktor.client.features.HttpClientFeature$prepare(kotlin.Function1((io.ktor.client.features.HttpClientFeature.TConfig, kotlin.Unit)))/block">block</a> with a <a href="index.html#TConfig">TConfig</a> config instance as receiver.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-expect-success/-companion/index.html">Companion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../-expect-success/index.html"><span class="identifier">ExpectSuccess</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.cookies/-http-cookies/-companion/index.html">Companion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.features.cookies/-http-cookies/-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.features.cookies/-http-cookies/index.html"><span class="identifier">HttpCookies</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../-default-request/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">,</span>&nbsp;<a href="../-default-request/index.html"><span class="identifier">DefaultRequest</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-plain-text/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../-http-plain-text/-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="../-http-plain-text/index.html"><span class="identifier">HttpPlainText</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-redirect/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../-http-redirect/index.html"><span class="identifier">HttpRedirect</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-send/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../-http-send/index.html"><span class="identifier">HttpSend</span></a><span class="symbol">,</span>&nbsp;<a href="../-http-send/index.html"><span class="identifier">HttpSend</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.observer/-response-observer/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.features.observer/-response-observer/-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.features.observer/-response-observer/index.html"><span class="identifier">ResponseObserver</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.auth.basic/-basic-auth/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.features.auth.basic/-basic-auth/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.features.auth.basic/-basic-auth/index.html"><span class="identifier">BasicAuth</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.json/-json-feature/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.features.json/-json-feature/-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.features.json/-json-feature/index.html"><span class="identifier">JsonFeature</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.websocket/-web-sockets/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.features.websocket/-web-sockets/index.html"><span class="identifier">WebSockets</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>
