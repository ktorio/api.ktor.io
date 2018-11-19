---
title: receiveChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.request</a> / <a href="./receive-channel.html">receiveChannel</a></div>

# receiveChannel

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Receives channel content for this call.

### Exceptions

<code>ContentTransformationException</code> - when content cannot be transformed to the <a href="#">ByteReadChannel</a>.

**Return**
instance of <a href="#">ByteReadChannel</a> to read incoming bytes for this call.

