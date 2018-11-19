---
title: ApplicationReceiveRequest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.request</a> / <a href="./index.html">ApplicationReceiveRequest</a></div>

# ApplicationReceiveRequest

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationReceiveRequest</span></code></div>

Represents a subject for <a href="../-application-receive-pipeline/index.html">ApplicationReceivePipeline</a>

### Parameters

<code>type</code> - specifies the desired type for a receiving operation

<code>value</code> - specifies current value being processed by the pipeline

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ApplicationReceiveRequest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.request.ApplicationReceiveRequest$<init>(kotlin.reflect.KClass((kotlin.Any)), kotlin.Any)/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.request.ApplicationReceiveRequest$<init>(kotlin.reflect.KClass((kotlin.Any)), kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span></code></div>

Represents a subject for <a href="../-application-receive-pipeline/index.html">ApplicationReceivePipeline</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="type.html">type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">type</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span></code></div>

specifies the desired type for a receiving operation


</td>
</tr>
<tr>
<td markdown="1">

<a href="value.html">value</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">value</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

specifies current value being processed by the pipeline


</td>
</tr>
</tbody>
</table>
