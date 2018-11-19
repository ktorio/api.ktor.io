---
title: respondWrite - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.response</a> / <a href="./respond-write.html">respondWrite</a></div>

# respondWrite

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><s><span class="identifier">respondWrite</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/writer">writer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/Writer.html"><span class="identifier">Writer</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

**Deprecated:** Use respondTextWriter if you need to send text, otherwise use respondOutputStream

