---
title: CallLogging.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallLogging</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Configuration for <a href="../index.html">CallLogging</a> feature

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration for <a href="../index.html">CallLogging</a> feature


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="level.html">level</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">level</span><span class="symbol">: </span><span class="identifier">Level</span></code></div>

Logging level for <a href="../index.html">CallLogging</a>, default is <a href="#">Level.TRACE</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="filter.html">filter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">filter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallLogging.Configuration$filter(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Log messages for calls matching a <a href="filter.html#io.ktor.features.CallLogging.Configuration$filter(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Boolean)))/predicate">predicate</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="mdc.html">mdc</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">mdc</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Put a diagnostic context value to <a href="#">MDC</a> with the specified <a href="mdc.html#io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/name">name</a> and computed using <a href="mdc.html#io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/provider">provider</a> function.
A value will be available in MDC only during <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a> lifetime and will be removed after call
processing.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../call-id-mdc.html">callIdMdc</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">callIdMdc</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features$callIdMdc(io.ktor.features.CallLogging.Configuration, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"CallId"<span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Put call id into MDC (diagnostic context value) with <a href="../../call-id-mdc.html#io.ktor.features$callIdMdc(io.ktor.features.CallLogging.Configuration, kotlin.String)/name">name</a>


</td>
</tr>
</tbody>
</table>
