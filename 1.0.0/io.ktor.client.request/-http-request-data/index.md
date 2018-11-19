---
title: HttpRequestData - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request</a> / <a href="./index.html">HttpRequestData</a></div>

# HttpRequestData

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpRequestData</span></code></div>

Actual data of the <a href="../-http-request/index.html">HttpRequest</a>, including <a href="url.html">url</a>, <a href="method.html">method</a>, <a href="headers.html">headers</a>, <a href="body.html">body</a> and <a href="execution-context.html">executionContext</a>.
Built by <a href="../-http-request-builder/index.html">HttpRequestBuilder</a>.

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="attributes.html">attributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">attributes</span><span class="symbol">: </span><a href="../../io.ktor.util/-attributes/index.html"><span class="identifier">Attributes</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="body.html">body</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">body</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="execution-context.html">executionContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">executionContext</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">method</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">url</span><span class="symbol">: </span><a href="../../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.mock/to-request.html">toRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestData</span></a><span class="symbol">.</span><span class="identifier">toRequest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$toRequest(io.ktor.client.request.HttpRequestData, io.ktor.client.call.HttpClientCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.client.engine.mock/-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a></code></div>

Convert <a href="./index.md">HttpRequestData</a> to <a href="../../io.ktor.client.engine.mock/-mock-http-request/index.html">MockHttpRequest</a>


</td>
</tr>
</tbody>
</table>
