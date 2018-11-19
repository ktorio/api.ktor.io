---
title: ApplicationEngine.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.engine</a> / <a href="../index.html">ApplicationEngine</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Configuration for the <a href="../index.html">ApplicationEngine</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration for the <a href="../index.html">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call-group-size.html">callGroupSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">callGroupSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Specifies size of the event group for running application code


</td>
</tr>
<tr>
<td markdown="1">

<a href="connection-group-size.html">connectionGroupSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectionGroupSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Specifies size of the event group for accepting connections


</td>
</tr>
<tr>
<td markdown="1">

<a href="parallelism.html">parallelism</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parallelism</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Provides currently available parallelism, e.g. number of available processors


</td>
</tr>
<tr>
<td markdown="1">

<a href="worker-group-size.html">workerGroupSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">workerGroupSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Specifies size of the event group for processing connections, parsing messages and doing engine's internal work


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../-base-application-engine/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configuration</span></a></code></div>

Configuration for the <a href="../../-base-application-engine/index.html">BaseApplicationEngine</a>


</td>
</tr>
</tbody>
</table>
