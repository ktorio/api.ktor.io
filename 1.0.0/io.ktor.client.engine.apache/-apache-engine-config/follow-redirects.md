---
title: ApacheEngineConfig.followRedirects - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.apache</a> / <a href="index.html">ApacheEngineConfig</a> / <a href="./follow-redirects.html">followRedirects</a></div>

# followRedirects

<div class="signature"><code><span class="keyword">var </span><span class="identifier">followRedirects</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Whether or not, it will follow <code>Location</code> headers. <code>false</code> by default.
It uses the default number of redirects defined by Apache's HttpClient that is 50.

