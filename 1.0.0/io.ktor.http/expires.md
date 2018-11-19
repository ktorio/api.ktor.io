---
title: expires - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./expires.html">expires</a></div>

# expires

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$expires(io.ktor.http.HeadersBuilder, java.time.LocalDateTime)/expires">expires</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set 'Expires` header value from <a href="expires.html#io.ktor.http$expires(io.ktor.http.HeadersBuilder, java.time.LocalDateTime)/expires">expires</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Expires</code> header

</div>
