---
title: ApacheEngineConfig.connectTimeout - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.apache</a> / <a href="index.html">ApacheEngineConfig</a> / <a href="./connect-timeout.html">connectTimeout</a></div>

# connectTimeout

<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectTimeout</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Max milliseconds to establish an HTTP connection - default 10 seconds.
A value of 0 represents infinite, while -1 represents system's default value.

