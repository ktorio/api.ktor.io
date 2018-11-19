---
title: JWTAuthenticationProvider.verifier - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth.jwt</a> / <a href="index.html">JWTAuthenticationProvider</a> / <a href="./verifier.html">verifier</a></div>

# verifier

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwt.JWTVerifier)/verifier">verifier</span><span class="symbol">:</span>&nbsp;<span class="identifier">JWTVerifier</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(kotlin.Function1((io.ktor.auth.HttpAuthHeader, com.auth0.jwt.JWTVerifier)))/verifier">verifier</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.auth/-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">JWTVerifier</span><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

### Parameters

<code>verifier</code> - verifies token format and signature

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwk.JwkProvider, kotlin.String)/jwkProvider">jwkProvider</span><span class="symbol">:</span>&nbsp;<span class="identifier">JwkProvider</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwk.JwkProvider, kotlin.String)/issuer">issuer</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

### Parameters

<code>jwkProvider</code> - provides the JSON Web Key

<code>issuer</code> - the issuer of the JSON Web Token

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwk.JwkProvider)/jwkProvider">jwkProvider</span><span class="symbol">:</span>&nbsp;<span class="identifier">JwkProvider</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

### Parameters

<code>jwkProvider</code> - provides the JSON Web Key

</div>
