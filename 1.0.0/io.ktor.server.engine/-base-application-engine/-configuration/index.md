---
title: BaseApplicationEngine.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.engine</a> / <a href="../index.html">BaseApplicationEngine</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a></code></div>

Configuration for the <a href="../index.html">BaseApplicationEngine</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration for the <a href="../index.html">BaseApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../-application-engine/-configuration/call-group-size.html">callGroupSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">callGroupSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Specifies size of the event group for running application code


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-application-engine/-configuration/connection-group-size.html">connectionGroupSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectionGroupSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Specifies size of the event group for accepting connections


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-application-engine/-configuration/parallelism.html">parallelism</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parallelism</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Provides currently available parallelism, e.g. number of available processors


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-application-engine/-configuration/worker-group-size.html">workerGroupSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">workerGroupSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Specifies size of the event group for processing connections, parsing messages and doing engine's internal work


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../load-common-configuration.html">loadCommonConfiguration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">loadCommonConfiguration</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$loadCommonConfiguration(io.ktor.server.engine.BaseApplicationEngine.Configuration, io.ktor.config.ApplicationConfig)/deploymentConfig">deploymentConfig</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Load engine's configuration suitable for all engines from <a href="../../load-common-configuration.html#io.ktor.server.engine$loadCommonConfiguration(io.ktor.server.engine.BaseApplicationEngine.Configuration, io.ktor.config.ApplicationConfig)/deploymentConfig">deploymentConfig</a>


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../../io.ktor.server.cio/-c-i-o-application-engine/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configuration</span></a></code></div>

CIO-based server configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.server.jetty/-jetty-application-engine-base/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configuration</span></a></code></div>

Jetty-specific engine configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.server.netty/-netty-application-engine/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configuration</span></a></code></div>

Configuration for the <a href="../../../io.ktor.server.netty/-netty-application-engine/index.html">NettyApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.server.testing/-test-application-engine/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configuration</span></a></code></div>

Test application engine configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.server.tomcat/-tomcat-application-engine/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configuration</span></a></code></div>

Tomcat engine specific configuration builder


</td>
</tr>
</tbody>
</table>
