---
title: LocationRouteService.findRoute - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.locations</a> / <a href="index.html">LocationRouteService</a> / <a href="./find-route.html">findRoute</a></div>

# findRoute

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">findRoute</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.locations.LocationRouteService$findRoute(kotlin.reflect.KClass((kotlin.Any)))/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Retrieves routing information from a given <a href="find-route.html#io.ktor.locations.LocationRouteService$findRoute(kotlin.reflect.KClass((kotlin.Any)))/locationClass">locationClass</a>.

**Return**
routing pattern, or null if a given class doesn't represent a route.

