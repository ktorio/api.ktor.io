---
title: forEachPart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.content</a> / <a href="./for-each-part.html">forEachPart</a></div>

# forEachPart

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a><span class="symbol">.</span><span class="identifier">forEachPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$forEachPart(io.ktor.http.content.MultiPartData, kotlin.SuspendFunction1((io.ktor.http.content.PartData, kotlin.Unit)))/partHandler">partHandler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Parse multipart data stream and invoke <a href="for-each-part.html#io.ktor.http.content$forEachPart(io.ktor.http.content.MultiPartData, kotlin.SuspendFunction1((io.ktor.http.content.PartData, kotlin.Unit)))/partHandler">partHandler</a> for each <a href="-part-data/index.html">PartData</a> encountered

### Parameters

<code>partHandler</code> - to be invoked for every part item