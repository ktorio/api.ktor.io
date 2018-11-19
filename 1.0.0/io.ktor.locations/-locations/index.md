---
title: Locations - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.locations</a> / <a href="./index.html">Locations</a></div>

# Locations

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Locations</span></code></div>

**EXPERIMENTAL** Ktor feature that allows to handle and construct routes in a typed way.

You have to create data classes/objects representing parameterized routes and annotate them with <a href="../-location/index.html">Location</a>.
Then you can register sub-routes and handlers for those locations and create links to them
using <a href="href.html">Locations.href</a>.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Configuration for <a href="./index.md">Locations</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">Locations</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="./index.md">Locations</a>.


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Locations</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$<init>(io.ktor.application.Application, io.ktor.locations.LocationRouteService)/application">application</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$<init>(io.ktor.application.Application, io.ktor.locations.LocationRouteService)/routeService">routeService</span><span class="symbol">:</span>&nbsp;<a href="../-location-route-service/index.html"><span class="identifier">LocationRouteService</span></a><span class="symbol">)</span></code></div>

**EXPERIMENTAL** Ktor feature that allows to handle and construct routes in a typed way.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create-entry.html">createEntry</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createEntry</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$createEntry(io.ktor.routing.Route, kotlin.reflect.KClass((kotlin.Any)))/parent">parent</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$createEntry(io.ktor.routing.Route, kotlin.reflect.KClass((kotlin.Any)))/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Creates all necessary routing entries to match specified <a href="create-entry.html#io.ktor.locations.Locations$createEntry(io.ktor.routing.Route, kotlin.reflect.KClass((kotlin.Any)))/locationClass">locationClass</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="href.html">href</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">href</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.locations.Locations$href(kotlin.Any)/location">location</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Constructs the url for <a href="href.html#io.ktor.locations.Locations$href(kotlin.Any)/location">location</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="resolve.html">resolve</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">resolve</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="resolve.html#T"><span class="identifier">T</span></a></code></div>

Resolves parameters in a <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/call">call</a> to an instance of specified <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/locationClass">locationClass</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">resolve</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="resolve.html#T"><span class="identifier">T</span></a></code></div>

Resolves <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/parameters">parameters</a> to an instance of specified <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/locationClass">locationClass</a>.


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">Locations</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.locations.Locations.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.locations.Locations.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Locations</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
