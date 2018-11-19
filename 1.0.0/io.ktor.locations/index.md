---
title: io.ktor.locations - 
layout: api
---



## Package io.ktor.locations

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-location-attribute-route-service/index.html">LocationAttributeRouteService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LocationAttributeRouteService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-location-route-service/index.html"><span class="identifier">LocationRouteService</span></a></code></div>

Implements <a href="-location-route-service/index.html">LocationRouteService</a> by extracting routing information from a <a href="-location/index.html">Location</a> annotation.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-location-route-service/index.html">LocationRouteService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">LocationRouteService</span></code></div>

Provides services for extracting routing information from a location class.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-locations/index.html">Locations</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Locations</span></code></div>

**EXPERIMENTAL** Ktor feature that allows to handle and construct routes in a typed way.


</td>
</tr>
</tbody>
</table>

### Annotations

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-ktor-experimental-locations-a-p-i/index.html">KtorExperimentalLocationsAPI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">KtorExperimentalLocationsAPI</span></code></div>

API marked with this annotation is experimental and is not guaranteed to be stable.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-location/index.html">Location</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">Location</span></code></div>

Annotation for classes that will act as typed routes.


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-location-routing-exception/index.html">LocationRoutingException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LocationRoutingException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Exception indicating that route parameters in curly brackets do not match class properties.


</td>
</tr>
</tbody>
</table>

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-routing-exception.html">RoutingException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">RoutingException</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="-location-routing-exception/index.html"><span class="identifier">LocationRoutingException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="location.html">location</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">location</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="-location/index.html"><span class="identifier">Location</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="locations.html">locations</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">locations</span><span class="symbol">: </span><a href="-locations/index.html"><span class="identifier">Locations</span></a></code></div>

<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">locations</span><span class="symbol">: </span><a href="-locations/index.html"><span class="identifier">Locations</span></a></code></div>

<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="identifier">locations</span><span class="symbol">: </span><a href="-locations/index.html"><span class="identifier">Locations</span></a></code></div>

Gets the <a href="locations.html">Application.locations</a> feature


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="delete.html">delete</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.delete.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="delete.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="delete.html#io.ktor.locations$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.delete.T, )))/body">body</a> for a <code>DELETE</code> location defined by class <a href="delete.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$get(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.get.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="get.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="get.html#io.ktor.locations$get(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.get.T, )))/body">body</a> for a <code>GET</code> location defined by class <a href="get.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="handle.html">handle</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">handle</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$handle(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="handle.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a handler <a href="handle.html#io.ktor.locations$handle(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</a> for a location defined by class <a href="handle.html#T">T</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">handle</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/dataClass">dataClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="handle.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="handle.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a handler <a href="handle.html#io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/body">body</a> for a location defined by class <a href="handle.html#io.ktor.locations$handle(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.handle.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.handle.T, )))/dataClass">dataClass</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="head.html">head</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">head</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$head(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.head.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="head.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="head.html#io.ktor.locations$head(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.head.T, )))/body">body</a> for a <code>HEAD</code> location defined by class <a href="head.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="href.html">href</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">href</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$href(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), kotlin.Any)/location">location</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Renders link to a <a href="href.html#io.ktor.locations$href(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), kotlin.Any)/location">location</a> using current installed locations service


</td>
</tr>
<tr>
<td markdown="1">

<a href="location.html">location</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">location</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.locations$location(io.ktor.routing.Route, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a route <a href="location.html#io.ktor.locations$location(io.ktor.routing.Route, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</a> for a location defined by class <a href="location.html#T">T</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">location</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/data">data</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="location.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a route <a href="location.html#io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/body">body</a> for a location defined by class <a href="location.html#io.ktor.locations$location(io.ktor.routing.Route, kotlin.reflect.KClass((io.ktor.locations.location.T)), kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/data">data</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="options.html">options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">options</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$options(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.options.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="options.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="options.html#io.ktor.locations$options(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.options.T, )))/body">body</a> for a <code>OPTIONS</code> location defined by class <a href="options.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="patch.html">patch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">patch</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$patch(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.patch.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="patch.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="patch.html#io.ktor.locations$patch(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.patch.T, )))/body">body</a> for a <code>PATCH</code> location defined by class <a href="patch.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="post.html">post</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.post.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="post.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="post.html#io.ktor.locations$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.post.T, )))/body">body</a> for a <code>POST</code> location defined by class <a href="post.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="put.html">put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$put(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.put.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="put.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="put.html#io.ktor.locations$put(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.put.T, )))/body">body</a> for a <code>PUT</code> location defined by class <a href="put.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$url(io.ktor.application.ApplicationCall, kotlin.Any, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/location">location</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations$url(io.ktor.application.ApplicationCall, kotlin.Any, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Constructs a String with the url of a instance <a href="url.html#io.ktor.locations$url(io.ktor.application.ApplicationCall, kotlin.Any, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/location">location</a> whose class must be annotated with <a href="-location/index.html">Location</a>.


</td>
</tr>
</tbody>
</table>
