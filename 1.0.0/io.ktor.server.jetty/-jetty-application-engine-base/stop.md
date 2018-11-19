---
title: JettyApplicationEngineBase.stop - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.jetty</a> / <a href="index.html">JettyApplicationEngineBase</a> / <a href="./stop.html">stop</a></div>

# stop

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">stop</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.jetty.JettyApplicationEngineBase$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/gracePeriod">gracePeriod</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.jetty.JettyApplicationEngineBase$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.jetty.JettyApplicationEngineBase$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeUnit">timeUnit</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/TimeUnit.html"><span class="identifier">TimeUnit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../../io.ktor.server.engine/-application-engine/stop.html">ApplicationEngine.stop</a>

Stops this <a href="../../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>

### Parameters

<code>gracePeriod</code> - the maximum amount of time in milliseconds to allow for activity to cool down

<code>timeout</code> - the maximum amount of time to wait until server stops gracefully

<code>timeUnit</code> - the <a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/TimeUnit.html">TimeUnit</a> for <a href="stop.html#io.ktor.server.jetty.JettyApplicationEngineBase$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeout">timeout</a>