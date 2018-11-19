---
title: Authentication.Configuration.register - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">Authentication</a> / <a href="index.html">Configuration</a> / <a href="./register.html">register</a></div>

# register

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">register</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication.Configuration$register(io.ktor.auth.AuthenticationProvider)/provider">provider</span><span class="symbol">:</span>&nbsp;<a href="../../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register the specified <a href="register.html#io.ktor.auth.Authentication.Configuration$register(io.ktor.auth.AuthenticationProvider)/provider">provider</a>

### Exceptions

<code>IllegalArgumentException</code> - if there is already provider installed with the same name