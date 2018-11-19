---
title: receiveParameters - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.request</a> / <a href="./receive-parameters.html">receiveParameters</a></div>

# receiveParameters

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveParameters</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Receives form parameters for this call.

### Exceptions

<code>ContentTransformationException</code> - when content cannot be transformed to the <a href="../io.ktor.http/-parameters/index.html">Parameters</a>.

**Return**
instance of <a href="../io.ktor.http/-parameters/index.html">Parameters</a>.

