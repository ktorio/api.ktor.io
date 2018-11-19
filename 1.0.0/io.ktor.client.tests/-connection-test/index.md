---
title: ConnectionTest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.tests</a> / <a href="./index.html">ConnectionTest</a></div>

# ConnectionTest

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ConnectionTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.tests.utils/-test-with-ktor/index.html"><span class="identifier">TestWithKtor</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ConnectionTest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.tests.ConnectionTest$<init>(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.HttpClientEngineConfig)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="factory.html">factory</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">factory</span><span class="symbol">: </span><a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="server.html">server</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">server</span><span class="symbol">: </span><a href="../../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests.utils/-test-with-ktor/server-port.html">serverPort</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">serverPort</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="close-response-with-connection-pipeline-test.html">closeResponseWithConnectionPipelineTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">closeResponseWithConnectionPipelineTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="content-length-with-empty-body-test.html">contentLengthWithEmptyBodyTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">contentLengthWithEmptyBodyTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests.utils/-test-with-ktor/start-server.html">startServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">startServer</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests.utils/-test-with-ktor/stop-server.html">stopServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">stopServer</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
