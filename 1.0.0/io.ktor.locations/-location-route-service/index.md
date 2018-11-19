---
title: LocationRouteService - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.locations</a> / <a href="./index.html">LocationRouteService</a></div>

# LocationRouteService

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">LocationRouteService</span></code></div>

Provides services for extracting routing information from a location class.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="find-route.html">findRoute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">findRoute</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.locations.LocationRouteService$findRoute(kotlin.reflect.KClass((kotlin.Any)))/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Retrieves routing information from a given <a href="find-route.html#io.ktor.locations.LocationRouteService$findRoute(kotlin.reflect.KClass((kotlin.Any)))/locationClass">locationClass</a>.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-location-attribute-route-service/index.html">LocationAttributeRouteService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LocationAttributeRouteService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">LocationRouteService</span></a></code></div>

Implements <a href="./index.md">LocationRouteService</a> by extracting routing information from a <a href="../-location/index.html">Location</a> annotation.


</td>
</tr>
</tbody>
</table>
