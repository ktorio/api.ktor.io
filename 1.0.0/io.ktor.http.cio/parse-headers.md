---
title: parseHeaders - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./parse-headers.html">parseHeaders</a></div>

# parseHeaders

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">parseHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseHeaders(kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.internals.CharBufferBuilder, io.ktor.http.cio.internals.MutableRange)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseHeaders(kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.internals.CharBufferBuilder, io.ktor.http.cio.internals.MutableRange)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.cio.internals/-char-buffer-builder/index.html"><span class="identifier">CharBufferBuilder</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseHeaders(kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.internals.CharBufferBuilder, io.ktor.http.cio.internals.MutableRange)/range">range</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.cio.internals/-mutable-range/index.html"><span class="identifier">MutableRange</span></a>&nbsp;<span class="symbol">=</span>&nbsp;MutableRange(0, 0)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><span class="symbol">?</span></code></div>

Parse HTTP headers. Not applicable to request and response status lines.

