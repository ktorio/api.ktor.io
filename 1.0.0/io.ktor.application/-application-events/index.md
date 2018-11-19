---
title: ApplicationEvents - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="./index.html">ApplicationEvents</a></div>

# ApplicationEvents

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEvents</span></code></div>

Provides events for <a href="../-application/index.html">Application</a> lifecycle

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ApplicationEvents</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Provides events for <a href="../-application/index.html">Application</a> lifecycle


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="raise.html">raise</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">raise</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/definition">definition</span><span class="symbol">:</span>&nbsp;<a href="../-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="raise.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="raise.html#T"><span class="identifier">T</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Rise an event specified by <a href="raise.html#io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/definition">definition</a> with the specified <a href="raise.html#io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/value">value</a> and call all handlers


</td>
</tr>
<tr>
<td markdown="1">

<a href="subscribe.html">subscribe</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">subscribe</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/definition">definition</span><span class="symbol">:</span>&nbsp;<a href="../-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="subscribe.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../-event-handler.html"><span class="identifier">EventHandler</span></a><span class="symbol">&lt;</span><a href="subscribe.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">DisposableHandle</span></code></div>

Subscribe <a href="subscribe.html#io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/handler">handler</a> to an event specified by <a href="subscribe.html#io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/definition">definition</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="unsubscribe.html">unsubscribe</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">unsubscribe</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationEvents$unsubscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.unsubscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.unsubscribe.T, kotlin.Unit)))/definition">definition</span><span class="symbol">:</span>&nbsp;<a href="../-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="unsubscribe.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationEvents$unsubscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.unsubscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.unsubscribe.T, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../-event-handler.html"><span class="identifier">EventHandler</span></a><span class="symbol">&lt;</span><a href="unsubscribe.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Unsubscribe <a href="unsubscribe.html#io.ktor.application.ApplicationEvents$unsubscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.unsubscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.unsubscribe.T, kotlin.Unit)))/handler">handler</a> from an event specified by <a href="unsubscribe.html#io.ktor.application.ApplicationEvents$unsubscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.unsubscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.unsubscribe.T, kotlin.Unit)))/definition">definition</a>


</td>
</tr>
</tbody>
</table>
