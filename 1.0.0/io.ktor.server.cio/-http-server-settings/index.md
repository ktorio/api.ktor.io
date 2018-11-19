---
title: HttpServerSettings - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.cio</a> / <a href="./index.html">HttpServerSettings</a></div>

# HttpServerSettings

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpServerSettings</span></code></div>

HTTP server connector settings

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpServerSettings</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio.HttpServerSettings$<init>(kotlin.String, kotlin.Int, kotlin.Long)/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"0.0.0.0"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio.HttpServerSettings$<init>(kotlin.String, kotlin.Int, kotlin.Long)/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;8080<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio.HttpServerSettings$<init>(kotlin.String, kotlin.Int, kotlin.Long)/connectionIdleTimeoutSeconds">connectionIdleTimeoutSeconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a>&nbsp;<span class="symbol">=</span>&nbsp;45<span class="symbol">)</span></code></div>

HTTP server connector settings


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="connection-idle-timeout-seconds.html">connectionIdleTimeoutSeconds</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">connectionIdleTimeoutSeconds</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

time to live for IDLE connections


</td>
</tr>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

to listen to


</td>
</tr>
<tr>
<td markdown="1">

<a href="port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

to listen to


</td>
</tr>
</tbody>
</table>
