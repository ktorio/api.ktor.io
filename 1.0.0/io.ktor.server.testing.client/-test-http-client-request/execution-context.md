---
title: TestHttpClientRequest.executionContext - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.testing.client</a> / <a href="index.html">TestHttpClientRequest</a> / <a href="./execution-context.html">executionContext</a></div>

# executionContext

<div class="signature"><code><span class="keyword">val </span><span class="identifier">executionContext</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Overrides <a href="../../io.ktor.client.request/-http-request/execution-context.html">HttpRequest.executionContext</a>

A <a href="#">Job</a> representing the process of this request.

