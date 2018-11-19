---
title: SessionTransportTransformerEncrypt.transformRead - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTransportTransformerEncrypt</a> / <a href="./transform-read.html">transformRead</a></div>

# transformRead

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transformRead</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerEncrypt$transformRead(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Overrides <a href="../-session-transport-transformer/transform-read.html">SessionTransportTransformer.transformRead</a>

Un-apply a transformation for <a href="transform-read.html#io.ktor.sessions.SessionTransportTransformerEncrypt$transformRead(kotlin.String)/transportValue">transportValue</a> representing a transformed session.
Returns null if it fails.

**Return**
Untransformed value or null

