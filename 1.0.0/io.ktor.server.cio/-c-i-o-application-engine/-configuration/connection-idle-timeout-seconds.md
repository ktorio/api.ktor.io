---
title: CIOApplicationEngine.Configuration.connectionIdleTimeoutSeconds - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.cio</a> / <a href="../index.html">CIOApplicationEngine</a> / <a href="index.html">Configuration</a> / <a href="./connection-idle-timeout-seconds.html">connectionIdleTimeoutSeconds</a></div>

# connectionIdleTimeoutSeconds

<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectionIdleTimeoutSeconds</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Number of seconds that the server will keep HTTP IDLE connections open.
A connection is IDLE if there are no active requests running.

