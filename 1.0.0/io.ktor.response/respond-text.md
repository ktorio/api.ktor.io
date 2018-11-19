---
title: respondText - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.response</a> / <a href="./respond-text.html">respondText</a></div>

# respondText

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a plain text response, using specified <a href="respond-text.html#io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/text">text</a>

### Parameters

<code>contentType</code> - is an optional <a href="../io.ktor.http/-content-type/index.html">ContentType</a>, default is <a href="../io.ktor.http/-content-type/-text/-plain.html">ContentType.Text.Plain</a>

<code>status</code> - is an optional <a href="../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a>, default is <a href="../io.ktor.http/-http-status-code/-o-k.html">HttpStatusCode.OK</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a plain text response, using specified <a href="respond-text.html#io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/provider">provider</a> to build a text

### Parameters

<code>contentType</code> - is an optional <a href="../io.ktor.http/-content-type/index.html">ContentType</a>, default is <a href="../io.ktor.http/-content-type/-text/-plain.html">ContentType.Text.Plain</a>

<code>status</code> - is an optional <a href="../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a>, default is <a href="../io.ktor.http/-http-status-code/-o-k.html">HttpStatusCode.OK</a>

</div>
