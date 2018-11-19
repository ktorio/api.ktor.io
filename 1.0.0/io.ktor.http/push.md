---
title: push - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./push.html">push</a></div>

# push

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String)/pathAndQuery">pathAndQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.Parameters)/encodedPath">encodedPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="-parameters/index.html"><span class="identifier">Parameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing.
Exact behaviour is up to engine implementation.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.response.ResponsePushBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.response/-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing (may call or not call <a href="push.html#io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.response.ResponsePushBuilder, kotlin.Unit)))/block">block</a>).
Exact behaviour is up to engine implementation.

</div>
