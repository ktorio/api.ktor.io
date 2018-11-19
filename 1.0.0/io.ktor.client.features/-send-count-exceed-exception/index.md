---
title: SendCountExceedException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="./index.html">SendCountExceedException</a></div>

# SendCountExceedException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SendCountExceedException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Thrown when too many actual requests were sent during a client call.
It could be caused by infinite or too long redirect sequence.
Maximum number of requests is limited by <a href="../-http-send/max-send-count.html">HttpSend.maxSendCount</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">SendCountExceedException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.SendCountExceedException$<init>(kotlin.String)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Thrown when too many actual requests were sent during a client call.
It could be caused by infinite or too long redirect sequence.
Maximum number of requests is limited by <a href="../-http-send/max-send-count.html">HttpSend.maxSendCount</a>


</td>
</tr>
</tbody>
</table>
