---
title: accept - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.routing</a> / <a href="./accept.html">accept</a></div>

# accept

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">accept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match requests with <a href="../io.ktor.http/-http-headers/-accept.html">HttpHeaders.Accept</a> header matching specified <a href="accept.html#io.ktor.routing$accept(io.ktor.routing.Route, io.ktor.http.ContentType, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/contentType">contentType</a>

