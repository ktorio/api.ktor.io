---
title: Authentication.Configuration.provider - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">Authentication</a> / <a href="index.html">Configuration</a> / <a href="./provider.html">provider</a></div>

# provider

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">provider</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a provider with the specified <a href="provider.html#io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/name">name</a> and <a href="provider.html#io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/configure">configure</a> it

### Exceptions

<code>IllegalArgumentException</code> - if there is already provider installed with the same name