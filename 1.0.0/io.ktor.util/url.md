---
title: url - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.util</a> / <a href="./url.html">url</a></div>

# url

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">url</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$url(kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Construct a URL

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$url(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Creates an url using current call's schema, path and parameters as initial
and then invokes <a href="url.html#io.ktor.util$url(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> function on the url builder so amend parameters

</div>
