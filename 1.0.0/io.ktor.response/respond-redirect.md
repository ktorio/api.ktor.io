---
title: respondRedirect - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.response</a> / <a href="./respond-redirect.html">respondRedirect</a></div>

# respondRedirect

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean)/url">url</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean)/permanent">permanent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a <code>301 Moved Permanently</code> or <code>302 Found</code> redirect

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/permanent">permanent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a <code>301 Moved Permanently</code> or <code>302 Found</code> redirect.
Unlike the other <a href="./respond-redirect.md">respondRedirect</a> it provides a way to build URL based on current call using <a href="respond-redirect.html#io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> function

</div>
