---
title: readBytes - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.response</a> / <a href="./read-bytes.html">readBytes</a></div>

# readBytes

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.response$readBytes(io.ktor.client.response.HttpResponse, kotlin.Int)/count">count</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Exactly reads <a href="read-bytes.html#io.ktor.client.response$readBytes(io.ktor.client.response.HttpResponse, kotlin.Int)/count">count</a> bytes of the <a href="-http-response/content.html">HttpResponse.content</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Reads the whole <a href="-http-response/content.html">HttpResponse.content</a> if Content-Length was specified.
Otherwise it just reads one byte.

</div>
