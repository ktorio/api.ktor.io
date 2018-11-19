---
title: receiveText - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.request</a> / <a href="./receive-text.html">receiveText</a></div>

# receiveText

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Receives incoming content for this call as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.

### Exceptions

<code>ContentTransformationException</code> - when content cannot be transformed to the <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.

**Return**
text received from this call.

