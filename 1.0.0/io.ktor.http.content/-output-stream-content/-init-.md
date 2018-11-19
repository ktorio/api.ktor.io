---
title: OutputStreamContent.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">OutputStreamContent</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">OutputStreamContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutputStreamContent$<init>(kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)), io.ktor.http.ContentType, io.ktor.http.HttpStatusCode)/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html"><span class="identifier">OutputStream</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutputStreamContent$<init>(kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)), io.ktor.http.ContentType, io.ktor.http.HttpStatusCode)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutputStreamContent$<init>(kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)), io.ktor.http.ContentType, io.ktor.http.HttpStatusCode)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

<a href="../-outgoing-content/index.html">OutgoingContent</a> to respond with <a href="http://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html">OutputStream</a>.
The stream would be automatically closed after <a href="-init-.html#io.ktor.http.content.OutputStreamContent$<init>(kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)), io.ktor.http.ContentType, io.ktor.http.HttpStatusCode)/body">body</a> finish.

