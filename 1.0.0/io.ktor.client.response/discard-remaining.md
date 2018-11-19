---
title: discardRemaining - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.response</a> / <a href="./discard-remaining.html">discardRemaining</a></div>

# discardRemaining

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">discardRemaining</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Efficiently discards the remaining bytes of <a href="-http-response/content.html">HttpResponse.content</a>.

