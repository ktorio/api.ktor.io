---
title: io.ktor.client.tests.utils - 
layout: api
---



## Package io.ktor.client.tests.utils

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-test-client-builder/index.html">TestClientBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestClientBuilder</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-test-with-ktor/index.html">TestWithKtor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">TestWithKtor</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="client-test.html">clientTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <span class="identifier">clientTest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$clientTest(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.tests.utils.clientTest.T)), kotlin.SuspendFunction1((io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.tests.utils.clientTest.T)), kotlin.Unit)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="client-test.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$clientTest(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.tests.utils.clientTest.T)), kotlin.SuspendFunction1((io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.tests.utils.clientTest.T)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-test-client-builder/index.html"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><a href="client-test.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">clientTest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$clientTest(io.ktor.client.engine.HttpClientEngine, kotlin.SuspendFunction1((io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/engine">engine</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$clientTest(io.ktor.client.engine.HttpClientEngine, kotlin.SuspendFunction1((io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-test-client-builder/index.html"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">clientTest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$clientTest(io.ktor.client.HttpClient, kotlin.SuspendFunction1((io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$clientTest(io.ktor.client.HttpClient, kotlin.SuspendFunction1((io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-test-client-builder/index.html"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <a href="-test-client-builder/index.html"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><a href="config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">config</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$config(io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.tests.utils.config.T)), kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.tests.utils.config.T)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><a href="config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="test.html">test</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-test-client-builder/index.html"><span class="identifier">TestClientBuilder</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">test</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.tests.utils$test(io.ktor.client.tests.utils.TestClientBuilder((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.SuspendFunction1((io.ktor.client.HttpClient, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="parameterName">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
