---
title: HttpClientEngineContainer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client</a> / <a href="./index.html">HttpClientEngineContainer</a></div>

# HttpClientEngineContainer

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientEngineContainer</span></code></div>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="factory.html">factory</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">factory</span><span class="symbol">: </span><a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.android/-android-engine-container/index.html">AndroidEngineContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AndroidEngineContainer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineContainer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.apache/-apache-engine-container/index.html">ApacheEngineContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApacheEngineContainer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineContainer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.cio/-c-i-o-engine-container/index.html">CIOEngineContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOEngineContainer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineContainer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.okhttp/-ok-http-engine-container/index.html">OkHttpEngineContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OkHttpEngineContainer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineContainer</span></a></code></div>

</td>
</tr>
</tbody>
</table>
