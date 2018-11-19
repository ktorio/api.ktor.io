---
title: HttpRequestHandler - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio</a> / <a href="./-http-request-handler.html">HttpRequestHandler</a></div>

# HttpRequestHandler

<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">HttpRequestHandler</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="keyword">suspend </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="symbol">(</span><span class="parameterName">request</span><span class="symbol">:</span>&nbsp;<a href="-request/index.html"><span class="identifier">Request</span></a><span class="symbol">,</span>&nbsp;<span class="parameterName">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">,</span>&nbsp;<span class="parameterName">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">,</span>&nbsp;<span class="parameterName">upgraded</span><span class="symbol">:</span>&nbsp;<span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span><span class="symbol">?</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

HTTP request handler function

