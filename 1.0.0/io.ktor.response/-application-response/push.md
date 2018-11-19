---
title: ApplicationResponse.push - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.response</a> / <a href="index.html">ApplicationResponse</a> / <a href="./push.html">push</a></div>

# push

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">push</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response.ApplicationResponse$push(io.ktor.response.ResponsePushBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing. Exact behaviour is up to engine implementation.

