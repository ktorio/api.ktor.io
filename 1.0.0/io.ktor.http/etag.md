---
title: etag - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./etag.html">etag</a></div>

# etag

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$etag(io.ktor.http.HeadersBuilder, kotlin.String)/entityTag">entityTag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>E-Tag</code> header

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Parse <code>E-Tag</code> header value

</div>
