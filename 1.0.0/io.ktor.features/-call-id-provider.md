---
title: CallIdProvider - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./-call-id-provider.html">CallIdProvider</a></div>

# CallIdProvider

<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">CallIdProvider</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="symbol">(</span><span class="parameterName">call</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

A function that retrieves or generates call id using provided call

