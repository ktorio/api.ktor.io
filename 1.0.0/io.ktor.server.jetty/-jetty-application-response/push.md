---
title: JettyApplicationResponse.push - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.jetty</a> / <a href="index.html">JettyApplicationResponse</a> / <a href="./push.html">push</a></div>

# push

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">push</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.jetty.JettyApplicationResponse$push(io.ktor.response.ResponsePushBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../../io.ktor.server.servlet/-async-servlet-application-response/push.html">AsyncServletApplicationResponse.push</a>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing. Exact behaviour is up to engine implementation.

