---
title: MultipartEvent.MultipartPart.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio</a> / <a href="../index.html">MultipartEvent</a> / <a href="index.html">MultipartPart</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">MultipartPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.MultipartEvent.MultipartPart$<init>(kotlinx.coroutines.Deferred((io.ktor.http.cio.HttpHeadersMap)), kotlinx.coroutines.io.ByteReadChannel)/headers">headers</span><span class="symbol">:</span>&nbsp;<span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../../-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.MultipartEvent.MultipartPart$<init>(kotlinx.coroutines.Deferred((io.ktor.http.cio.HttpHeadersMap)), kotlinx.coroutines.io.ByteReadChannel)/body">body</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">)</span></code></div>

Represents a multipart part. There could be any number of parts in a multipart stream. Please note that
it is important to consume <a href="-init-.html#io.ktor.http.cio.MultipartEvent.MultipartPart$<init>(kotlinx.coroutines.Deferred((io.ktor.http.cio.HttpHeadersMap)), kotlinx.coroutines.io.ByteReadChannel)/body">body</a> otherwise multipart parser could get stuck (suspend)
so you will not receive more events.

