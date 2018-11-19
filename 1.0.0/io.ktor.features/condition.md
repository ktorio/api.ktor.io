---
title: condition - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./condition.html">condition</a></div>

# condition

<div class="signature"><code><span class="keyword">fun </span><a href="-conditions-holder-builder/index.html"><span class="identifier">ConditionsHolderBuilder</span></a><span class="symbol">.</span><span class="identifier">condition</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$condition(io.ktor.features.ConditionsHolderBuilder, kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.http.content.OutgoingContent, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends a custom condition to the encoder or Compression configuration

