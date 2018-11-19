---
title: param - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.routing</a> / <a href="./param.html">param</a></div>

# param

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">param</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match parameter with specified <a href="param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and <a href="param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/value">value</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">param</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match parameter with specified <a href="param.html#io.ktor.routing$param(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/name">name</a> and capture its value

</div>
