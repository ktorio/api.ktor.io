---
title: authentication - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./authentication.html">authentication</a></div>

# authentication

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">authentication</span><span class="symbol">: </span><a href="-authentication-context/index.html"><span class="identifier">AuthenticationContext</span></a></code></div>

Retrieves an <a href="-authentication-context/index.html">AuthenticationContext</a> for <code>this</code> call

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="identifier">authentication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authentication(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs <a href="-authentication/index.html">Authentication</a> feature if not yet installed and invokes <a href="authentication.html#io.ktor.auth$authentication(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</a> on it's config.
One is allowed to modify existing authentication configuration only in <a href="./authentication.md">authentication</a>'s block or
via <a href="-authentication/configure.html">Authentication.configure</a> function.
Changing captured instance of configuration outside of <a href="authentication.html#io.ktor.auth$authentication(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</a> may have no effect or damage application's state.

</div>
