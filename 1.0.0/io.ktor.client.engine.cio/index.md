---
title: io.ktor.client.engine.cio - 
layout: api
---



## Package io.ktor.client.engine.cio

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-c-i-o/index.html">CIO</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">CIO</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="-c-i-o-engine-config/index.html"><span class="identifier">CIOEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

<a href="../io.ktor.client.engine/-http-client-engine-factory/index.html">HttpClientEngineFactory</a> using a Coroutine based I/O implementation without additional dependencies
with the the associated configuration <a href="../io.ktor.client.engine/-http-client-engine-config/index.html">HttpClientEngineConfig</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-i-o-engine-config/index.html">CIOEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-i-o-engine-container/index.html">CIOEngineContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOEngineContainer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client-engine-container/index.html"><span class="identifier">HttpClientEngineContainer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-endpoint-config/index.html">EndpointConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">EndpointConfig</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-https-config/index.html">HttpsConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpsConfig</span></code></div>

</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-client-closed-exception/index.html">ClientClosedException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ClientClosedException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-connect-exception/index.html">ConnectException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ConnectException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

</td>
</tr>
</tbody>
</table>
