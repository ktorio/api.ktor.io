---
title: TestApplicationEngine.handleWebSocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.testing</a> / <a href="index.html">TestApplicationEngine</a> / <a href="./handle-web-socket.html">handleWebSocket</a></div>

# handleWebSocket

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">handleWebSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing.TestApplicationEngine$handleWebSocket(kotlin.String, kotlin.Function1((io.ktor.server.testing.TestApplicationRequest, kotlin.Unit)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing.TestApplicationEngine$handleWebSocket(kotlin.String, kotlin.Function1((io.ktor.server.testing.TestApplicationRequest, kotlin.Unit)))/setup">setup</span><span class="symbol">:</span>&nbsp;<a href="../-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-test-application-call/index.html"><span class="identifier">TestApplicationCall</span></a></code></div>

Make a test request that setup a websocket session and wait for completion

