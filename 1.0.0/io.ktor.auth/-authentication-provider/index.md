---
title: AuthenticationProvider - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">AuthenticationProvider</a></div>

# AuthenticationProvider

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">AuthenticationProvider</span></code></div>

Represents an authentication provider with the given name

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">AuthenticationProvider</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationProvider$<init>(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Represents an authentication provider with the given name


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

is the name of the provider, or <code>null</code> for a default provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../-authentication-pipeline/index.html"><span class="identifier">AuthenticationPipeline</span></a></code></div>

Authentication pipeline for this provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="skip-when.html">skipWhen</a>


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

<a href="skip-when.html">skipWhen</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">skipWhen</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationProvider$skipWhen(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds an authentication filter to the list


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-basic-authentication-provider/index.html">BasicAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">BasicAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a Basic authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-digest-authentication-provider/index.html">DigestAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DigestAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a Digest authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-form-authentication-provider/index.html">FormAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a form-based authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth.jwt/-j-w-t-authentication-provider/index.html">JWTAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationProvider</span></a></code></div>

JWT authentication provider that will be registered with the specified <a href="name.html">name</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-o-auth-authentication-provider/index.html">OAuthAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuthAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents an OAuth provider for <a href="../-authentication/index.html">Authentication</a> feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-session-authentication-provider/index.html">SessionAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionAuthenticationProvider</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a session-based authentication provider


</td>
</tr>
</tbody>
</table>
