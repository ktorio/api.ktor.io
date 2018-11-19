---
title: HttpResponse.executionContext - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.response</a> / <a href="index.html">HttpResponse</a> / <a href="./execution-context.html">executionContext</a></div>

# executionContext

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><s><span class="identifier">executionContext</span></s><span class="symbol">: </span><span class="identifier">Job</span></code></div>

**Deprecated:** executionContext is deprecated. Use coroutineContext instead.

A <a href="#">Job</a> representing the process of this response.

