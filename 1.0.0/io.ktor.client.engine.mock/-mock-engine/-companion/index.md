---
title: MockEngine.Companion - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.client.engine.mock</a> / <a href="../index.html">MockEngine</a> / <a href="./index.html">Companion</a></div>

# Companion

<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../-mock-engine-config/index.html"><span class="identifier">MockEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create.html">create</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock.MockEngine.Companion$create(kotlin.Function1((io.ktor.client.engine.mock.MockEngineConfig, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-mock-engine-config/index.html"><span class="identifier">MockEngineConfig</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../../io.ktor.client.engine/-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a></code></div>

Creates a new <a href="../../../io.ktor.client.engine/-http-client-engine/index.html">HttpClientEngine</a> optionally specifying a <a href="create.html#io.ktor.client.engine.mock.MockEngine.Companion$create(kotlin.Function1((io.ktor.client.engine.mock.MockEngineConfig, kotlin.Unit)))/block">block</a> configuring <a href="#">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock.MockEngine.Companion$invoke(kotlin.SuspendFunction1((io.ktor.client.engine.mock.MockHttpRequest, io.ktor.client.engine.mock.MockHttpResponse)))/check">check</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-mock-http-response/index.html"><span class="identifier">MockHttpResponse</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../index.html"><span class="identifier">MockEngine</span></a></code></div>

</td>
</tr>
</tbody>
</table>
