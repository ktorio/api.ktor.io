---
title: respond - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.response</a> / <a href="./respond.html">respond</a></div>

# respond

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respond</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, kotlin.Any)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sends a <a href="respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, kotlin.Any)/message">message</a> as a response

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respond</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets <a href="respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/status">status</a> and sends a <a href="respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/message">message</a> as a response

</div>
