---
title: Routing.Feature - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.routing</a> / <a href="../index.html">Routing</a> / <a href="./index.html">Feature</a></div>

# Feature

<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../index.html"><span class="identifier">Routing</span></a><span class="symbol">,</span>&nbsp;<a href="../index.html"><span class="identifier">Routing</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../index.html">Routing</a>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-routing-call-finished.html">RoutingCallFinished</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RoutingCallFinished</span><span class="symbol">: </span><a href="../../../io.ktor.application/-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="../../-routing-application-call/index.html"><span class="identifier">RoutingApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Event definition for when a routing-based call processing finished


</td>
</tr>
<tr>
<td markdown="1">

<a href="-routing-call-started.html">RoutingCallStarted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">RoutingCallStarted</span><span class="symbol">: </span><a href="../../../io.ktor.application/-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="../../-routing-application-call/index.html"><span class="identifier">RoutingApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Event definition for when a routing-based call processing starts


</td>
</tr>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../index.html"><span class="identifier">Routing</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.Routing.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.routing.Routing, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.Routing.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.routing.Routing, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">Routing</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../index.html"><span class="identifier">Routing</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
