---
title: JWTAuthenticationProvider.authSchemes - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth.jwt</a> / <a href="index.html">JWTAuthenticationProvider</a> / <a href="./auth-schemes.html">authSchemes</a></div>

# authSchemes

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">authSchemes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$authSchemes(kotlin.String, kotlin.Array((kotlin.String)))/defaultScheme">defaultScheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"Bearer"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$authSchemes(kotlin.String, kotlin.Array((kotlin.String)))/additionalSchemes">additionalSchemes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

### Parameters

<code>defaultScheme</code> - default scheme that will be used to challenge the client when no valid auth is provided

<code>additionalSchemes</code> - additional schemes that will be accepted when validating the authentication