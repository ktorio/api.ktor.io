---
title: TestClientBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.tests.utils</a> / <a href="./index.html">TestClientBuilder</a></div>

# TestClientBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestClientBuilder</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TestClientBuilder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils.TestClientBuilder$<init>(kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.tests.utils.TestClientBuilder.T)), kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.client.HttpClient, kotlin.Unit)))/config">config</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils.TestClientBuilder$<init>(kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.tests.utils.TestClientBuilder.T)), kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.client.HttpClient, kotlin.Unit)))/test">test</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="parameterName">client</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">config</span><span class="symbol">: </span><a href="../../io.ktor.client/-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="test.html">test</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">test</span><span class="symbol">: </span><span class="keyword">suspend </span><span class="symbol">(</span><span class="parameterName">client</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><a href="../config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">config</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$config(io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.tests.utils.config.T)), kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.tests.utils.config.T)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><a href="../config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../test.html">test</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">test</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$test(io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.SuspendFunction1((io.ktor.client.HttpClient, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="parameterName">client</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
