---
title: JWTAuthenticationProvider - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth.jwt</a> / <a href="./index.html">JWTAuthenticationProvider</a></div>

# JWTAuthenticationProvider

<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.auth/-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

JWT authentication provider that will be registered with the specified <a href="../../io.ktor.auth/-authentication-provider/name.html">name</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">JWTAuthenticationProvider</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$<init>(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">)</span></code></div>

JWT authentication provider that will be registered with the specified <a href="-init-.html#io.ktor.auth.jwt.JWTAuthenticationProvider$<init>(kotlin.String)/name">name</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="realm.html">realm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">realm</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

JWT realm name that will be used during auth challenge


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication-provider/name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

is the name of the provider, or <code>null</code> for a default provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication-provider/pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../../io.ktor.auth/-authentication-pipeline/index.html"><span class="identifier">AuthenticationPipeline</span></a></code></div>

Authentication pipeline for this provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication-provider/skip-when.html">skipWhen</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">skipWhen</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><span class="symbol">(</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Authentication filters specifying if authentication is required for particular <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="auth-schemes.html">authSchemes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">authSchemes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$authSchemes(kotlin.String, kotlin.Array((kotlin.String)))/defaultScheme">defaultScheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"Bearer"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$authSchemes(kotlin.String, kotlin.Array((kotlin.String)))/additionalSchemes">additionalSchemes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="validate.html">validate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">validate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$validate(kotlin.SuspendFunction2((io.ktor.application.ApplicationCall, io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../-j-w-t-credential/index.html"><span class="identifier">JWTCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../io.ktor.auth/-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Apply <a href="validate.html#io.ktor.auth.jwt.JWTAuthenticationProvider$validate(kotlin.SuspendFunction2((io.ktor.application.ApplicationCall, io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</a> function to every call with <a href="../-j-w-t-credential/index.html">JWTCredential</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="verifier.html">verifier</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwt.JWTVerifier)/verifier">verifier</span><span class="symbol">:</span>&nbsp;<span class="identifier">JWTVerifier</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(kotlin.Function1((io.ktor.auth.HttpAuthHeader, com.auth0.jwt.JWTVerifier)))/verifier">verifier</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.auth/-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">JWTVerifier</span><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwk.JwkProvider, kotlin.String)/jwkProvider">jwkProvider</span><span class="symbol">:</span>&nbsp;<span class="identifier">JwkProvider</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwk.JwkProvider, kotlin.String)/issuer">issuer</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$verifier(com.auth0.jwk.JwkProvider)/jwkProvider">jwkProvider</span><span class="symbol">:</span>&nbsp;<span class="identifier">JwkProvider</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication-provider/skip-when.html">skipWhen</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">skipWhen</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationProvider$skipWhen(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds an authentication filter to the list


</td>
</tr>
</tbody>
</table>
