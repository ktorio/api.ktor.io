---
title: ContentTest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.tests</a> / <a href="./index.html">ContentTest</a></div>

# ContentTest

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ContentTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.tests.utils/-test-with-ktor/index.html"><span class="identifier">TestWithKtor</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ContentTest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.tests.ContentTest$<init>(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.HttpClientEngineConfig)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
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

<a href="byte-array-content.html">byteArrayContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byteArrayContent</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="byte-array-test.html">byteArrayTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byteArrayTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="byte-read-channel-test.html">byteReadChannelTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byteReadChannelTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="get-form-data-test.html">getFormDataTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">getFormDataTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="input-stream-test.html">inputStreamTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">inputStreamTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="local-file-content-test.html">localFileContentTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">localFileContentTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="multipart-form-data-test.html">multipartFormDataTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">multipartFormDataTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="post-form-data-test.html">postFormDataTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">postFormDataTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="string-test.html">stringTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">stringTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="text-content-test.html">textContentTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">textContentTest</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

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
