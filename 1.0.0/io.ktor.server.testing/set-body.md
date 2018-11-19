---
title: setBody - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.server.testing</a> / <a href="./set-body.html">setBody</a></div>

# setBody

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">setBody</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set HTTP request body text content

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">setBody</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.ByteArray)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set HTTP request body bytes

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">setBody</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)))/boundary">boundary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)))/parts">parts</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set multipart HTTP request body

</div>
