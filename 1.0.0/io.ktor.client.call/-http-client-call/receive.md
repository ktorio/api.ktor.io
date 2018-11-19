---
title: HttpClientCall.receive - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.call</a> / <a href="index.html">HttpClientCall</a> / <a href="./receive.html">receive</a></div>

# receive

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">receive</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.call.HttpClientCall$receive(io.ktor.client.call.TypeInfo)/info">info</span><span class="symbol">:</span>&nbsp;<a href="../-type-info/index.html"><span class="identifier">TypeInfo</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

Tries to receive the payload of the <a href="response.html">response</a> as an specific <a href="#">expectedType</a>.
Returns <a href="response.html">response</a> if <a href="#">expectedType</a> is <a href="../../io.ktor.client.response/-http-response/index.html">HttpResponse</a>.

### Exceptions

<code>NoTransformationFoundException</code> - If no transformation is found for the <a href="#">expectedType</a>.

<code>DoubleReceiveException</code> - If already called <a href="./receive.md">receive</a>.