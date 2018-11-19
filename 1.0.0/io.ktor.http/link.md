---
title: link - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./link.html">link</a></div>

# link

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, io.ktor.http.LinkHeader)/header">header</span><span class="symbol">:</span>&nbsp;<a href="-link-header/index.html"><span class="identifier">LinkHeader</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response with specified <a href="link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</a> and <a href="link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</a>

</div>
