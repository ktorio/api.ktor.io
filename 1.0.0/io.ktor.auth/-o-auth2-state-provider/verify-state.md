---
title: OAuth2StateProvider.verifyState - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">OAuth2StateProvider</a> / <a href="./verify-state.html">verifyState</a></div>

# verifyState

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">verifyState</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.OAuth2StateProvider$verifyState(kotlin.String)/state">state</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Verifies <a href="verify-state.html#io.ktor.auth.OAuth2StateProvider$verifyState(kotlin.String)/state">state</a> and throws exceptions if it's not valid

