---
title: authenticate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./authenticate.html">authenticate</a></div>

# authenticate

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">authenticate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;arrayOf&lt;String?&gt;(null)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/optional">optional</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Creates an authentication route that does handle authentication by the specified providers referred by
<a href="authenticate.html#io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</a> names. <code>null</code> could be used to point to the default provider and could be also mixed with other
provider names.
Other routes, handlers and interceptors could be nested into this node

The <a href="-authentication/index.html">Authentication</a> feature need to be installed first otherwise
it will fail with <a href="../io.ktor.application/-missing-application-feature-exception/index.html">MissingApplicationFeatureException</a> and all providers requested by <a href="authenticate.html#io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</a> need
to be already registered.

Is is important to note that when <a href="authenticate.html#io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/optional">optional</a> is set, challenges will be skipped only if no credentials are provided.

To summarize:

optional=false:

* No credentials: challenge is sent and route is NOT executed
* Bad credentials: Unauthorized
* Good credentials: route handler will be executed

optional=true:

* No credentials: route handler will be executed with a null <a href="-principal.html">Principal</a>
* Bad credentials: Unauthorized
* Good credentials: route handler will be executed

### Parameters

<code>configurations</code> - names that point to already registered authentication providers

<code>optional</code> - when set, if no auth is provided by the client, the call will continue but with a null <a href="-principal.html">Principal</a>

### Exceptions

<code>MissingApplicationFeatureException</code> - if no <a href="-authentication/index.html">Authentication</a> feature installed first

<code>IllegalArgumentException</code> - if there are no registered providers referred by <a href="authenticate.html#io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</a> names