---
title: DoubleReceiveException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.call</a> / <a href="./index.html">DoubleReceiveException</a></div>

# DoubleReceiveException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DoubleReceiveException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Exception representing that the response payload has already been received.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DoubleReceiveException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.call.DoubleReceiveException$<init>(io.ktor.client.call.HttpClientCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">)</span></code></div>

Exception representing that the response payload has already been received.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="message.html">message</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">message</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
