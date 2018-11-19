---
title: ReceivePipelineException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.call</a> / <a href="./index.html">ReceivePipelineException</a></div>

# ReceivePipelineException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ReceivePipelineException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Exception representing fail of the response pipeline
<a href="cause.html">cause</a> contains origin pipeline exception

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ReceivePipelineException</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call.ReceivePipelineException$<init>(io.ktor.client.call.HttpClientCall, io.ktor.client.call.TypeInfo, kotlin.Throwable)/request">request</span><span class="symbol">:</span>&nbsp;<a href="../-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call.ReceivePipelineException$<init>(io.ktor.client.call.HttpClientCall, io.ktor.client.call.TypeInfo, kotlin.Throwable)/info">info</span><span class="symbol">:</span>&nbsp;<a href="../-type-info/index.html"><span class="identifier">TypeInfo</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call.ReceivePipelineException$<init>(io.ktor.client.call.HttpClientCall, io.ktor.client.call.TypeInfo, kotlin.Throwable)/cause">cause</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">)</span></code></div>

Exception representing fail of the response pipeline
<a href="-init-.html#io.ktor.client.call.ReceivePipelineException$<init>(io.ktor.client.call.HttpClientCall, io.ktor.client.call.TypeInfo, kotlin.Throwable)/cause">cause</a> contains origin pipeline exception


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cause.html">cause</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">cause</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="info.html">info</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">info</span><span class="symbol">: </span><a href="../-type-info/index.html"><span class="identifier">TypeInfo</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="request.html">request</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">request</span><span class="symbol">: </span><a href="../-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

</td>
</tr>
</tbody>
</table>
