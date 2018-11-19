---
title: respondHtml - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.html</a> / <a href="./respond-html.html">respondHtml</a></div>

# respondHtml

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondHtml</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">HTML</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a HTML response, using specified <a href="respond-html.html#io.ktor.html$respondHtml(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/block">block</a> to build an HTML page

