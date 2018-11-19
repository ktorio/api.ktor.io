---
title: respondBytes - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.response</a> / <a href="./respond-bytes.html">respondBytes</a></div>

# respondBytes

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondBytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a raw bytes response, using specified <a href="respond-bytes.html#io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/provider">provider</a> to build a byte array

### Parameters

<code>contentType</code> - is an optional <a href="../io.ktor.http/-content-type/index.html">ContentType</a>, unspecified by default

<code>status</code> - is an optional <a href="../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a>, default is <a href="../io.ktor.http/-http-status-code/-o-k.html">HttpStatusCode.OK</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondBytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a raw bytes response, using specified <a href="respond-bytes.html#io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/bytes">bytes</a>

### Parameters

<code>contentType</code> - is an optional <a href="../io.ktor.http/-content-type/index.html">ContentType</a>, unspecified by default

<code>status</code> - is an optional <a href="../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a>, default is <a href="../io.ktor.http/-http-status-code/-o-k.html">HttpStatusCode.OK</a>

</div>
