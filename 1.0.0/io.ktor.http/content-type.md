---
title: contentType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./content-type.html">contentType</a></div>

# contentType

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HeadersBuilder, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="-content-type/index.html"><span class="identifier">ContentType</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

**Deprecated:** Content-Type need to be passed in OutgoingContent.contentType


<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HttpMessageBuilder, io.ktor.http.ContentType)/type">type</span><span class="symbol">:</span>&nbsp;<a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Type</code> header

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Type</code> header value

</div>
