---
title: OAuth2StateProvider.getState - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">OAuth2StateProvider</a> / <a href="./get-state.html">getState</a></div>

# getState

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">getState</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.OAuth2StateProvider$getState(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Generates a new state for given <a href="get-state.html#io.ktor.auth.OAuth2StateProvider$getState(io.ktor.application.ApplicationCall)/call">call</a>

