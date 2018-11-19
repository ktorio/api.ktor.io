---
title: ApacheEngineConfig.connectionRequestTimeout - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.apache</a> / <a href="index.html">ApacheEngineConfig</a> / <a href="./connection-request-timeout.html">connectionRequestTimeout</a></div>

# connectionRequestTimeout

<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectionRequestTimeout</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Max milliseconds for the connection manager to start a request - default 20 seconds.
A value of 0 represents infinite, while -1 represents system's default value.

