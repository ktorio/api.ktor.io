---
title: JettyApplicationEngineBase.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.jetty</a> / <a href="../index.html">JettyApplicationEngineBase</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.server.engine/-base-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a></code></div>

Jetty-specific engine configuration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Jetty-specific engine configuration


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="configure-server.html">configureServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">configureServer</span><span class="symbol">: </span><span class="identifier">Server</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Property function that will be called during Jetty server initialization
with the server instance as receiver.


</td>
</tr>
</tbody>
</table>
