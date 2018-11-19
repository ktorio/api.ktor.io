---
title: DefaultOAuth2StateProvider - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">DefaultOAuth2StateProvider</a></div>

# DefaultOAuth2StateProvider

<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultOAuth2StateProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-o-auth2-state-provider/index.html"><span class="identifier">OAuth2StateProvider</span></a></code></div>

The default state provider that does generate random nonce and don't keep them

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="get-state.html">getState</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">getState</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.DefaultOAuth2StateProvider$getState(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Generates a new state for given <a href="get-state.html#io.ktor.auth.DefaultOAuth2StateProvider$getState(io.ktor.application.ApplicationCall)/call">call</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="verify-state.html">verifyState</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">verifyState</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.DefaultOAuth2StateProvider$verifyState(kotlin.String)/state">state</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Verifies <a href="verify-state.html#io.ktor.auth.DefaultOAuth2StateProvider$verifyState(kotlin.String)/state">state</a> and throws exceptions if it's not valid


</td>
</tr>
</tbody>
</table>
