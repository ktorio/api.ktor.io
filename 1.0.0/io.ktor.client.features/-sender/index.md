---
title: Sender - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="./index.html">Sender</a></div>

# Sender

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Sender</span></code></div>

This interface represents a request send pipeline interceptor chain

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.Sender$execute(io.ktor.client.request.HttpRequestBuilder)/requestBuilder">requestBuilder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Execute send pipeline. It could start pipeline execution or replace the call


</td>
</tr>
</tbody>
</table>
