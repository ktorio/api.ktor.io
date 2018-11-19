---
title: withETag - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./with-e-tag.html">withETag</a></div>

# withETag

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><s><span class="identifier">withETag</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/putHeader">putHeader</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

**Deprecated:** Use configuration for ConditionalHeaders

Checks current <a href="with-e-tag.html#io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/etag">etag</a> value and pass it through conditions supplied by the remote client. Depends on conditions it
produces 410 Precondition Failed or 304 Not modified responses when necessary.
Otherwise sets ETag header and delegates to the <a href="with-e-tag.html#io.ktor.features$withETag(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean, kotlin.SuspendFunction0((kotlin.Unit)))/block">block</a> function

It never handles If-None-Match: *  as it is related to non-etag logic (for example, Last modified checks).
See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26 for more details

