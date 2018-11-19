---
title: TestWithKtor - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.tests.utils</a> / <a href="./index.html">TestWithKtor</a></div>

# TestWithKtor

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">TestWithKtor</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TestWithKtor</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

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
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">server</span><span class="symbol">: </span><a href="../../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="server-port.html">serverPort</a>


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

<a href="start-server.html">startServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">startServer</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="stop-server.html">stopServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">stopServer</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-attributes-test/index.html">AttributesTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">AttributesTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-builders-test/index.html">BuildersTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BuildersTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-cache-test/index.html">CacheTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">CacheTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-connection-test/index.html">ConnectionTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ConnectionTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-content-test/index.html">ContentTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ContentTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-cookies-test/index.html">CookiesTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">CookiesTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-features-test/index.html">FeaturesTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">FeaturesTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-full-form-test/index.html">FullFormTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">FullFormTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-http-client-test/index.html">HttpClientTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">HttpClientTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-http-redirect-test/index.html">HttpRedirectTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">HttpRedirectTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.json.tests/-json-test/index.html">JsonTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">JsonTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

Base class for JSON tests.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-multithreaded-test/index.html">MultithreadedTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">MultithreadedTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.tests/-post-test/index.html">PostTest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">PostTest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">TestWithKtor</span></a></code></div>

</td>
</tr>
</tbody>
</table>
